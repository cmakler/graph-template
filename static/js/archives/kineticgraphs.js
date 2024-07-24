//Built using buildjs.py script - do not hand edit

// kg.js
function test(n) {
    n = n || 2;
    return n + 1;
}

function calculateStep(min,max,samplePoints) {
    samplePoints = samplePoints || 51; // default to
    return(max - min)/(samplePoints - 1);
}

function inverse(n) {
    if(n == 'undefined') {
        return 0;
    } else if(n == 0) {
        return 'undefined'
    } else {
        return 1/n;
    }
}

function domainAsObject(domain) {
    if(domain.hasOwnProperty('min') && domain.hasOwnProperty('max')) {
        return domain;
    } else {
        return {min: domain[0], max: domain[1]};
    }
}

function pointAsObject(point) {
    return {x: point['x'] || point[0], y: point['y'] || point[1]};
}

function inRange(v, domain) {
    domain = domainAsObject(domain);
    if (v == 'undefined' || isNaN(v)) {
        return false
    }
    return (v >= domain.min && v <= domain.max)
}

function onGraph(d,xDomain,yDomain){
    return (inRange(d.x,xDomain) && inRange(d.y, yDomain));
}

function sortObjects(key, descending) {
    return function (a, b) {
        var lower = descending ? a[key] : b[key],
            higher = descending ? b[key] : a[key];
        return lower > higher ? -1 : lower < higher ? 1 : lower <= higher ? 0 : NaN;
    }
}

function functionPoints(fn, xDomain, yDomain, params) {

    params = params || {};

    function getBoundary(minOrMax) {

        if (params.hasOwnProperty(minOrMax)) {
            return params[minOrMax]
        }

        if (dependentVariable == 'x') {
            return xDomain[minOrMax]
        }

        if (dependentVariable == 'y') {
            return yDomain[minOrMax]
        }

        return {min: 0, max: 100}[minOrMax];
    }

    xDomain = domainAsObject(xDomain);
    yDomain = domainAsObject(yDomain);

    var dependentVariable = params['dependentVariable'] || 'x',
        min = getBoundary('min'),
        max = getBoundary('max'),
        samplePoints = params['samplePoints'] || 201,
        step = calculateStep(min, max, samplePoints),
        points = [],
        candidatePoint = {x: 0, y: 0},
        ind = min;

    for (var i = 0; i < samplePoints; i++) {
        switch (dependentVariable) {
            case 'x':
                candidatePoint = {x: ind, y: fn(ind)}; // y as a function of x
                break;
            case 'y':
                candidatePoint = {x: fn(ind), y: ind}; // x as a function of y
                break;
            default:
                candidatePoint = pointAsObject(fn(ind)); // (x,y) as a function of t
        }
        if (candidatePoint.hasOwnProperty('x') && candidatePoint.hasOwnProperty('y') && onGraph(candidatePoint, xDomain, yDomain)) {
            points.push(candidatePoint);
        }
        ind += step;
    }

    return points;

}

var kg = { functions: {

    Generic: (function() {

        return function() {

            // Global setters

            this.setBases = function(bases) {
                if(bases) {
                    this.bases = bases;
                }
                if(!this.bases) {
                    this.bases = []
                }
                return this;
            };

            this.setLevel = function(level) {
                if(level instanceof Array) {
                    this.level = this.value(level)
                } else if(typeof level == 'number') {
                    this.level = level
                }
                return this;
            }

        }

    }())

} };

// monomial.js
/* 
 A monomial function is a term of the form c(b1^p1)(b2^p2)...(bn^pn)
 where 'c' is the coefficient, 'bi' is the i'th base, and 'pi' is the i'th power.

 The initializing object, params, should be of the form

 params = {coefficient: (number), bases: (number or array), powers: (number or array)}

 Any of these parameters may be null initially and set later with the setters.
 */


