//Built using buildjs.py script - do not hand edit

// econgraphs.js
var econgraphs = {functions: {}};

// budget/budget.js
econgraphs.functions.budget = {

    addBudgetMethods: function (b, params) {

        b.prices = b.prices || [];

        b.income = b.income || 0;

        b.bundle = b.bundle || [];

        b.setPrice = function(price, index) {
            b.prices[index] = price;
        };

        b.setPrices = function(prices) {
            b.prices = prices || b.prices;
            return b;
        };

        b.setIncome = function(income) {
            b.income = income || b.income;
            return b;
        };

        b.update = function(params) {
            if(params) {
                b.setPrices(params.prices);
                b.setIncome(params.income);
            }
        };

        // For now, b is a simple multiplication; could be adjusted for volume discounts, etc.
        b.expenditure = function(quantity,price) {
            return quantity * price;
        };

        b.cost = function(bundle,prices) {

            // used store prices (and potentially bundle) if none passed in
            bundle = bundle || b.bundle;
            prices = prices || b.prices;

            var totalCost = 0;

            for(var good=0; good < bundle.length; good++) {
                totalCost += b.expenditure(bundle[good], prices[good])
            }

            return totalCost;
        };

        b.isAffordable = function(bundle,prices,income) {

            // Use stored income if none passed in
            income = income || b.income;

            return (b.cost(bundle, prices) <= income)
        };

        b.area = function(xDomain,yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            var areaPoints = [{x: xDomain.min, y:yDomain.min}];

            var constraintPoints = b.points(xDomain,yDomain).sort(sortObjects('x'));

            if(constraintPoints[0].y == yDomain.max) {
                areaPoints.push({x:xDomain.min, y:yDomain.max});
            }

            if (constraintPoints[1].x == xDomain.max) {
                constraintPoints.push({x: xDomain.max, y: yDomain.min});
            }

            return d3.merge([areaPoints,constraintPoints]);

        };

        b.update(params);

        return b;

    }

};

// budget/simple.js
/**
 * Created by cmakler on 10/30/14.
 */

econgraphs.functions.budget.SimpleBudgetConstraint = function () {

    return function (params) {

        // create linear function I - PxX - PyY; this must be positive in order for the constraint to be met.
        var b = new kg.functions.Linear({definitionType: 'standard'});

        b.updateParams = function(params) {

            if(typeof params == 'function') {
                params = params();
            }

            params = params || {income: 0, prices: [0,0]};

            var px = parseFloat(params.px || params.prices[0]),
                py = parseFloat(params.py || params.prices[1]),
                income = parseFloat(params.income);

            b.setCoefficients({a: -px, b: -py, c: income});

            return b;

        };

        b.updateParams(params);

        return econgraphs.functions.budget.addBudgetMethods(b, params);
    }

}();