kg.functions.Monomial = (function () {

    return function (params) {

        var m = new kg.functions.Generic;

        // Establish setters
        m.setCoefficient = function (coefficient) {
            m.coefficient = coefficient || 0;
            return m;
        };

        m.setPowers = function (powers) {
            m.powers = powers || m.powers;
            return m;
        };

        // Initialize based on parameters p

        m.setCoefficient(params.coefficient);
        m.setBases(params.bases);
        m.setPowers(params.powers);
        m.setLevel(params.level);

        // Evaluate monomial for a given set of bases. If none are set, use m.bases.

        m.value = function (bases) {

            if (bases) {
                m.setBases(bases);
            }

            var basePowerPairs = Math.min(m.bases.length, m.powers.length);

            var result = m.coefficient;
            for (var t = 0; t < basePowerPairs; t++) {
                result *= Math.pow(m.bases[t], m.powers[t]);
            }

            return result;
        };

        // Return the (x,y) points within the domain [xDomain,yDomain]
        m.points = function (xDomain, yDomain, yIsIndependent) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            var points = [];

            var x, y;

            switch (m.powers.length) {

                case 1:
                    for (var i = 0; i < 51; i++) {

                        if (yIsIndependent) {
                            // Sample 51 points along the Y domain
                            y = yDomain.min + (i / 50) * (yDomain.max - yDomain.min);
                            x = m.xValue(y);
                            if (inRange(x, xDomain)) {
                                points.push({x: x, y: y});
                            }
                        } else {
                            // Sample 51 points along the X domain
                            x = xDomain.min + (i / 50) * (xDomain.max - xDomain.min);
                            y = m.yValue(x);
                            if (inRange(y, yDomain)) {
                                points.push({x: x, y: y});
                            }
                        }
                    }
                    break;

                case 2:
                    for (i = 0; i < 51; i++) {

                        if (yIsIndependent) {

                            // Sample 101 points along the Y domain
                            y = yDomain.min + (i / 50) * (yDomain.max - yDomain.min);
                            x = m.xValue(y);
                            if (inRange(x, xDomain)) {
                                points.push({x: x, y: y});
                            }

                        } else {

                            // Sample 101 points along the X domain
                            x = xDomain.min + (i / 50) * (xDomain.max - xDomain.min);
                            y = m.yValue(x);
                            if(inRange(y,yDomain)) {
                                points.push({x: x, y: y});
                            }

                        }
                    }
            }

            return points;
        };

        // Return the monomial that is the derivative of this monomial
        // with respect to the n'th variable
        m.derivative = function (n) {

            // n is the index of the term; first term by default
            n = n - 1 || 0;

            return new kg.functions.Monomial({

                // the new coefficient is the old coefficient times
                //the power of the variable whose derivative we're taking
                coefficient: m.coefficient * m.powers[n],

                powers: m.powers.map(function (p, index) {
                    if (index == n) {
                        return p - 1;
                    } else {
                        return p
                    }
                }),

                bases: m.bases

            })
        };

        // Return the monomial that solves the function c(b1^p1)(b2^p2) = level for bn
        // For example, to find the level curve where 3(x^2)(y^3) = 6 and express it as y(x), this would return
        // y = [6/(3x^-2)]^(1/3) = [(6/2)^1/3][(x^-2)^1/3] = [(6/2)^1/3][x^-2/3]
        // Note that the indices of the bases in the returned monomial are the same as the original.
        m.levelCurve = function (n, level) {


            // note: level can be a numerical value or an array of bases at which to evaluate the monomial
            if (level) {
                m.setLevel(level);
            }

            // n is the index of the term; first term by default
            n = n - 1 || 0;

            // pn is the power to which the base variable we're solving for is raised
            var pn = m.powers[n];

            if (pn == 0) {
                return null;
            }

            return new kg.functions.Monomial({

                // the coefficient of the new monomial is (level/c)^1/p
                coefficient: Math.pow(m.level / m.coefficient, 1 / pn),

                // each of the powers for the remaining bases is divided by -p
                powers: m.powers.map(function (p, index) {
                    if (index == n) {
                        return 0;
                    } else {
                        return -p / pn;
                    }
                }),

                bases: m.bases

            })

        };

        // returns the y value corresponding to the given x value for m(x,y) = m.level
        m.yValue = function (x, optionalBases) {

            var bases = [x, 1];
            if (optionalBases) {
                bases = bases.concat(optionalBases)
            }
            if (m.levelCurve(2)) {
                return m.levelCurve(2).value(bases);
            }

        };

        // returns the x value corresponding to the given y value for m(x,y) = m.level
        m.xValue = function (y, optionalBases) {

            var bases = [1, y];
            if (optionalBases) {
                bases = bases.concat(optionalBases)
            }
            if (m.levelCurve(1)) {
                return m.levelCurve(1).value(bases);
            }
        };

        return m;

    };


}());