// utility/utility.js
econgraphs.functions.utility = {

    addUtilityMethods: function (u, params) {

        // If utility parameter is included, either as a number or a point,
        // set the level of the function to that utility value (or the utility value of the specified point)
        if (params && params.utility) {
            u.setLevel(params.utility);
        }

        // Functions that can be called for any utility function

        u.setBundle = function (bundle) {
            u.bases = bundle || [];
            return u;
        };

        u.setBudgetConstraint = function(budgetConstraintParams) {
            if(budgetConstraintParams) {
                if (!u.budgetConstraint){
                    u.budgetConstraint = new econgraphs.functions.budget.SimpleBudgetConstraint;
                }
                u.budgetConstraint.update(budgetConstraintParams);
            }
        };

        u.mu = function (bundle, index) {
            bundle = bundle || u.bases;
            return u.derivative(index).value(bundle);
        };

        u.mux = function (bundle) {
            bundle = bundle || u.bases;
            return u.mu(bundle, 1);
        };

        u.muy = function (bundle) {
            bundle = bundle || u.bases;
            return u.mu(bundle, 2);
        };

        u.mrs = function (bundle) {
            bundle = bundle || u.bases;
            if (u.muy(bundle) == 0 || u.mux(bundle) == 'undefined') {
                return 'undefined'
            } else {
                return u.mux(bundle) / u.muy(bundle)
            }
        };

        u.mrsTangentLine = function(bundle) {
            var point = {x: bundle[0], y:bundle[1]},
                slope = -u.mrs(bundle),
                l = new kg.functions.Linear({definitionType:'point-slope', point:point, slope: slope});
            return l;
        };

        u.utility = function(bundle) {
            bundle = bundle || u.bases;
            return u.value([bundle.x,bundle.y])
        };

        u.indirectUtility = function (income,px,py) {

            return u.value(u.optimalBundle(income, px, py));

        };

        // Given two bundles, evaluates whether agent prefers first or second, or is indifferent
        u.bundlePreferred = function(bundles, t) {

            var u1 = u.utility(bundles[0]),
                u2 = u.utility(bundles[1]),
                percentUilityDifference = (u2 - u1)/(0.5*(u1 + u2)),
                tolerance = t || 0.01; // percent difference within which one is thought to be indifferent

            if(percentUilityDifference > tolerance) {
                return 2; //second bundle preferred
            }

            if(percentUilityDifference < -tolerance) {
                return 1; //first bundle preferred
            }

            return 0; //indifferent between two bundles

        };

        // Find the optimal bundle for a given income and prices
        u.optimalBundle = function (income, px, py) {

            if (u.budgetConstraint) {
                income = income || u.budgetConstraint.income;
                px = px || u.budgetConstraint.prices[0];
                py = py || u.budgetConstraint.prices[1];
            }

            return u._optimalBundle(income,px,py);
        };

        // Find the indifferece curve passing through the optimal bundle
        u.optimalIndifferenceCurve = function (income, px, py) {

            return u.setLevel(u.optimalBundle(income,px,py))

        };



        /*

        Find the price-consumption curve for a given income and other price

        The pccParams object should have the following structure:
        {
            good: the good whose price we are going to vary; must be 'x' or 'y'; 'x' by default
            minPrice: the minimum price to evaluate (0 by default)
            maxPrice: the maximum price to evaluate (50 by default)
            income: the consumer's income, OR a bundle {x:x, y:y} to be evaluated at current prices
            otherPrice: the price of the other good
        }

        */

        u.priceConsumptionCurve = function (pccParams) {

            return {

                points: function (xDomain, yDomain) {

                    var px,
                        py,
                        isGoodX = ('y' != pccParams['good']),
                        minPrice = pccParams['minPrice'] || 0,
                        maxPrice = pccParams['maxPrice'] || 100,
                        income = pccParams['income'],
                        endowment = pccParams['endowment']||{},
                        samplePoints = pccParams['samplePoints'] || 51,
                        otherPrice = pccParams['otherPrice'],
                        priceConsumptionFunction = function (price) {
                            px = isGoodX ? price : otherPrice;
                            py = isGoodX ? otherPrice : price;
                            if (endowment.hasOwnProperty('x')) {
                                income = endowment.x * px + endowment.y * py;
                            }
                            return u.optimalBundle(income, px, py);
                        };

                    return functionPoints(priceConsumptionFunction, xDomain, yDomain, {min: minPrice, max: maxPrice, dependentVariable: 'p'});

                }
            }
        };

        /*

         Find the income expansion path for a given set of prices.
         The incomeExpansionParams object should have the following structure:

             {
                minIncome: the minimum income to evaluate (0 by default)
                maxIncome: the maximum income to evaluate (50 by default)
                px: price of x
                py: price of y
             }

         */

        u.incomeConsumptionCurve = function (iccParams) {

            return {

                points: function (xDomain, yDomain) {

                    var minIncome = iccParams['minIncome'] || 0,
                        maxIncome = iccParams['maxIncome'] || 50,
                        px = iccParams['px'],
                        py = iccParams['py'],
                        samplePoints = iccParams['samplePoints'] || 51,
                        incomeConsumptionFunction = function (income) {
                            return u.optimalBundle(income, px, py);
                        };

                    return functionPoints(incomeConsumptionFunction, xDomain, yDomain, {min: minIncome, max: maxIncome, dependentVariable: 'i'});

                }
            }
        };

        /*

        Find the Engel curve for a given set of prices
        The engelCurveParams object should have the following structure:
        {
            good: the good whose quantity demanded we are going to plot
            minIncome: the minimum income to evaluate (0 by default)
            maxIncome: the maximum income to evaluate (50 by default)
            px: price of x
            py: price of y
        }

        */

        u.engelCurve = function(engelParams) {

            return {

                points: function (xDomain, yDomain) {

                    var isGoodX = ('y' != engelParams['good']),
                        px = engelParams['px'],
                        py = engelParams['py'],
                        engelFunction = function (income) {
                            return isGoodX ? u.optimalBundle(income, px, py)[0] : u.optimalBundle(income, px, py)[1];
                        };

                    return functionPoints(engelFunction, xDomain, yDomain, {dependentVariable: 'y'});
                }
            }

        };

        /*

         Find the demand curve for a given income and other price

         The demandParams object should have the following structure:
             {
                 good: the good whose price we are going to vary; must be 'x' or 'y'; 'x' by default
                 minPrice: the minimum price to evaluate (0 by default)
                 maxPrice: the maximum price to evaluate (50 by default)
                 income: the consumer's income
                 otherPrice: the price of the other good
             }

         */
        u.demandCurve = function(demandParams) {

            return {

                points: function (xDomain, yDomain) {

                    yDomain = domainAsObject(yDomain);

                    var compensatedIncome,
                        isGoodX = ('y' != demandParams['good']),
                        compensationPrice = demandParams['compensationPrice'] || 0,
                        income = demandParams['income'],
                        numberOfConsumers = demandParams['numberOfConsumers'] || 1,
                        minPrice = demandParams['minPrice'] || yDomain.min,
                        maxPrice = demandParams['maxPrice'] || yDomain.max,
                        otherPrice = demandParams['otherPrice'],
                        samplePoints = demandParams['samplePoints'] || 51,
                        demandFunction = function(price) {
                            if (isGoodX) {
                                compensatedIncome = (compensationPrice > 0) ? u.compensatedIncome(income, compensationPrice, price, otherPrice) : income;
                                return u.optimalBundle(compensatedIncome, price, otherPrice)[0] * numberOfConsumers;
                            } else {
                                return u.optimalBundle(income, otherPrice, price)[1] * numberOfConsumers;
                            }
                        };

                    return functionPoints(demandFunction,xDomain,yDomain,{dependentVariable:'y', min:minPrice, max:maxPrice});
                },

                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);


                    var points = this.points(xDomain,yDomain),
                        minPrice = demandParams['minPrice'] || yDomain.min,
                        maxPrice = demandParams['maxPrice'] || yDomain.max;

                    points.push({x: 0, y: maxPrice});
                    points.push({x: 0, y: minPrice});

                    return points;

                }
            }
        };

        // Find the lowest possible cost for a given level of utility, given px and py
        u.lowestPossibleCost = function (utility, px, py) {

            if (u.budgetConstraint) {
                px = px || u.budgetConstraint.prices[0];
                py = py || u.budgetConstraint.prices[1];
            }

            return u._lowestPossibleCost(utility, px, py);
        };

        // Return the bundle that provides a given level of utility at lowest cost
        u.lowestCostBundle = function (utility,px,py) {

            // set income to lowest necessary to achieve utility
            var income = u.lowestPossibleCost(utility,px,py);
            return u.optimalBundle(income,px,py);

        };

        // Return the income necessary to achieve v(income,px1,py) if px is now px2
        u.compensatedIncome = function(income,px1,px2,py) {
            var utility = u.value(u.optimalBundle(income, px1, py));
            return u._lowestPossibleCost(utility, px2, py);

        };

        // Return the decomposition bundle for a price change from px1 to px2
        u.decompositionBundle = function (income, px1, px2, py) {

            return u.optimalBundle(u.compensatedIncome(income,px1,px2,py), px2, py);

        };

        return u;

    }

};

// utility/cobbdouglas.js
/**
 * Created by cmakler on 10/27/14.
 */

econgraphs.functions.utility.CobbDouglas = function () {

    return function (params) {

        var alpha, beta, returnsToScale, xProportion, yProportion;

        // Create a monomial of the form u(x,y) = (x^alpha)(y^beta)
        var u = new kg.functions.Monomial({coefficient: 1, powers: [alpha, beta]});

        // Add utility function methods (marginal utility, MRS, etc.)
        u = econgraphs.functions.utility.addUtilityMethods(u, params);

        u.updateParams = function(params) {

            if (typeof params == 'function') {
                params = params();
            }

            // Alpha is the power to which the first (x) variable is raised. Set to 0.5 by default.
            u.alpha = (params && params.hasOwnProperty('alpha')) ? params['alpha'] : 0.5;

            // Beta is the power to which the second (y) variable is raised. Set to 1 - alpha by default.
            u.beta = (params && params.hasOwnProperty('beta')) ? params['beta'] : 1 - u.alpha;

            // A Cobb-Douglas function is constant returns to scale if alpha + beta = 1,
            // diminishing returns to scale if alpha + beta < 1, and increasing returns to scale if alpha + beta > 1.
            returnsToScale = u.alpha + u.beta;

            // A nice feature of Cobb-Douglas functions is that their optimal bundles
            // are characterized by proportional spending on X and Y.
            xProportion = u.alpha / (u.alpha + u.beta),
            yProportion = u.beta / (u.alpha + u.beta);

            u.setPowers([u.alpha, u.beta]);

            return u;

        };

        u.updateParams(params);

        // Find the optimal bundle for a given income and prices
        u._optimalBundle = function (income, px, py) {

            return [xProportion * income / px, yProportion * income / py]
        };

        // Find the lowest possible cost for a given level of utility, given px and py
        u._lowestPossibleCost = function (utility, px, py) {
            return returnsToScale*Math.pow(utility,1/returnsToScale)*Math.pow(px/ u.alpha,xProportion)*Math.pow(py/ u.beta,yProportion);
        };

        u.preferred = {area: function(xDomain,yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            if(u.alpha == 0) {
                return [
                    {x: xDomain.min, y: u.yValue(xDomain.min)},
                    {x: xDomain.min, y: yDomain.max},
                    {x: xDomain.max, y: yDomain.max},
                    {x: xDomain.max, y: u.yValue(xDomain.max)}
                ]
            }

            if(u.beta == 0) {
                return [
                    {x: u.xValue(yDomain.min), y: yDomain.min},
                    {x: xDomain.max, y: yDomain.min},
                    {x: xDomain.max, y: yDomain.max},
                    {x: u.xValue(yDomain.max), y: yDomain.max}
                ]
            }

            var allPoints = d3.merge([u.points(xDomain, yDomain), u.points(xDomain, yDomain, true)]).sort(sortObjects('x'));

            allPoints.push({x: xDomain.max, y: yDomain.max});

            return allPoints;

        }};

        u.dispreferred = {area: function (xDomain, yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            /* This doesn't work yet
            if (u.alpha == 0) {
                return [
                    {x: xDomain.min, y: u.yValue(xDomain.min)},
                    {x: xDomain.min, y: yDomain.max},
                    {x: xDomain.max, y: yDomain.max},
                    {x: xDomain.max, y: u.yValue(xDomain.max)}
                ]
            }

            if (u.beta == 0) {
                return [
                    {x: u.xValue(yDomain.min), y: yDomain.min},
                    {x: xDomain.max, y: yDomain.min},
                    {x: xDomain.max, y: yDomain.max},
                    {x: u.xValue(yDomain.max), y: yDomain.max}
                ]
            }
            */

            var allPoints = d3.merge([u.points(xDomain, yDomain), u.points(xDomain, yDomain, true)]).sort(sortObjects('x'));

            allPoints.push({x: xDomain.max, y: yDomain.min});
            allPoints.push({x: xDomain.min, y: yDomain.min});
            allPoints.push({x: xDomain.min, y: yDomain.max});

            return allPoints;

        }};

        u.mrsOfX = function(bundle) {

            return {points: function (xDomain, yDomain) {

                var points = [];

                var x, y;

                for (var i = 0; i < 51; i++) {

                    x = xDomain.min + (i / 50) * (xDomain.max - xDomain.min);
                    y = u.mrs(x);
                    if (inRange(y, yDomain)) {
                        points.push({x: x, y: y});
                    }
                }
            }
            }


        };



        return u;
    }

}();

// utility/complements.js
/**
 * Created by cmakler on 10/27/14.
 */


// This creates a utility function of the form u(x,y) = min(ax,by)
econgraphs.functions.utility.PerfectComplements = (function () {

    return function (params) {

        var xFunction = new kg.functions.Linear({definitionType: 'standard', a: 1, b: 0, c: 0}),
            yFunction = new kg.functions.Linear({definitionType: 'standard', a: 0, b: 1, c: 0});

        var u = new kg.functions.Min({minimands: [xFunction,yFunction]});

        function ensureValidNumbers() {
            u.level = u.level || 0;
            u.a = u.a || 1;
            u.b = u.b || 1;
        }

        u.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            if (params && params.hasOwnProperty('a')) {
                u.a = params.a;
                u.minimands[0].setCoefficient(1, u.a)
            }

            if (params && params.hasOwnProperty('a')) {
                u.b = params.b;
                u.minimands[1].setCoefficient(2, u.b)
            }
            return u;

        };

        u.updateParams(params);

        // Find the optimal bundle for a given budget constraint
        u._optimalBundle = function (income, px, py) {

            // The highest affordable utility comes when ax = by = highest utility
            var highestUtility = income / ((px/ u.a) + (py / u.b));

            return [highestUtility / u.a, highestUtility / u.b ];
        };

        // Find the lowest possible cost for a given level of utility, given px and py
        u._lowestPossibleCost = function (utility, px, py) {
            return utility * ((px / u.a) + (py / u.b));
        };

        u.xValue = function (y) {
            ensureValidNumbers();
            if (y > u.level / u.b) {
                return u.level / u.a;
            } else {
                return 'undefined';
            }
        };

        u.yValue = function(x) {
            ensureValidNumbers();
            if(x > u.level/ u.a) {
                return u.level / u.b;
            } else {
                return 'undefined';
            }
        };

        u.points = function(xDomain,yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            ensureValidNumbers();
            var critical_x = u.level / u.a,
                critical_y = u.level / u.b;
            if(inRange(critical_x,xDomain) && inRange(critical_y,yDomain)) {
                return [
                    {x: critical_x, y: yDomain.max},
                    {x: critical_x, y: critical_y},
                    {x: xDomain.max, y: critical_y}
                ];
            } else {
                return null;
            }
        };

        u.preferred = {area: function (xDomain, yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            var points = u.points(xDomain, yDomain);

            points.push({x: xDomain.max, y: yDomain.max});

            return points;

        }};

        return econgraphs.functions.utility.addUtilityMethods(u,params);

    }

}());