// polynomial.js
/* 
A polynomial function is an array of monomial functions.
Its value is the sum of its component functions.
Its derivative is the array of the derivatives of its component functions.
*/

kg.functions.Polynomial = (function() {

    return function(params) {

        // Each element of the params array should be a monomial or a monomial definition.
        function createTerm(term_def) {
            if(term_def instanceof kg.functions.Monomial) {
                return term_def
            } else {
                return new kg.functions.Monomial(term_def)
            }
        }

        // Initialize the object by mapping the params array onto an array of monomial objects
        var p = new kg.functions.Generic(params);

        p.terms = params.map(createTerm);

        // Append a new term to the polynomial
        p.appendTerm = function(term_def) {
            p.terms.push(createTerm(term_def));
            return p;
        };

        // The coefficients and powers of each monomial may be get and set via the monomial's index
        p.setCoefficient = function(n, coefficient) {
            p.terms[n-1].setCoefficient(coefficient);
            return p;
        };

        p.setPowers = function(n, powers) {
            p.terms[n-1].setPowers(powers);
            return p;
        };

        // The value of a polynomial is the sum of the values of its monomial terms
        p.value = function(bases) {

            p = p.setBases(bases);
            
            var result = 0;
            for(var i=0; i<p.terms.length; i++) {
                result += p.terms[i].value(p.bases);
            }
            return result;
        };

        // The derivative of a polynomial is a new polynomial, each of whose terms is the derivative of the original polynomial's terms
        p.derivative = function(n) {
            return new kg.functions.Polynomial(p.terms.map(
                function(term) { return term.derivative(n)}
            ));
        };

        p.variables = Math.max.apply(null,p.terms.map(function(term) { return term.powers.length}));

        // Return the (x,y) points within the domain [xDomain,yDomain]
        p.points = function (xDomain, yDomain, yIsIndependent) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);

            var points = [];

            var i, j,x, y, current, closest, foundOnGraph;

            switch (p.variables) {

                case 1:
                    for (i = 0; i < 51; i++) {

                        if (yIsIndependent) {
                            // Sample 101 points along the Y domain
                            y = yDomain.min + (i / 50) * (yDomain.max - yDomain.min);
                            x = p.value([y]);
                            if (inRange(x, xDomain)) {
                                points.push({x: x, y: y});
                            }
                        } else {
                            // Sample 101 points along the X domain
                            x = xDomain.min + (i / 50) * (xDomain.max - xDomain.min);
                            y = p.value([x]);
                            if (inRange(y, yDomain)) {
                                points.push({x: x, y: y});
                            }
                        }
                    }
                    break;

                case 2:

                    var level = p.level || 0;

                    for (i = 0; i < 101; i++) {

                        if (yIsIndependent) {

                            y = yDomain.min + (i / 100) * (yDomain.max - yDomain.min);

                            closest = {x: 0, y: 0, value: 0.1};
                            foundOnGraph = false;

                            for (j = 0; j < 101; j++) {

                                x = xDomain.min + (j / 100) * (xDomain.max - xDomain.min);
                                current = p.value([x, y]) - level;
                                if (Math.abs(current) < Math.abs(closest.value)) {
                                    closest = {x: x, y: y, value: current};
                                    foundOnGraph = true;
                                }

                            }

                            if (foundOnGraph) {
                                points.push({x: closest.x, y: closest.y})
                            }
                            ;

                        } else {

                            x = xDomain.min + (i / 100) * (xDomain.max - xDomain.min);

                            closest = {x: 0, y: 0, value: 0.1};
                            foundOnGraph = false;

                            for (j = 0; j < 101; j++) {

                                y = yDomain.min + (j / 100) * (yDomain.max - yDomain.min);
                                current = p.value([x, y]) - level;
                                if (Math.abs(current) < Math.abs(closest.value)) {
                                    closest = {x: x, y: y, value: current};
                                    foundOnGraph = true;
                                }

                            }

                            if (foundOnGraph) {
                                points.push({x: closest.x, y: closest.y})
                            }
                            ;

                        }



                    }
            }

            return points;
        };

        return p;

    }
}());