// utility/substitutes.js
/**
 * Created by cmakler on 10/27/14.
 */


econgraphs.functions.utility.PerfectSubstitutes = (function () {

    return function (params) {

        var u = new kg.functions.Linear({definitionType: 'standard'});

        u = econgraphs.functions.utility.addUtilityMethods(u, params);

        u.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            if(params) {
                u.setCoefficients({a: params.a, b: params.b, c: 0});
            }

            return u;

        };

        u.preferred = {area: function (xDomain, yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            var allPoints = u.points(xDomain, yDomain);

            // TODO: this fails when horizontal
            allPoints.push({x: xDomain.max, y: yDomain.min});
            allPoints.push({x: xDomain.max, y: yDomain.max});
            allPoints.push({x: xDomain.min, y: yDomain.max});

            return allPoints;

        }};

        // Find the optimal bundle for a given budget constraint
        u._optimalBundle = function (income, px, py) {

            var onlyX = [income / px, 0],
                onlyY = [0, income / py],
                mix = [0.5 * income / px, 0.5 * income / py];

            if(u.value(onlyX) > u.value(onlyY)) {
                return onlyX;
            } else if (u.value(onlyY) > u.value(onlyX)) {
                return onlyY;
            } else {
                return mix;
            }

        };

        // Find the lowest possible cost for a given level of utility, given px and py
        // In this case, to obtain U units of utility, this can be done with U/a units of X or U/b units of Y.
        u._lowestPossibleCost = function (utility, px, py) {
            return Math.min(px * utility / u.a(), py * utility / u.b());
        };

        return u;

    }

}());

// utility/ces.js
/**
 * Created by cmakler on 1/26/15.
 */

econgraphs.functions.utility.CES = function () {

    return function (params) {

        var u = new kg.functions.Generic;

        u.alpha = 0.5;
        u.r = 0.5;

        u.value = function(bundle) {
            return u.alpha*Math.pow(bundle[0], u.r) + (1- u.alpha)*Math.pow(bundle[1], u.r)
        };

        u.xValue = function(y) {

            var num = u.level - (1- u.alpha)*Math.pow(y, u.r),
                dem = u.alpha;

            return Math.pow(num/dem,1/ u.r);

        };

        u.yValue = function (x) {

            return Math.pow((u.level - u.alpha * Math.pow(x, u.r)) / (1 - u.alpha), 1 / u.r)

        };

        u.points = function(xDomain,yDomain,yIsIndependent) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            var points = [];

            var x, y;

            for (var i = 0.01; i < 51; i++) {

                if (yIsIndependent) {
                    // Sample 51 points along the Y domain
                    y = yDomain.min + (i / 50) * (yDomain.max - yDomain.min);
                    x = u.xValue(y);
                    if (inRange(x, xDomain)) {
                        points.push({x: x, y: y});
                    }
                } else {
                    // Sample 51 points along the X domain
                    x = xDomain.min + (i / 50) * (xDomain.max - xDomain.min);
                    y = u.yValue(x);
                    if (inRange(y, yDomain)) {
                        points.push({x: x, y: y});
                    }
                }
            }

            return points;
        }

        // Add utility function methods (marginal utility, MRS, etc.)
        u = econgraphs.functions.utility.addUtilityMethods(u);

        u.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            if (params) {

                u.alpha = params['alpha'] || u.alpha;
                u.r = params['r'] - 0.01 || u.r;

                if(params.hasOwnProperty('s')) {
                    if(params.s >= 0) {
                        u.r = params.s - 0.01; // Cheat so that 1 = 0.999
                    } else {
                        u.r = params.s / (1.01 + params.s) // Cheat so that -1 => -1 / 0.001
                    }
                }



                if (u.r == 0) {
                    u.r = 0.01;
                }

            }

            return u;

        };

        u.updateParams(params);

        // Find the optimal bundle for a given income and prices
        u._optimalBundle = function (income, px, py) {

            var s = 1 / (1 - u.r),
                denominator = Math.pow(u.alpha,s)*Math.pow(px, 1-s) + Math.pow(1-u.alpha,s)*Math.pow(py, 1-s),
                optimal_x = income * Math.pow(px/ u.alpha,-s)/denominator,
                optimal_y = income * Math.pow(py/ (1 - u.alpha),-s) / denominator;

            return [optimal_x,optimal_y];
        };

        // Find the lowest possible cost for a given level of utility, given px and py
        u._lowestPossibleCost = function (utility, px, py) {

            var s = 1 / (1 - u.r),
                denominator = Math.pow(u.alpha, s) * Math.pow(px, 1 - s) + Math.pow(1 - u.alpha, s) * Math.pow(py, 1 - s),
                x_coefficient = Math.pow(px / u.alpha, -s) / denominator,
                y_coefficient = Math.pow(py / (1 - u.alpha), -s) / denominator,
                scale_factor = u.alpha*Math.pow(x_coefficient, u.r) + (1- u.alpha)*Math.pow(y_coefficient, u.r),

                c = Math.pow(utility/scale_factor, 1/ u.r);

                return c;
        };

        return u;
    }

}();

// utility/inferior.js
/**
 * Created by cmakler on 1/26/15.
 *
 * Note: this implements the utility function described in http://www.hindawi.com/journals/isrn/2012/608645/
 */

econgraphs.functions.utility.Inferior = function () {

    return function (params) {

        var u = new kg.functions.Generic;

        u.xmin = 10;
        u.ymax = 40;
        u.alpha = 1;
        u.delta = 1;

        u.valueOfX = function(x) {return u.alpha * Math.log(x - u.xmin)};
        u.valueOfY = function(y) {return -(u.alpha + u.delta) * Math.log(u.ymax - y)};

        u.value = function (bundle) {
            return u.valueOfX(bundle[0]) + u.valueOfY(bundle[1]);
        };

        u.xValue = function (y) {

            return u.xmin + Math.exp((u.level - u.valueOfY(y))/ u.alpha);

        };

        u.yValue = function (x) {

            return u.ymax + Math.exp((u.valueOfX(x) - u.level)/(u.alpha + u.delta));

        };

        u.points = function (xDomain, yDomain, yIsIndependent) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            xDomain.min = u.xmin;
            yDomain.max = u.ymax;

            var points = [];

            var x, y;

            for (var i = 0.01; i < 51; i++) {

                if (yIsIndependent) {
                    // Sample 51 points along the Y domain
                    y = yDomain.min + (i / 50) * (yDomain.max - yDomain.min);
                    x = u.xValue(y);
                    if (inRange(x, xDomain)) {
                        points.push({x: x, y: y});
                    }
                } else {
                    // Sample 51 points along the X domain
                    x = xDomain.min + (i / 50) * (xDomain.max - xDomain.min);
                    y = u.yValue(x);
                    if (inRange(y, yDomain)) {
                        points.push({x: x, y: y});
                    }
                }
            }

            return points;
        };

        // Add utility function methods (marginal utility, MRS, etc.)
        u = econgraphs.functions.utility.addUtilityMethods(u);

        u.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            if (params) {

                u.xmin = params['xmin'] || u.xmin;
                u.ymax = params['ymax'] || u.ymax;
                u.alpha = params['alpha'] || u.alpha;
                u.delta = params['delta'] || u.delta;

            }

            return u;

        };

        u.updateParams(params);

        // Find the optimal bundle for a given income and prices
        u._optimalBundle = function (income, px, py) {

            var extremeBundleCost = income - px* u.xmin - py* u.ymax;

            if(extremeBundleCost < 0) {

                var alpha_1 = u.alpha,
                    alpha_2 = u.alpha + u.delta,
                    beta_1 = alpha_1 / (alpha_2 - alpha_1),
                    beta_2 = alpha_2 / (alpha_2 - alpha_1);

                var optimal_x = u.xmin - beta_1 * extremeBundleCost / px,
                    optimal_y = u.ymax + beta_2 * extremeBundleCost / py;

                return [optimal_x, optimal_y];

                if(optimal_x >= u.xmin && optimal_y > 0) {
                    return [optimal_x, optimal_y];
                }

                // Corner solution if buy no y
                if(optimal_y <= 0) {
                    return [income/px, 0]
                }

                // Corner solution if X is as subsistence level
                if(optimal_x < u.xmin) {
                    return [u.xmin, (income - u.xmin * px)/py]
                }

            }

        };

        // Find the lowest possible cost for a given level of utility, given px and py
        u._lowestPossibleCost = function (utility, px, py) {

            return u.xmin*px + u.ymax*py - 0.25/Math.exp(utility); // TODO This is wrong. Needs more math.

        };

        return u;
    }

}();

// production/production.js
/**
 * Created by cmakler on 2/17/15.
 */