// linear.js
/* 
A linear function is a special polynomial defined either with two points or a point and a slope.
This function takes either of those and returns a polynomial of the form ax + by + c.
The params object is of the form: { definitionType: '', param1: foo, param2: bar }
*/

kg.functions.Linear = (function() {

    return function(params) {


        // Start with a polynomial of the form 0x - y = 0.

        var l = new kg.functions.Polynomial([
                {coefficient: 0, powers: [1,0]},
                {coefficient: -1, powers: [0,1]},
                {coefficient: 0, powers: [0,0]}
            ]);

        // Depending on the manner in which the function is parameterized,
        // The coefficients are determined in different ways and has different update functions

        switch(params.definitionType) {

            // {definitionType: 'slope-intercept', slope: #, intercept: #}
            // Given y = slope*x + intercept => slope*x + (-1)y + intercept = 0 
            // Note: this adds two methods to the object: setSlope, and setIntercept.
            case 'slope-intercept':

                l.setSlope = function(slope) {
                    l.slope = slope;
                    l.setCoefficient(1,slope);
                    return l;
                };

                l.setIntercept = function(intercept) {
                    l.intercept = intercept;
                    l.setCoefficient(3,intercept);
                    return l;
                };

                l.setSlope(params.slope).setIntercept(params.intercept);
                
                break;

            // {definitionType: 'point-slope', point{ x: #, y: #}, slope: #}
            // Given Y - y = slope(X - x) => slope*X - Y + (y - slope*x)
            // Note: this adds two methods to the object: updateSlope and updatePoint.
            case 'point-slope':

                l.slope = params.slope;
                l.point = params.point;

                l.setSlope = function(slope) {
                    l.slope = slope;
                    l.setCoefficient(1,slope).setCoefficient(3, l.point.y - l.slope*l.point.x);
                    return l;
                };

                l.setPoint = function(point) {
                    l.x = point.x;
                    l.y = point.y;
                    l.setCoefficient(3, l.y - l.slope*l.x);
                    return l;
                };

                l.setSlope(params.slope);
                l.setPoint(params.point);
                
                break;

            // {definitionType: 'point-point', points: [{x: #, y: #}, {x: #, y: #}]}
            case 'point-point':

                l.setPoints = function(points) {
                    var x1 = points[0].x,
                        x2 = points[1].x,
                        y1 = points[0].y,
                        y2 = points[1].y,
                        rise = y2 - y1,
                        run = x2 - x1;

                    // If x2 = x1, then it's a vertical line
                    if (run == 0) {
                        l.slope = 'undefined';
                        l.setCoefficient(1,1);
                        l.setCoefficient(2,0);
                        l.setCoefficient(3,-x1);
                        
                    } else {
                        l.slope = rise/run;
                        l.setCoefficient(1,l.slope);
                        l.setCoefficient(2,-1);
                        l.setCoefficient(3,y1 - l.slope*x1);    
                    }
                    return l;

                };

                l.setPoints(params.points);

                break;

            // {definitionType: 'standard', a: #, b: #, c: #} => f(x,y) = ax + by + c
            case 'standard':

                l.setCoefficients = function(coef) {
                    l.slope = -coef.a/coef.b;
                    l.setCoefficient(1, coef.a).setCoefficient(2, coef.b).setCoefficient(3, coef.c);
                };

                l.setCoefficients(params);

                break;
                
        }

        l.inverseSlope = function() {return inverse(l.slope)};

        l.a = function() { return l.terms[0].coefficient };
        l.b = function() { return l.terms[1].coefficient };
        l.c = function() { return l.terms[2].coefficient };

        l.yIntercept = function() {
            l.level = l.level || 0;
            if(l.b() == 0) {
                return 'undefined';
            } else {
                return (l.level-l.c())/l.b();
            }
        };

        l.xIntercept = function() {
            l.level = l.level || 0;
            if(l.a() == 0) {
                return 'undefined';
            } else {
                return (l.level-l.c())/l.a();
            }
        };

        l.yValue = function(x) {
            if(l.b() == 0) {
                return 'undefined';
            } else {
                return l.yIntercept() + l.slope*x;
            }
        };

        l.xValue = function(y) {
            if(l.a() == 0) {
                return 'undefined';
            } else {
                return l.xIntercept() + l.inverseSlope()*y;
            }
        };

        // Finds the two endpoints which define the segment of the line passing through
        // the rectangle defined by xDomain = {min: #, max: #} and yDomain = {min: #, max: #}
        l.points = function(xDomain,yDomain) {

            xDomain = domainAsObject(xDomain);
            yDomain = domainAsObject(yDomain);
            
            var points = [];

            // Add intersection with bottom of vertical range,
            // if that point lies within the horizontal range.
            var xBottom = l.xValue(yDomain.min);
            if(inRange(xBottom, xDomain)) {
                points.push({x: xBottom, y: yDomain.min})
            }

            // Add intersection with top of vertical range,
            // if that point lies within the horizontal range.
            var xTop = l.xValue(yDomain.max);
            if(inRange(xTop, xDomain)) {
                points.push({x: xTop, y: yDomain.max})
            }

            if (points.length == 2) {
                return points.sort(sortObjects('x'));
            }

            // Add intersection with left border of horizontal range,
            // if that point lies within the vertical range.
            var yLeft = l.yValue(xDomain.min);
            if(inRange(yLeft, yDomain)) {
                if(points.length == 0 || points[0].x > xDomain.min){
                    points.push({x: xDomain.min, y: yLeft})
                }
            }

            if (points.length == 2) {
                return points.sort(sortObjects('x'));
            }

            // Add intersection with right border of horizontal range
            // if that point lies within the vertical range.
            var yRight = l.yValue(xDomain.max);
            if(inRange(yRight, yDomain)) {
                points.push({x: xDomain.max, y: yRight})
            }

            return points.sort(sortObjects('x'));
            
        };

        l.linearIntersection = function(ol,delta) {

            delta = delta || 0;

            var diffLine = new kg.functions.Linear({
                    definitionType: 'standard',
                    a: l.a()*ol.b()- l.b()*ol.a(),
                    b: l.b()*ol.b(),
                    c: ol.b()*l.c() - ol.c()*l.b() - delta
                }),
                x = diffLine.xIntercept(),
                y = l.yValue(x);

            /*delta = delta || 0;
            var x, y;

            if(l.b() == ol.b()) {
                x = (ol.c() - l.c())/(l.a() - ol.a());
                y = l.yValue(x)
            }

            else {
                y = (l.c() - ol.c() + l.a() - ol.a()) / (ol.b() - l.b());
                x = l.xValue(y)
            }*/

            return {x: x, y: y};
        };

        return l;

    }

}());