econgraphs.functions.production = {

    addProductionMethods: function (f, params) {

        f.longRunTotalCost = function(q,w,r) {
            return f.lowestPossibleCost(q,w,r);
        };

        f.longRunTotalCostCurve = function (w, r) {

            return {
                points: function (xDomain, yDomain) {

                    var longRunTotalCost = function (q) {
                        return f.longRunTotalCost(q, w, r)
                    };

                    return functionPoints(longRunTotalCost, xDomain, yDomain);
                }
            }

        };

        f.laborToProduceQ = function(q,k) {
            f.setLevel(q);
            return f.xValue(k);
        };

        f.shortRunFixedCost = function(r,k) {
            return r*k;
        };

        f.shortRunFixedCostCurve = function (r, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunFixedCost = function (q) {
                        return f.shortRunFixedCost(r, k)
                    };

                    return functionPoints(shortRunFixedCost, xDomain, yDomain);
                }
            }

        };

        f.shortRunVariableCost = function(q,w,k) {
            return w* f.laborToProduceQ(q,k);
        };

        f.shortRunVariableCostCurve = function (w, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunVariableCost = function (q) {
                        return f.shortRunVariableCost(q, w, k)
                    };

                    return functionPoints(shortRunVariableCost, xDomain, yDomain);
                }
            }

        };

        f.shortRunTotalCost = function(q,w,r,k) {
            return f.shortRunFixedCost(r,k) + f.shortRunVariableCost(q,w,k);
        };

        f.shortRunTotalCostCurve = function (w, r, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunTotalCost = function (q) {
                        return f.shortRunTotalCost(q, w, r, k)
                    };

                    return functionPoints(shortRunTotalCost, xDomain, yDomain);
                }
            }

        };

        f.longRunMarginalCost = function(q,w,r) {
            return (f.longRunTotalCost(q+0.01,w,r) - f.longRunTotalCost(q,w,r))*100;
        };

        f.longRunMarginalCostCurve = function (w, r) {

            return {
                points: function (xDomain, yDomain) {

                    var longRunMarginalCost = function (q) {
                        return f.longRunMarginalCost(q, w, r)
                    };

                    return functionPoints(longRunMarginalCost, xDomain, yDomain);
                }
            }

        };

        f.shortRunMarginalCost = function (q, w, r, k) {
            return (f.shortRunTotalCost(q + 0.01, w, r, k) - f.shortRunTotalCost(q, w, r, k)) * 100;
        };

        f.shortRunMarginalCostCurve = function (w, r, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunMarginalCost = function (q) {
                        return f.shortRunMarginalCost(q, w, r, k)
                    };

                    return functionPoints(shortRunMarginalCost, xDomain, yDomain);
                }
            }

        };

        f.longRunAverageCost = function (q, w, r) {
            return f.longRunTotalCost(q, w, r)/q;
        };

        f.longRunAverageCostCurve = function (w, r) {

            return {
                points: function (xDomain, yDomain) {

                    var longRunAverageCost = function (q) {
                        return f.longRunAverageCost(q, w, r)
                    };

                    return functionPoints(longRunAverageCost, xDomain, yDomain);
                }
            }

        };

        f.shortRunAverageCost = function (q, w, r, k) {
            return f.shortRunTotalCost(q, w, r, k) / q;
        };

        f.shortRunAverageCostCurve = function (w, r, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunAverageCost = function (q) {
                        return f.shortRunAverageCost(q, w, r, k)
                    };

                    return functionPoints(shortRunAverageCost, xDomain, yDomain);
                }
            }

        };

        f.shortRunAverageFixedCost = function (q, r, k) {
            return r * k / q;
        };

        f.shortRunAverageFixedCostCurve = function (r, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunAverageFixedCost = function (q) {
                        return f.shortRunAverageFixedCost(q, r, k)
                    };

                    return functionPoints(shortRunAverageFixedCost, xDomain, yDomain);
                }
            }

        };


        f.shortRunAverageVariableCost = function (q, w, k) {
            return f.shortRunVariableCost(q,w,k) / q;
        };

        f.shortRunAverageVariableCostCurve = function (w, r, k) {

            return {
                points: function (xDomain, yDomain) {

                    var shortRunAverageVariableCost = function (q) {
                        return f.shortRunAverageVariableCost(q, w, r, k)
                    };

                    return functionPoints(shortRunAverageVariableCost, xDomain, yDomain);
                }
            }

        };

        f.shortRunProfit = function(q,p,w,r,k) {
            return p * f.shortRunTotalCost(q,w,r,k);
        };

        f.longRunProfitMaxQ = function(p,w,r) {
            //TODO Currently hard-coded for f(L,K) = (LK)^0.25
            return 0.25*Math.pow(w * r, -0.5) * p;
        };

        f.shortRunProfitMaxQ = function(p,w,r,k) {
            //TODO Currently hard-coded for f(L,K) = (LK)^0.25
            return Math.pow(0.25*p*k/w,0.33333);
        };

        f.shortRunSupplyCurve = function(w,r,k,n) {

            return {
                points: function(xDomain,yDomain) {
                    var shortRunSupplyQuantity = function(p) {
                        return f.shortRunProfitMaxQ(p,w,r,k)*n;
                    };

                    return functionPoints(shortRunSupplyQuantity, xDomain, yDomain, {dependentVariable:'y'})
                }
            }
        };

        f.profitArea = function(p,q,w,r,k) {
            return {
                area: function(xDomain,yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var ac = Math.min(f.shortRunAverageCost(q,w,r,k), yDomain.max),
                        price = Math.min(p, yDomain.max),
                        quantity = Math.min(q, xDomain.max);

                    return [
                        {x:xDomain.min, y:ac},
                        {x:quantity, y:ac},
                        {x:quantity, y:price},
                        {x:xDomain.min, y:price}
                    ]
                }
            }
        };

        return f;

    }

};

// production/cobbdouglasproduction.js
/**
 * Created by cmakler on 2/17/15.
 */


econgraphs.functions.production.CobbDouglas = function () {

    return function (params) {

        var f = new econgraphs.functions.utility.CobbDouglas(params);

        f = econgraphs.functions.production.addProductionMethods(f, params);

        f._shortRunProfitMaxQ = function(p,w,r,k) {
            return 3;
        };

        return f;
    }

}();

// production/translog.js
/**
 * Created by cmakler on 1/26/15.
 *
 * Note: this implements the utility function described in http://www.hindawi.com/journals/isrn/2012/608645/
 */

econgraphs.functions.production.Translog = function () {

    function translogTotalCost(q,w,r,coefficients) {

        var logW = Math.log(w),
            logR = Math.log(r);

        var logQ = Math.log(q),
            variables = [
                1, logQ, logW, logR,
                    logQ * logQ, logW * logW, logR * logR,
                    logR * logW, logW * logQ, logR * logQ
            ],
            sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += coefficients[i] * variables[i];
        }
        return Math.exp(sum);
    }

    return function (params) {

        var f = new kg.functions.Generic;

        f.coefficients = [1,1,1,1,1,1,1,1,1,1];

        f.w = 2;

        f.r = 2;

        f.totalCost = {
            points: function (xDomain, yDomain) {

                function totalCostOfOutput(q) {

                    return translogTotalCost(q, f.w, f.r, f.coefficients)

                }

                return functionPoints(totalCostOfOutput, xDomain, yDomain);

            }
        };

        f.marginalCost = {
            points: function (xDomain, yDomain) {

                function marginalCostOfOutput(q) {

                    return translogTotalCost(q+1, f.w, f.r, f.coefficients) - translogTotalCost(q, f.w, f.r, f.coefficients)

                }

                return functionPoints(marginalCostOfOutput, xDomain, yDomain);

            }
        };

        f.averageCost = {
            points: function (xDomain, yDomain) {

                function averageCostOfOutput(q) {

                    if(q == 0) { q = 0.01 } // avoid dividing by zero

                    return translogTotalCost(q, f.w, f.r, f.coefficients)/q

                }

                return functionPoints(averageCostOfOutput, xDomain, yDomain);

            }
        };

        f.updateParams = function(params) {

            var coefficientMeaning = {
                'constant': 0,
                'logQ' : 1,
                'logW' : 2,
                'logR' : 3,
                'logQ2' : 4,
                'logW2' : 5,
                'logR2' : 6,
                'logRlogW' : 7,
                'logQlogW' : 8,
                'logQlogR' : 9
            };

            if (typeof params == 'function') {
                params = params();
            };

            params = params || {};

            for(var term in coefficientMeaning) {
                if (params.hasOwnProperty(term)) {
                    f.coefficients[coefficientMeaning[term]] = params[term];
                }
            }

            if (params.hasOwnProperty('r')) {
                f.r = params.r;
            }

            if (params.hasOwnProperty('w')) {
                f.w = params.w;
            }



            return f;
        };

        return f;
    }

}();

// market/market.js
/**
 * Created by cmakler on 3/3/15.
 */

econgraphs.functions.market = {



}

// market/lineardemand.js
/**
 * Created by cmakler on 3/3/15.
 */

econgraphs.functions.market.LinearDemand = function () {

    return function (params) {

        var d = new kg.functions.Linear({definitionType: 'slope-intercept'});

        d.qIntercept = 40;
        d.dQdP = -1;

        d.marginalRevenue = new kg.functions.Linear({definitionType: 'slope-intercept'});

        d.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            params = params || {};

            // intercept is quantity demanded at P = 0
            if (params.hasOwnProperty('intercept')) {
                d.qIntercept = params.intercept;
            }

            // slope is dQ/dP
            if (params.hasOwnProperty('slope')) {
                d.dQdP = params.slope;
            }

            // invert the slope and intercept
            d.setIntercept(-d.qIntercept / d.dQdP);
            d.setSlope(1/ d.dQdP);

            // set new slope and intercept for marginal revenue
            d.marginalRevenue.setIntercept(d.intercept);
            d.marginalRevenue.setSlope(2*d.slope);

            return d;

        };

        d.quantityDemanded = function(p) {
            return d.xValue(p);
        };

        d.maximumPrice = function(q) {
            return d.yValue(q);
        };

        d.revenue = function(q) {
            return q* d.maximumPrice(q);
        };

        d.marketPrice = function (supply,tax) {
            return d.linearIntersection(supply,tax).y;
        };

        d.consumerSurplus = function (p) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var q = d.quantityDemanded(p),
                        qmax = d.quantityDemanded(yDomain.max);

                    if(qmax > 0) {
                        return [
                            {x: xDomain.min, y: p},
                            {x: q, y: p},
                            {x: qmax, y: yDomain.max},
                            {x: xDomain.min, y: yDomain.max}
                        ]
                    } else {
                        return [
                            {x: xDomain.min, y: p},
                            {x: q, y: p},
                            {x: xDomain.min, y: d.yIntercept()}
                        ]
                    }
                }
            }
        };

        d.marginalRevenueLoss = function (q1,q2) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var p1 = d.maximumPrice(q1),
                        p2 = d.maximumPrice(q2),
                        right = Math.min(q1,q2,xDomain.max),
                        lowerPrice = Math.min(p1,p2),
                        higherPrice = Math.max(p1,p2),
                        bottom = Math.min(lowerPrice, yDomain.max),
                        top = Math.min(higherPrice, yDomain.max);

                    return [
                        {x: xDomain.min, y: bottom},
                        {x: right, y: bottom},
                        {x: right, y: top},
                        {x: xDomain.min, y: top}
                    ]

                }
            }
        };

        d.marginalRevenueGain = function (q1, q2) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var p1 = d.maximumPrice(q1),
                        p2 = d.maximumPrice(q2),
                        top = Math.min(p1, p2, yDomain.max),
                        lowerQuantity = Math.min(q1, q2),
                        higherQuantity = Math.max(q1, q2),
                        left = Math.min(lowerQuantity, xDomain.max),
                        right = Math.min(higherQuantity, xDomain.max);

                    return [
                        {x: left, y: yDomain.min},
                        {x: right, y: yDomain.min},
                        {x: right, y: top},
                        {x: left, y: top}
                    ]

                }
            }
        };

        d.unchangedRevenue = function (q1, q2) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var quantity = Math.min(q1, q2),
                        price = d.maximumPrice(quantity),
                        top = Math.min(price, yDomain.max),
                        right = Math.min(quantity, xDomain.max);

                    return [
                        {x: xDomain.min, y: yDomain.min},
                        {x: right, y: yDomain.min},
                        {x: right, y: top},
                        {x: xDomain.min, y: top}
                    ]

                }
            }
        };

        d.totalRevenue = function (quantity) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var price = d.maximumPrice(quantity),
                        top = Math.min(price, yDomain.max),
                        right = Math.min(quantity, xDomain.max);

                    return [
                        {x: xDomain.min, y: yDomain.min},
                        {x: right, y: yDomain.min},
                        {x: right, y: top},
                        {x: xDomain.min, y: top}
                    ]

                }
            }
        };

        d.totalRevenueCurve = function () {
            return {
                points: function (xDomain, yDomain) {
                    return functionPoints(d.revenue, xDomain, yDomain);
                }
            }
        };

        d.mrTangentLine = function (q) {
            var point = {x: q, y: d.revenue(q)},
                slope = d.marginalRevenue.yValue(q),
                l = new kg.functions.Linear({definitionType: 'point-slope', point: point, slope: slope});
            return l;
        };


        d.updateParams(params);

        return d;
    }

}();

// market/linearsupply.js
/**
 * Created by cmakler on 3/3/15.
 */