// min.js
/**
 * Created by cmakler on 10/29/14.
 */

// A min function is constructed with an array of other functions (of any type).
// It returns the minimum value of any of the functions, for the given bases.

kg.functions.Min = (function () {

    return function (params) {

        var m = new kg.functions.Generic(params);

        m.minimands = params.minimands;

        m.value = function (bases) {

            if(bases) {
                m.setBases(bases);
            }

            return Math.min.apply(null, m.minimands.map(function (minimand) {
                return minimand.value(m.bases)
            }))

        };

        // The derivative of a min function is the minimum of the derivative(s) of the component function(s)
        // whose value is the current minimum.

        m.derivative = function (n) {

            var currentMinimumFunctions = [];

            // One or more functions have the current minimum value; create an array of those function(s).
            for (var i = 0; i < m.minimands.length; i++) {
                if (m.value() == m.minimands[i].value()) {
                    currentMinimumFunctions.push(m.minimands[i].derivative(n))
                }
            }

            // If there is a single function with the lowest value, return the derivative of that function.
            if(currentMinimumFunctions.length == 1) {
                return currentMinimumFunctions[0];
            }

            // Otherwise, find the function with the lowest derivative with respect to variable n
            var lowestDerivativeValue = Math.min.apply(null, currentMinimumFunctions.map(function (minimandDerivative) {
                return minimandDerivative.value();
            }));

            // and return that function
            for (var j = 0; j < currentMinimumFunctions.length; j++) {
                if (lowestDerivativeValue == currentMinimumFunctions[j].value()) {
                    return currentMinimumFunctions[j];
                }
            }

        };

        return m;

    };


}());