econgraphs.functions.market.LinearSupply = function () {

    return function (params) {

        var s = new kg.functions.Linear({definitionType: 'slope-intercept'});

        var f = new econgraphs.functions.production.CobbDouglas();

        s.setSlope(1);
        s.setIntercept(0);

        // set default values for Cobb Douglas function f(L,K) = sqrt(LK)
        s.w = 1;
        s.r = 100;
        s.k = 1;
        s.n = 2000;

        s.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            params = params || {};

            if (params.hasOwnProperty('w')) {
                s.w = params.w;
            }

            if (params.hasOwnProperty('r')) {
                s.r = params.r;
            }

            if (params.hasOwnProperty('k')) {
                s.k = params.k;
            }

            if (params.hasOwnProperty('n')) {
                s.n = params.n;
            }

            if (params.hasOwnProperty('fixedCost')) {
                s.fixedCost = params.fixedCost;
            }

            // q(P) = PK/2w => Q(P) = Nq(P) = PKN/2w => P(Q) = 2wQ/NK
            s.setSlope((2* s.w)/((s.n/1000) * s.k));

            return s;

        };

        s.quantitySupplied = function(p) {
            return s.xValue(p);
        };

        s.q = function(p) {
            return s.xValue(p)/(s.n/1000)
        };

        //TODO this doesn't currently update
        s.marginalCostCurve =  f.shortRunMarginalCostCurve(s.w, s.r, s.k);

        //TODO this doesn't currently update
        s.averageCostCurve = f.shortRunAverageCostCurve(s.w, s.r, s.k);

        s.profitArea = function(p) {
            return f.profitArea(p, s.q(p), s.w, s.r, s.k)
        };

        s.updateParams(params);

        s.qEquilibrium = function(demand, tax){
            return s.q(s.marketPrice(demand, tax));
        };

        s.marketPrice = function(demand, tax) {
            return s.linearIntersection(demand, tax).y;
        };

        s.profit = function(p) {
            return f.shortRunProfit(s.q(p), p, s.w, s.r, s.k)
        };

        s.producerSurplus = function(p) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var q = s.quantitySupplied(p);

                    return [
                        {x: xDomain.min, y: yDomain.min},
                        {x: q, y: p},
                        {x: xDomain.min, y: p}
                    ]
                }
            }
        };

        s.taxWedge = function(demand,tax) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var pc = Math.min(s.marketPrice(demand,-tax),yDomain.max),
                        pf = Math.min(s.marketPrice(demand,tax),yDomain.max),
                        q = s.quantitySupplied(pf);

                    return [
                        {x: xDomain.min, y:pc},
                        {x: q, y: pc},
                        {x: q, y: pf},
                        {x: xDomain.min, y: pf}
                    ]

                }
            }
        };

        s.taxDWL = function (demand, tax) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var pc = Math.min(s.marketPrice(demand, -tax), yDomain.max),
                        pf = Math.min(s.marketPrice(demand, tax), yDomain.max),
                        qt = s.quantitySupplied(pf),
                        pe = s.marketPrice(demand),
                        qe = s.quantitySupplied(pe);

                    return [
                        {x: qt, y: pc},
                        {x: qe, y: pe},
                        {x: qt, y: pf}

                    ]

                }
            }
        }

        return s;
    }

}();

// market/monopoly.js
/**
 * Created by cmakler on 3/3/15.
 */

econgraphs.functions.market.Monopoly = function () {

    return function (params) {

        var m = {};

        // We're assuming a monopoly's cost structure is defined by its (linear) marginal cost

        m.marginalCost = new kg.functions.Linear({definitionType: 'slope-intercept'});

        m.marginalCost.setSlope(0);
        m.marginalCost.setIntercept(1);

        // If MC =

        m.fixedCost = 12;

        m.updateParams = function (params) {

            if (typeof params == 'function') {
                params = params();
            }

            params = params || {};

            if (params.hasOwnProperty('mcSlope')) {
                m.marginalCost.setSlope(params['mcSlope']);
            }

            if (params.hasOwnProperty('mcIntercept')) {
                m.marginalCost.setIntercept(params['mcIntercept']);
            }

            if (params.hasOwnProperty('fixedCost')) {
                m.fixedCost = params['fixedCost']
            }

            return m;

        };

        m.updateParams(params);

        // total cost is FC plus the integral of marginal cost
        // MC = a + bq
        // TC = FC + aq + 0.5bq^2
        m.totalCost = function (q) {
            return m.fixedCost + q * m.marginalCost.intercept + 0.5 * q * q * m.marginalCost.slope;
        };

        m.averageCost = function (q) {
            return m.totalCost(q)/q;
        };

        m.totalCostCurve = function () {
            return {
                points: function (xDomain, yDomain) {
                    return functionPoints(m.totalCost, xDomain, yDomain);
                }
            }
        };

        m.averageCostCurve = function () {
            return {
                points: function (xDomain, yDomain) {
                    return functionPoints(m.averageCost, xDomain, yDomain);
                }
            }
        };

        m.optimalCondition = function(demand) {
            return m.marginalCost.linearIntersection(demand.marginalRevenue)
        };

        m.optimalOffer = function(demand) {
            return {x: m.Q(demand), y: m.P(demand)};
        };

        m.Q = function(demand) {
            return m.optimalCondition(demand).x;
        };

        m.P = function (demand) {
            return demand.yValue(m.Q(demand));
        };

        m.profit = function(demand) {
            var offer = m.optimalOffer(demand),
                revenue = offer.x * offer.y,
                cost = m.totalCost(offer.x);

            return revenue - cost;
        };

        m.profitArea = function (demand) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var price = Math.min(m.P(demand), yDomain.max),
                        quantity = Math.min(m.Q(demand), xDomain.max),
                        ac = Math.min(m.averageCost(quantity), yDomain.max);

                    return [
                        {x: xDomain.min, y: ac},
                        {x: quantity, y: ac},
                        {x: quantity, y: price},
                        {x: xDomain.min, y: price}
                    ]
                }
            }
        };

        m.producerSurplus = function(demand) {
            return {
                area: function(xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    var price = Math.min(m.P(demand), yDomain.max),
                        quantity = Math.min(m.Q(demand), xDomain.max),
                        mcZero = Math.min(m.marginalCost.yValue(0), yDomain.max),
                        mcQuantity = Math.min(m.marginalCost.yValue(quantity), yDomain.max);

                    return [
                        {x: xDomain.min, y: mcZero},
                        {x: quantity, y: mcQuantity},
                        {x: quantity, y: price},
                        {x: xDomain.min, y: price}
                    ]

                }
            }
        };

        m.deadWeightLoss = function (demand) {
            return {
                area: function (xDomain, yDomain) {

                    xDomain = domainAsObject(xDomain);
                    yDomain = domainAsObject(yDomain);

                    // TODO handle cases where one or more points is off the graph

                    var monopolyPrice = m.P(demand),
                        monopolyQuantity = m.Q(demand),
                        monopolyMC = m.marginalCost.yValue(monopolyQuantity);

                    return [
                        {x: monopolyQuantity, y: monopolyMC},
                        {x: monopolyQuantity, y: monopolyPrice},
                        m.marginalCost.linearIntersection(demand)
                    ]

                }
            }
        };


        return m;
    }

}();

