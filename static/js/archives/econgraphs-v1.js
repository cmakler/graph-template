//Built using buildjs.py script - do not hand edit

// helpers.js
// generic round function

Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}



// angular_app.js
// create module for custom directives
var econGraphsApp = angular.module('econGraphsApp', []);

econGraphsApp.controller('Controller', function($scope){

    $scope.quantitativeAnalysis = true;

   });

econGraphsApp.directive('slider', function () {

    function link(scope, el, attr) {
        el = el[0]

        var width = 200,
            height = 40,
            radius = height / 2,
            innerWidth = width - height;

        function position(x) {
            return radius + innerWidth * (x - scope.min) / (scope.max - scope.min)
        }

        function positionDelta(dx) {
            return dx * (scope.max - scope.min) / innerWidth;
        }

        var svg = d3.select(el).append('svg')
            .attr({width: width, height: 2 * radius})

        scope.$watch('value', function (value) {
            circle.attr({cx: position(value)});
        });

        var drag = d3.behavior.drag()
            .on("dragstart", dragstarted)
            .on("drag", function () {
                var dragPosition = parseFloat(scope.value) + positionDelta(d3.event.dx);
                scope.value = Math.max(scope.min, Math.min(scope.max, dragPosition))
                scope.$apply();
            })
            .on("dragend", dragended);

        function dragstarted() {
            this.parentNode.appendChild(this);

            d3.select(this).transition()
                .ease("elastic")
                .duration(500)
                .attr("r", radius * 0.8);
        }

        function dragended() {
            d3.select(this).transition()
                .ease("elastic")
                .duration(500)
                .attr("r", radius * 0.7);
        }

        var axis = svg.append('line').attr({x1: radius, x2: radius + innerWidth, y1: radius, y2: radius, stroke: 'blue', strokeWidth: 1});

        var circle = svg.append('circle')
            .attr({cy: radius, r: radius * 0.7 })
            .call(drag);


    }

    return {
        link: link,
        restrict: 'E',
        scope: { value: '=', min: '=', max: '=' }
    };
});

// graph/graph.js
/**
 * This expects graph_data of the form
 *
 *   {
 *      id : "myGraph1", <-- id of the div where the graph belongs
 *      dimensions : {height: 500, width: 700}, <-- graph dimension in pixels
 *      margin : {top: 10, right: 100, bottom: 100, left: 70}, <-- position of axes within overall graph area
 *      x_axis : {title: "Quantity", min: 0, max: 100, ticks: 10}, <-- x axis information
 *      y_axis : {title: "Price", min: 0, max: 10, ticks: 5} <-- y axis information
 *   }
 *
 * and returns the x and y scales as functions, as well as the visualization d3 object itself:
 *
 *   {
 *      x : [d3.scale object],
 *      y : [d3.scale object],
 *      vis : [d3 object],
 *      width : 500,
 *      height: 700
 *   }
 *
 * Note that there may be a way to query the d3 object for its scale, width, and height; TODO see how to do this.
 */

function createGraph(graph_data) {

    var graph_width, graph_height, x, y, vis;

    // The width and height of the drawn graph are the width and height of the alloted space, minus the margins.
    graph_width = $("#" + graph_data.id).width() - graph_data.margin.left - graph_data.margin.right;
    graph_height = graph_data.dimensions.height - graph_data.margin.top - graph_data.margin.bottom;
    graph_x_ticks = function() {
        if (graph_width > 600) {
            return 20;
        } else if (graph_width < 250) {
            return 5;
        } else {
            return 10;
        }
    };

    // Create the D3 scales for the x and y dimensions
    x = d3.scale.linear()
            .range([0, graph_width])
            .domain([graph_data.x_axis.min, graph_data.x_axis.max]);
    y = d3.scale.linear()
            .range([graph_height, 0])
            .domain([graph_data.y_axis.min, graph_data.y_axis.max]);

    // Create the D3 visualization object
    vis = d3.select("#" + graph_data.id)
            .append("svg")
                .attr("width", $("#" + graph_data.id).width())
                .attr("height", graph_data.dimensions.height)
                    .append("g")
                        .attr("transform", "translate(" + graph_data.margin.left + "," + graph_data.margin.top + ")");

    // Add x axis
    vis.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + graph_height + ")")
        .call(d3.svg.axis().scale(x).orient("bottom").ticks(graph_x_ticks()))

        // Label x axis
        .append("text")
            .attr("x", graph_width / 2 )
            .attr("y", "4em")
            .style("text-anchor", "middle")
            .text(graph_data.x_axis.title);

    // Add y axis
    vis.append("g")
        .attr("class", "y axis")
        .call(d3.svg.axis().scale(y).orient("left"))

        // Label y axis
        .append("text")
                .attr("transform","rotate(-90)")
                .attr("x", -graph_height / 2 )
                .attr("y", "-4em")
                .style("text-anchor", "middle")
                .text(graph_data.y_axis.title);

    // Return JSON representing graph. This is usually called 'graph' by the code that uses it.
    return { x : x, y : y, vis : vis, width : graph_width, height: graph_height};

}

// graph/box.js
function drawBox(graph,x1,y1,x2,y2,color,label) {

    var x = graph.x(Math.min(x1,x2)),
        y = graph.y(Math.max(y1,y2)),
        width = Math.abs(graph.x(x1) - graph.x(x2)),
        height = Math.abs(graph.y(y1) - graph.y(y2));


    // draw box
    graph.vis.append("svg:rect")
        .attr("x", x)
        .attr("y", y)
        .attr("height", height)
        .attr("width", width)
        .attr("stroke",color)
        .attr("fill",color)
        .attr("opacity",0.25);

    // label box

    graph.vis.append("svg:text")
        .attr("class","curveLabel")
        .attr("x", x + 0.5*width)
        .attr("y", y + 0.5*height + 5)
        .attr("text-anchor", "middle")
        .text(label)

}

// graph/curve.js
// Assumes x and y are numbers and xRange and yRange each have min and max properties
function pointInPlottedArea(x,y,xRange,yRange) {
    return (x >= xRange.min && x <= xRange.max && y >= yRange.min && y <= yRange.max)
}

function drawFunction(function_name,domain,range,graph,color,label) {
    var curve = [];
    for(var ind = domain.min; ind <= domain.max; ind += domain.step) {
        var dep = function_name(ind);
        if(pointInPlottedArea(ind,dep,domain,range)) {
            if(domain.y) {
                curve.push({ x : graph.x(dep),y : graph.y(ind)})
            } else {
                curve.push({ x : graph.x(ind),y : graph.y(dep)})
            }
        }
    }
    if(label.reverse) { curve = curve.reverse() }
    drawCurve(graph,curve,label.delta,color,label.text)
}

var curveFunction = d3.svg.line()
    .x(function(d) {return d.x;}).y(function(d) {return d.y;}).interpolate("linear");

// Draw the curve and label it
function drawCurve(graph,points,label_delta,color,label) {

    if(points.length == 0) {
        return;
    }

    // draw curve
    graph.vis.append("svg:path")
        .attr("class", label + " curve")
        .attr("d", curveFunction(points))
        .attr("stroke",color)
        .attr("fill","none");

    // label curve

    var label_x = function() {
        if(points[0].x + 3 > graph.width - 15) {
            return graph.width - 15
        } else {
            return points[0].x + 3
        }
    }

    var label_y = function() {
        if(points[0].y < 15) {
            return 15 + label_delta
        } else {
            return points[0].y + label_delta
        }
    }

    graph.vis.append("svg:text")
        .attr("class","curveLabel")
        .attr("x", label_x)
        .attr("y", label_y)
        .attr("stroke", color)
        .attr("fill", color)
        .text(label)

}




// graph/graph_colors.js
// Colors are from http://www.mathworks.com/matlabcentral/fileexchange/screenshots/7577/original.jpg
var supplyColor = "#D67E2C",
    demandColor = "#383D96",
    priceColor = "#CCCCCC",
    equilibriumColor = "#469449",
    atcColor = "#0885A1",
    avcColor = "#67BDAA",
    lossColor = "AF363C",
    profitColor = equilibriumColor;


    

// graph/dropline.js
// draw dot at x/y coordinate
function drawDot(graph,x,y,color,className) {

    // translate x and y to graph coordinates
    var x_coord = graph.x(x),
        y_coord = graph.y(y);

    var r = "8px";

    graph.vis.append("svg:circle")
        .attr("class", className + " dot")
        .attr("r",r)
        .attr("cx", x_coord)
        .attr("cy", y_coord)
        .attr("stroke", color)
        .attr("fill", color);

}

// draw vertical dropline from x/y coordinate to horizontal axis
function drawVerticalDropline(graph,x,y,color,className) {

    // translate x and y to graph coordinates; if y="max" then use 0 (top of graph)
    var x_coord = graph.x(x),
        y_coord = (y == "max") ? 0 : graph.y(y);

    graph.vis.append("svg:line")
        .attr("class", className + ' dropline')
        .attr("x1", x_coord)
        .attr("y1", graph.height + 25) // drop a little below the axis
        .attr("x2", x_coord)
        .attr("y2", y_coord)
        .attr("stroke", color)
        .attr("fill", color);

}

function drawHorizontalDropline(graph,x,y,color,className) {

    // translate x and y to graph coordinates; if x="max" then use graph_width
    var x_coord = (x == "max") ? graph.width : graph.x(x),
        y_coord = graph.y(y);

    graph.vis.append("svg:line")
        .attr("class",className + ' dropline')
        // set line to extend from left boundary to right boundary
        .attr("x1", -35 )
        .attr("x2", x_coord)
        .attr("y1", y_coord)
        .attr("y2", y_coord)
        .attr("stroke", color)
        .attr("fill", color);

}

function drawSegment(graph,x1,y1,x2,y2,color,className,label,x_label_offset, y_label_offset,anchor) {

    // translate x and y to graph coordinates; if y="max" then use 0 (top of graph)
    var x1_coord = graph.x(x1),
        y1_coord = graph.y(y1),
        x2_coord = graph.x(x2),
        y2_coord = graph.y(y2);

    graph.vis.append("svg:line")
        .attr("class", className)
        .attr("x1", x1_coord)
        .attr("y1", y1_coord) // drop a little below the axis
        .attr("x2", x2_coord)
        .attr("y2", y2_coord)
        .attr("stroke", color)
        .attr("fill", color);

    // add label to segment midpoint

    graph.vis.append("svg:text")
        .attr("class","curveLabel")
        .attr("x", 0.5*x1_coord + 0.5*x2_coord + x_label_offset)
        .attr("y", 0.5*y1_coord + 0.5*y2_coord + y_label_offset)
        .attr("text-anchor", anchor)
        .text(label)
}

// graph/label.js
function addLabel(graph,x,y,text,sup,sub,className) {

    var x_coord = (x == "axis") ? -50 : graph.x(x),
        y_coord = (y == "axis") ? graph.height + 40 : graph.y(y) + 6;

    graph.vis.append("svg:text")
        .attr("class",className)
        .attr("x", x_coord)
        .attr("y", y_coord)
        .attr("text-anchor","middle")
        .attr("font-size",14)
        .attr("font-style","oblique")
        .text(text);

    graph.vis.append("svg:text")
        .attr("class",className)
        .attr("x", x_coord + 7)
        .attr("y", y_coord - 4)
        .attr("text-anchor","start")
        .attr("font-style","oblique")
        .attr("font-size",10)
        .text(sup);

    graph.vis.append("svg:text")
        .attr("class",className)
        .attr("x", x_coord + 7)
        .attr("y", y_coord + 4)
        .attr("text-anchor","start")
        .attr("font-style","oblique")
        .attr("font-size",10)
        .text(sub);

}

// graph/function.js
/*
These are function constructors.

Each takes a set of parameters and returns a function
which will transform an independent variable (t)
into an (x,y) coordinate object of the form {x: 1, y:2}

 */


function returnCoordinates(xVal,yVal,options) {
    if (options && options.reverseAxes) {
        return {x: yVal, y: xVal}
    } else {
        return {x: xVal, y: yVal}
    }
}

//the coefficients object should be of the form [ {power: p, coefficient: c}.
//for example, f(x) = x^2 + 3x + 4 would be described by
// [ {power:2, coefficient: 1}, {power:1, coefficient: 3}, {power: 0, coefficient: 4} ]

function polynomialFunction(coefficients, options) {
    return function(xVal) {
        var yVal = 0;
        for(var i = 0; i< coefficients.length; i++) {
            var c = parseFloat(coefficients[i]['coefficient']),
                p = parseFloat(coefficients[i]['power']);
            yVal += c*Math.pow(xVal,p);
        }
        return returnCoordinates(xVal,yVal,options);
    }
}

function linearFunction(slope, intercept, options) {
    return polynomialFunction(
        [
            {power: 1, coefficient: slope},
            {power: 0, coefficient: intercept}
        ],
        options)
}

function logFunction(coefficient, intercept, options) {
    intercept = intercept || 0;
    return function(xVal) {
        var yVal = intercept + coefficient*Math.log(xVal);
        return returnCoordinates(xVal, yVal, options);
    }
}

function parametricFunction(xFunction, yFunction) {
    return function (tVal) {
        return {x: xFunction(tVal).y, y: yFunction(tVal).y}
    }
}

/*
Contour functions take an indpendent variable (x by default) and a z value and return an (x,y) pair.
Set indIsY = true if y is the independent variable.

The additive contour function constructor assumes that the z value is found by adding a function of x plus a function of y:

U(x,y) = f(x) + g(y)

Therefore to find the y-value that makes f(x) + g(y) = z true for a given x and z, the formula is:

y = g-inverse(z - f(x))

and similarly

x = f-inverse(z - g(y))

*/

function additiveContourFunctionConstructor(xFunction,yFunction,xInverseFunction,yInverseFunction) {
    return function(indVal,depVal,indIsY) {
        var xVal, yVal;
        if (indIsY) {
            yVal = indVal;
            xVal = xInverseFunction(depVal - yFunction(yVal));
        } else {
            xVal = indVal;
            yVal = yInverseFunction(depVal - xFunction(xVal));
        }
        return {x: xVal, y: yVal}
    }
}

// Contour function for f(x,y) = alpha*log(x) + beta*log(y)
function logLinearContourFunction(alpha, beta) {
    beta = beta || 1 - alpha; // if beta isn't set, use 1 - alpha by default
    var xFunction = function(x) {
            return alpha * Math.log(x)
        },
        yFunction = function(y) {
            return beta * Math.log(y)
        },
        xInverseFunction = function(y) {
            return Math.exp(y/alpha)
        },
        yInverseFunction = function(x) {
            return Math.exp(x/beta)
        };
    return additiveContourFunctionConstructor(xFunction,yFunction,xInverseFunction,yInverseFunction)
}

// Contour function for f(x,y) = alpha*x + beta*y
function linearContourFunction(alpha,beta) {
    var xFunction = function (x) {
            return alpha * x
        },
        yFunction = function (y) {
            return beta * y
        },
        xInverseFunction = function (y) {
            return y / alpha
        },
        yInverseFunction = function (x) {
            return x / beta
        };
    return additiveContourFunctionConstructor(xFunction, yFunction, xInverseFunction, yInverseFunction)
}

// Contour function for f(x,y) = (ax)x^2 + (bx)x + cx + (ay)y^2 + (by)y + cy
function quadraticContourFunction(ax, bx, cx, ay, by, cy) {

    function quadratic(a,b,c,x) {
        return a*x*x + b*x + c;
    }

    function inverseQuadratic(a,b,c,y) {
        return (-b - Math.sqrt(b * b - (4 * a * (c - y)))) / (2 * a)
    }

    var xFunction = function (x) {
            return alpha * x
        },
        yFunction = function (y) {
            return beta * y
        },
        xInverseFunction = function (y) {
            return y / alpha
        },
        yInverseFunction = function (x) {
            return x / beta
        };
    return additiveContourFunctionConstructor(xFunction, yFunction, xInverseFunction, yInverseFunction)
}

// econ_functions/supply_and_demand_functions.js
/**
 * Created by cmakler on 5/29/14.
 */

var CE_QuantityAtPrice = function(curveParams,price) {
    return curveParams.q * Math.pow(price/curveParams.p,curveParams.elasticity);
};

var CE_EquilibriumPrice = function(demandParams,supplyParams,tax_rate) {
    var supply_ratio = supplyParams.q / Math.pow(supplyParams.p,supplyParams.elasticity),
        demand_ratio = demandParams.q / Math.pow(demandParams.p,demandParams.elasticity),
        tax_factor = Math.pow(1 + 0.01*tax_rate, demandParams.elasticity);

    return Math.pow(supply_ratio/(demand_ratio*tax_factor),(1/(demandParams.elasticity - supplyParams.elasticity)));
};

var slope = function(curveParams) {
    return CE_QuantityAtPrice(curveParams,curveParams.p + 0.5) - CE_QuantityAtPrice(curveParams,curveParams.p - 0.5)
};

var LinearQuantityAtPrice = function(curveParams,price) {

    // use point-slope formula q = q* + m(p - p*)
    var linear_quantity = (curveParams.q + slope(curveParams) * (price - curveParams.p));

    if(linear_quantity > 0) {
        return linear_quantity
    } else {
        return 0
    }
};

var LinearEquilibriumPrice = function(demandParams,supplyParams,tax_rate) {
    var demand_slope = slope(demandParams),
        supply_slope = slope(supplyParams);

    return (supplyParams.q - demandParams.q + demand_slope*demandParams.p - supply_slope*supplyParams.p) / (demand_slope*(1 + tax_rate*0.01) - supply_slope);
}

// cost_curves/total_costs.js
function drawTotalCostAndRevenueGraph($scope,id) {

    var cost_curve_graph_data = {
        id : id,
        dimensions : {height: 500, width: $("#" + id).width()},
        margin : {top: 10, right: 50, bottom: 100, left: 70},
        x_axis : {title: "Quantity Produced (Units)", min: 0, max: 100, ticks: 10},
        y_axis : {title: "Total Cost and Revenue (Dollars)", min: 0, max: 5000, ticks: 10}
    };
    
    var quantity = $scope.firmSupplyParams.quantity,
        showVC = $scope.displayOptions.showVariableCosts;

    var graph = createGraph(cost_curve_graph_data),
        domain = {min: 0, max: 100, step: 0.25},
        range = {min: 0, max: 5000},
        tr_label = {text: "TR", delta: -2, reverse: true},
        vc_label = {text: "VC", delta: 8, reverse: true},
        tc_label = {text: "TC", delta: -8, reverse: true};

    // Draw curves
    drawFunction($scope.total_revenue,domain,range,graph,priceColor,tr_label);
    drawFunction($scope.total_cost,domain,range,graph,atcColor,tc_label);
    if(showVC) {drawFunction($scope.variable_cost,domain,range,graph,avcColor,vc_label)};

    // Indicate quantity supplied
    drawVerticalDropline(graph,quantity,Math.min($scope.current_total_revenue,$scope.current_total_cost),supplyColor,"TC");
    drawDot(graph,quantity,$scope.current_total_revenue,priceColor,"TR");
    drawDot(graph,quantity,$scope.current_total_cost,atcColor,"TC");
    addLabel(graph,quantity,"axis",'q','s','','axisLabel');

    // Indicate profit or loss if the firm isn't breaking even
    if(!$scope.isBreakingEven) {drawSegment(graph,quantity,$scope.current_total_revenue,quantity,$scope.current_total_cost,profitColor,"profit",$scope.profitOrLossLabel,5,5,"Start")}

}

// cost_curves/marginal_and_average_costs.js
function drawCostCurveGraph($scope,id) {

    var cost_curve_graph_data = {
        id : id,
        dimensions : {height: 500, width: $("#" + id).width()},
        margin : {top: 10, right: 50, bottom: 100, left: 70},
        x_axis : {title: "Quantity Produced (Units)", min: 0, max: 100, ticks: 10},
        y_axis : {title: "Price and Cost (Dollars per unit)", min: 0, max: 60, ticks: 10}
    };

    var quantity = $scope.firmSupplyParams.quantity,
        price = $scope.marketParams.price;

    var showVC = $scope.displayOptions.showVariableCosts;

    var graph = createGraph(cost_curve_graph_data),
        domain = {min: 5, max: 95, step: 1},
        range = {min: 0, max: 60},
        mc_label = {text: "MC", delta: 0, reverse: true},
        avc_label = {text: "AVC", delta: 6, reverse: true},
        atc_label = {text: "ATC", delta: -6, reverse: true};

    // Draw curves
    drawFunction($scope.marginal_cost,domain,range,graph,supplyColor,mc_label);
    drawFunction($scope.average_total_cost,domain,range,graph,atcColor,atc_label);
    if(showVC) {drawFunction($scope.average_variable_cost,domain,range,graph,avcColor,avc_label)};

    // Indicate price
    drawHorizontalDropline(graph,"max",price,priceColor,"price");
    addLabel(graph,"axis",price,'P','','',"axisLabel");

    // Indicate quantity supplied
    drawVerticalDropline(graph,quantity,price,supplyColor,"supply");
    drawDot(graph,quantity,price,priceColor,"supply");
    if (quantity > 0) {drawDot(graph,quantity,$scope.current_average_total_cost,atcColor,"supply")}
    addLabel(graph,quantity,"axis",'q','s','','axisLabel');

    // Add box representing profit/loss unless firm is breaking even or shut down
    if(!$scope.isBreakingEven && quantity > 0) {drawBox(graph,0,price,quantity,$scope.current_average_total_cost,$scope.profitOrLossColor,$scope.profitOrLossLabel)}

}

// cost_curves/controller.js
/**
 * Created by cmakler on 5/12/14.
 */

econGraphsApp.controller('CostCurvesController', function($scope){

    $scope.marketParams = {
        price : 45
    };

    $scope.firmSupplyParams = {
        quantity : 40,
        fixed_cost : 500,
        marginal_cost_parameter : 20, // see definition of cost function below
        linear_vc : 35,
        tertiary_vc : 0.01
    };

    $scope.displayOptions = {
        snapToOptimalQuantity : false,
        showVariableCosts : false
    };


    // Update graphs when any variables change
    $scope.$watchCollection("marketParams",function(){ $scope.render() });
    $scope.$watchCollection("firmSupplyParams",function(){ $scope.render() });
    $scope.$watchCollection("displayOptions",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        $scope.firmSupplyParams.quadratic_vc = $scope.firmSupplyParams.marginal_cost_parameter*0.01 - 1;

        // Function returning total variable cost of a given quantity
        $scope.variable_cost = function (q) {
            return ($scope.firmSupplyParams.linear_vc * q) + ($scope.firmSupplyParams.quadratic_vc * q * q) + ($scope.firmSupplyParams.tertiary_vc * q * q * q);
        };

        // Current variable cost
        $scope.current_variable_cost = $scope.variable_cost($scope.firmSupplyParams.quantity);

        // Function returning total cost of a given quantity
        $scope.total_cost = function(q) {
            return $scope.firmSupplyParams.fixed_cost*1 + $scope.variable_cost(q); //multiply by 1 so it doesn't do string addition
        };

        // Current total cost
        $scope.current_total_cost = $scope.total_cost($scope.firmSupplyParams.quantity);

        // Function returning total cost of a given quantity
        $scope.total_revenue = function(q) {
            return q * $scope.marketParams.price;
        };

        // Current total revenue
        $scope.current_total_revenue = $scope.total_revenue($scope.firmSupplyParams.quantity);


        // Function returning average variable cost of a given quantity
        $scope.average_variable_cost = function(q) {
            return $scope.variable_cost(q)/q;
        };

        // Current average variable cost
        $scope.current_average_variable_cost = $scope.average_variable_cost($scope.firmSupplyParams.quantity);


        // Function returning average total cost of a given quantity
        $scope.average_total_cost = function(q) {
            return $scope.total_cost(q)/q;
        };

        // Current average total cost
        $scope.current_average_total_cost = $scope.average_total_cost($scope.firmSupplyParams.quantity).round(2);

        // Function returning marginal cost of a given quantity (derivative of variable cost)
        $scope.marginal_cost = function(q) {
            return ($scope.firmSupplyParams.linear_vc) + (2 * $scope.firmSupplyParams.quadratic_vc * q) + (3 * $scope.firmSupplyParams.tertiary_vc * q * q)
        };

        // Current marginal cost
        $scope.current_marginal_cost = $scope.marginal_cost($scope.firmSupplyParams.quantity);

        // Boolean of whether the firm is running a profit or not
        $scope.isProfit = ($scope.current_total_revenue >= $scope.current_total_cost);

        // Profit or loss label
        $scope.profitOrLossLabel = $scope.isProfit ? "Profit" : "Loss";

        // Profit or loss color
        $scope.profitOrLossColor = $scope.isProfit ? profitColor : lossColor;

        // Per-unit profit
        $scope.unitProfitOrLoss = Math.abs($scope.marketParams.price - $scope.current_average_total_cost).toFixed(2);

        // Current profit or loss amount
        $scope.profitOrLoss = ($scope.unitProfitOrLoss * $scope.firmSupplyParams.quantity).toFixed(2);

        // Boolean of whether the firm is breaking even (profit/loss of less than 1% of cost)
        $scope.isBreakingEven = (($scope.profitOrLoss / $scope.current_total_cost) < 0.01);

        // Displayed total cost (rounded ATC*q)
        $scope.displayedTotalCost = $scope.current_average_total_cost * $scope.firmSupplyParams.quantity;

        $scope.optimal_quantity = function() {
            var q = 1;
            while ($scope.marginal_cost(q) > $scope.marginal_cost(q + 1)) {q ++} // increase quantity as long as MC is decreasing
            while ($scope.marginal_cost(q) < $scope.marketParams.price) {q++} // increase quantity as long as MC < P
            if ($scope.average_variable_cost(q) > $scope.marketParams.price) { return 0 } // shut down if P < AVC
            return q;
        };

        if($scope.displayOptions.snapToOptimalQuantity) {
            $scope.firmSupplyParams.quantity = $scope.optimal_quantity();
        }

        $scope.isShutDown = ($scope.firmSupplyParams.quantity == 0);

        d3.select('svg').remove();
        d3.select('svg').remove();

        drawTotalCostAndRevenueGraph($scope,"left_graph");
        drawCostCurveGraph($scope,"right_graph");

    }
});

// as_ad/labor_market.js
function drawLaborMarketGraph($scope,id) {

    var labor_market_graph_data = {
        id : id,
        dimensions : {height: 400, width: 400},
        margin : {top: 10, right: 50, bottom: 100, left: 70},
        x_axis : {title: "Labor (Millions of Workers Employed)", min: 0, max: 200, ticks: 10},
        y_axis : {title: "Real Wage (W/P)", min: 5, max: 15, ticks: 10}
    };
    
    var real_wage = $scope.macroParams.real_wage,
        labor_demand = $scope.laborDemandedAtRealWage,
        labor_supply = $scope.laborSuppliedAtRealWage,
        labor_demanded = $scope.laborDemanded,
        labor_supplied = $scope.laborSupplied;

    var graph = createGraph(labor_market_graph_data),
        domain = {y: true, min: 5, max: 15, step: 1},
        range = {min: 0, max: 200},
        supplyLabel = {text: "LS", reverse: true, delta: 15},
        demandLabel = {text: "LD", reverse: false, delta: -15};

    // Draw demand and supply curves
    drawFunction(labor_demand,domain,range,graph,demandColor,demandLabel);
    drawFunction(labor_supply,domain,range,graph,supplyColor,supplyLabel);

    var show_demand_point = pointInPlottedArea(real_wage,labor_demanded,domain,range),
        show_supply_point = pointInPlottedArea(real_wage,labor_supplied,domain,range),
        show_wage = (real_wage >= range.min && real_wage <= range.max);

    if($scope.inLaborMarketEquilibrium) {

        // only show equilibrium if equilibrium price is in range
        if(show_wage) {

             // Indicate equilibrium price
            drawHorizontalDropline(graph,"max",real_wage,equilibriumColor,"price");
            addLabel(graph,"axis",real_wage,'W/P','*','',"axisLabel");

            // Indicate equilibrium quantity
            drawVerticalDropline(graph,$scope.quantityDemanded,price_consumers_pay,equilibriumColor,"demand");
            drawDot(graph,$scope.quantityDemanded,price_consumers_pay,equilibriumColor,"demand");
            drawDot(graph,$scope.quantityDemanded,price,equilibriumColor,"supply");
            addLabel(graph,$scope.quantityDemanded,"axis",'Q','*','','axisLabel');

        }

    } else {

        // Indicate real wage
        drawHorizontalDropline(graph,"max",real_wage,priceColor,"price");
        addLabel(graph,"axis",real_wage,'W/P','','',"axisLabel");

        // Indicate quantity demanded if in range
        if(show_demand_point) {
            drawVerticalDropline(graph,labor_demanded,real_wage,demandColor,"demand");
            drawDot(graph,labor_demanded,real_wage,demandColor,"demand");
            addLabel(graph,labor_demanded,"axis",'L','D','','axisLabel');
        }

        // Indicate quantity supplied if in range
        if(show_supply_point) {
            drawVerticalDropline(graph,labor_supplied,real_wage,supplyColor,"supply");
            drawDot(graph,labor_supplied,real_wage,supplyColor,"supply");
            addLabel(graph,labor_supplied,"axis",'L','S','','axisLabel');
        }


        // Indicate shortage or surplus if both supply and demand points are in range
        if(show_demand_point && show_supply_point) {
            drawSegment(graph,labor_supplied,3,labor_demanded,3,priceColor,"surplusOrShortage","",0,15,"Middle")
        }

    }

}



// as_ad/as_ad.js
function drawASADGraph($scope,id) {

    var as_ad_graph_data = {
        id : id,
        dimensions : {height: 400, width: 400},
        margin : {top: 10, right: 50, bottom: 100, left: 70},
        x_axis : {title: "Output", min: 80, max: 120, ticks: 10},
        y_axis : {title: "Price Level", min: 80, max: 120, ticks: 10}
    };
    
    var price_level = $scope.macroParams.price_level,
        output = $scope.macroParams.output,
        aggregate_demand = $scope.aggregateDemandAtPriceLevel,
        aggregate_supply = $scope.aggregateSupplyAtPriceLevel;

    var graph = createGraph(as_ad_graph_data),
        domain = {y: true, min: 80, max: 120, step: 0.25},
        range = {min: 80, max: 120},
        supplyLabel = {text: "SRAS", reverse: true, delta: 15},
        demandLabel = {text: "AD", reverse: false, delta: -20};

    // Draw demand and supply curves
    drawFunction(aggregate_demand,domain,range,graph,demandColor,demandLabel);
    drawFunction(aggregate_supply,domain,range,graph,supplyColor,supplyLabel);

    if(pointInPlottedArea(price_level,output,domain,range)) {

         // Indicate equilibrium price
            drawHorizontalDropline(graph,"max",price_level,equilibriumColor,"price");
            addLabel(graph,"axis",price_level,'P','','',"axisLabel");

            // Indicate equilibrium quantity
            drawVerticalDropline(graph,output,price_level,equilibriumColor,"demand");
            drawDot(graph,output,price_level,equilibriumColor,"demand");
            addLabel(graph,output,"axis",'Y','','','axisLabel');

    }

}



// as_ad/phillips.js
function drawPhillipsCurveGraph($scope,id) {

    var phillips_curve_graph_data = {
        id : id,
        dimensions : {height: 400, width: 400},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: "Unemployment Rate (%)", min: 0, max: 10, ticks: 10},
        y_axis : {title: "Inflation Rate (%)", min: -20, max: 20, ticks: 10}
    };

    var inflation_rate = $scope.macroParams.inflation_rate,
        unemployment_rate = $scope.macroParams.unemployment_rate;

    var graph = createGraph(phillips_curve_graph_data),
        domain = {y: true, min: -20, max: 20, step: 0.1},
        range = {min: 0, max: 10},
        phillipsLabel = {text: "PC", reverse: true, delta: -10};

    // Draw demand and supply curves
    drawFunction($scope.phillipsCurve,domain,range,graph,demandColor,phillipsLabel);

    var show_point = pointInPlottedArea(inflation_rate,unemployment_rate,domain,range);


    if(show_point) {

        // Indicate equilibrium inflation rate
        drawHorizontalDropline(graph,unemployment_rate,inflation_rate,demandColor,"demand");
        addLabel(graph,"axis",inflation_rate,'pi','','',"axisLabel");

        // Indicate equilibrium quantity
        drawVerticalDropline(graph,unemployment_rate,inflation_rate,demandColor,"demand");
        drawDot(graph,unemployment_rate,inflation_rate,demandColor,"supply");
        addLabel(graph,unemployment_rate,"axis",'U','','','axisLabel');

    }



}



// as_ad/controller.js
econGraphsApp.controller('ASADController', function($scope){

    $scope.displayOptions = {
        showPhillipsCurve : false,
        showLaborMarket: false,
        keepInEquilibrium: false
    };

    $scope.macroParams = {
        nominal_wage: 10,
        output: 100,
        price_level: 100,
        ad_shift: 0,
        potential_gdp: 100,
        nairu: 6,
        labor_force_size: 10,
        real_wage: 10,
        unemployment_rate: 6
    };

    $scope.ad_params = function(potential_gdp,ad_shift) {
        return {
            q: parseFloat(potential_gdp) + parseFloat(ad_shift),
            elasticity: -1,
            p: 100
        }
    };

    $scope.sras_params = function(potential_gdp,nominal_wage) {
        return {
            q: potential_gdp,
            elasticity: 1,
            p: 100 + 10*(parseFloat(nominal_wage) - 10)
        }
    };

    $scope.labor_demand_params = {
        q: 100,
        elasticity: -1,
        p: 10
    };

    $scope.labor_supply_params = {
        q: 100,
        elasticity: 1,
        p: 10
    };


    $scope.real_wage = function(nominal_wage,price_level) {
        var deflator = parseFloat(price_level/100);
        return Math.round(100*nominal_wage/deflator)/100;
    };

    $scope.phillipsCurve = function(inflation_rate) {
        var real_wage = $scope.real_wage($scope.macroParams.nominal_wage,inflation_rate + 100);
        return $scope.macroParams.nairu + ($scope.laborSuppliedAtRealWage(real_wage) - $scope.laborDemandedAtRealWage(real_wage))*0.1
    };

    // Function returning quantity of labor demanded at a particular real wage
    $scope.laborDemandedAtRealWage = function(w) {
        return LinearQuantityAtPrice($scope.labor_demand_params,w)
    };

    // Function returning quantity of labor supplied at a particular real wage
    $scope.laborSuppliedAtRealWage = function(w) {
        return LinearQuantityAtPrice($scope.labor_supply_params,w)
    };

    // Maximum price at which quantity demanded is greater than or equal to quantity supplied
    $scope.equilibriumPriceLevel = function() {
        var unrounded_price = LinearEquilibriumPrice(
            $scope.ad_params($scope.macroParams.potential_gdp,$scope.macroParams.ad_shift),
            $scope.sras_params($scope.macroParams.potential_gdp,$scope.macroParams.nominal_wage), 0);
        return Math.round(unrounded_price);
    };

    // Function returning quantity of labor demanded at a particular real wage
    $scope.aggregateDemandAtPriceLevel = function(p) {
        return LinearQuantityAtPrice($scope.ad_params($scope.macroParams.potential_gdp,$scope.macroParams.ad_shift),p)
    };

    // Function returning quantity of labor supplied at a particular real wage
    $scope.aggregateSupplyAtPriceLevel = function(p) {
        return LinearQuantityAtPrice($scope.sras_params($scope.macroParams.potential_gdp,$scope.macroParams.nominal_wage),p)
    };


    // Update graphs when any variables change
    $scope.$watchCollection("displayOptions",function(){ $scope.render() });
    $scope.$watchCollection("macroParams",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        $scope.macroParams.price_level = $scope.equilibriumPriceLevel();
        $scope.macroParams.real_wage = $scope.real_wage($scope.macroParams.nominal_wage,$scope.macroParams.price_level);
        $scope.macroParams.output = $scope.aggregateDemandAtPriceLevel($scope.macroParams.price_level);
        $scope.macroParams.unemployment_rate = $scope.macroParams.nairu + ($scope.laborSupplied - $scope.laborDemanded)*0.1;
        $scope.macroParams.inflation_rate = $scope.macroParams.price_level - 100;

        // Quantity demanded by all consumers at the current price, including consumer_tax
        $scope.laborDemanded = $scope.laborDemandedAtRealWage($scope.macroParams.real_wage);

        // Quantity supplied by all firms in the market at the current price
        $scope.laborSupplied = $scope.laborSuppliedAtRealWage($scope.macroParams.real_wage);

        // Cheating here
        $scope.surplus = ($scope.macroParams.real_wage > 10);

        //$scope.inEquilibrium = (Math.abs(($scope.marketParams.real_wage - $scope.equilibriumPrice())/$scope.equilibriumPrice()) < 0.01);


        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        drawASADGraph($scope,"left_graph");
        drawLaborMarketGraph($scope,"center_graph");
        drawPhillipsCurveGraph($scope,"right_graph");

    }
});


// indifference_curves/cobb_douglass.js
// If u = (thisGood^alpha * otherGood*(1-alpha), solves for otherGood as a function of thisGood, u, and alpha.
function otherGood(thisGood,u,alpha) {
    var uOverXtotheAlpha = u/Math.pow(thisGood,alpha);
    var oneOverOneMinusAlpha = 1 / (1 - alpha);
    return Math.pow(uOverXtotheAlpha,oneOverOneMinusAlpha);
}

// Establish general behavioral constants for this graph
function drawCobbDouglass($scope, id) {

    var indifference_curve_graph_data = {
            id : id,
            dimensions : {height: 500, width: 500},
            margin : {top: 10, right: 100, bottom: 100, left: 70},
            x_axis : {title: "Units of Good X", min: 0, max: 10, ticks: 10},
            y_axis : {title: "Units of Good Y", min: 0, max: 10, ticks: 10}
    };

    var allocation = $scope.allocation,
        alpha = $scope.utilityParams.alpha,
        u = Math.pow(allocation.x,alpha) * Math.pow(allocation.y,1 - alpha);

    var graph = createGraph(indifference_curve_graph_data),
        x_domain = {min: 0.1, max: 9.9, step: 0.1},
        y_domain = {min: 0.1, max: 9.9, step: 0.1, y:true},
        x_label = {text: (alpha == 1) ? '' : 'I', delta: -6, reverse: true},
        y_label = {text: (alpha == 1) ? 'I' : '', delta: -6};

    var xForY = function(y) { return otherGood(y,u,alpha)},
        yForX = function(x) { return otherGood(x,u,1-alpha)};

    // Draw curves
    drawFunction(xForY,x_domain,y_domain,graph,demandColor,x_label);
    drawFunction(yForX,y_domain,x_domain,graph,demandColor,y_label);

    // Draw allocation
    drawDot(graph,allocation.x,allocation.y,demandColor);

}

// indifference_curves/controller.js
/**
 * Created by cmakler on 5/12/14.
 */

econGraphsApp.controller('IndifferenceCurvesController',function($scope){

    $scope.utilityParams = {
        alpha : 0.5
    };

    $scope.allocation = {
        x : 5,
        y : 5
    };

    $scope.$watchCollection("utilityParams",function(){ $scope.render() });
    $scope.$watchCollection("allocation",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        d3.select('svg').remove();

        drawCobbDouglass($scope,'graph');

    }

});

// individual_and_market_demand/individual_demand.js
function drawIndividualDemandGraph($scope,id) {

    var individual_demand_graph_data = {
        id : id,
        dimensions : {height: 500, width: 500},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: "Quantity (Units)", min: 0, max: 20, ticks: 10},
        y_axis : {title: "Price (Dollars per unit)", min: 0, max: 60, ticks: 10}
    };

    var graph = createGraph(individual_demand_graph_data),
        domain = {y: true, min: 5, max: 55, step: 0.25},
        range = {min: 0, max: 20},
        label = {text: "d", delta: 15};

    // Draw market demand curve
    drawFunction($scope.individualQuantityDemandedAtPrice,domain,range,graph,demandColor,label);

    // Indicate price
    drawHorizontalDropline(graph,"max",$scope.price,priceColor,"price");
    addLabel(graph,"axis",$scope.price,'P','','',"axisLabel");

    // Indicate quantity demanded if in range
    if($scope.individualQuantityDemanded >= range.min && $scope.individualQuantityDemanded <= range.max) {
        drawVerticalDropline(graph,$scope.individualQuantityDemanded,$scope.price,demandColor,"demand");
        drawDot(graph,$scope.individualQuantityDemanded,$scope.price,demandColor,"demand");
        addLabel(graph,$scope.individualQuantityDemanded,"axis",'q','d','','axisLabel');
    }


}

// individual_and_market_demand/market.js
function drawMarketDemandGraph($scope,id) {

    var market_graph_data = {
        id : id,
        dimensions : {height: 500, width: 500},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: "Quantity (Thousands of Units)", min: 0, max: 100, ticks: 10},
        y_axis : {title: "Price (Dollars per Unit)", min: 0, max: 60, ticks: 10}
    };

    var graph = createGraph(market_graph_data),
        domain = {y: true, min: 5, max: 55, step: 0.25},
        range = {min: 0, max: 100},
        label = {text: "D", delta: 15};

    // Draw market demand curve
    drawFunction($scope.quantityDemandedAtPrice,domain,range,graph,demandColor,label);

    // Indicate price
    drawHorizontalDropline(graph,"max",$scope.price,priceColor,"price");
    addLabel(graph,"axis",$scope.price,'P','','',"axisLabel");

    // Indicate quantity demanded if in range
    if($scope.quantityDemanded >= range.min && $scope.quantityDemanded <= range.max) {
        drawVerticalDropline(graph,$scope.quantityDemanded,$scope.price,demandColor,"demand");
        drawDot(graph,$scope.quantityDemanded,$scope.price,demandColor,"demand");
        addLabel(graph,$scope.quantityDemanded,"axis",'Q','D','','axisLabel');
    }

}



// individual_and_market_demand/controller.js
/**
 * Created by cmakler on 5/12/14.
 */

econGraphsApp.controller('IndividualAndMarketDemandController', function($scope){

    $scope.price = 20;
    $scope.consumers = 4000;
    $scope.income = 400;
    $scope.alpha = 50;

    // Function returning quantity demanded by an individual at a particular price
    $scope.individualQuantityDemandedAtPrice = function(p) {
        return ($scope.income * $scope.alpha) / (p*100);
    }

    // Function returning quantity demanded by all consumers at a particular price
    $scope.quantityDemandedAtPrice = function(p) {
        return $scope.individualQuantityDemandedAtPrice(p)*$scope.consumers/1000; // This number is in thousands
    }

    // Update graphs when any variables change
    $scope.$watch("price",function(){ $scope.render() });
    $scope.$watch("consumers",function(){ $scope.render() });
    $scope.$watch("income",function(){ $scope.render() });
    $scope.$watch("alpha",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        // Quantity demanded by an individual at the current price
        $scope.individualQuantityDemanded = $scope.individualQuantityDemandedAtPrice($scope.price);

        // Quantity demanded by all consumers at the current price
        $scope.quantityDemanded = $scope.quantityDemandedAtPrice($scope.price);

        // Quantity demanded by all consumers, as shown in text (rounded)
        $scope.shownQuantityDemanded = Math.round($scope.individualQuantityDemanded*10)*$scope.consumers/10;

        d3.select('svg').remove();
        d3.select('svg').remove();

        drawIndividualDemandGraph($scope,"left_graph");
        drawMarketDemandGraph($scope,"right_graph");

    }
});

// production_possibilities/resource_allocation.js
function drawResourceGraph($scope,id) {

    var resource_graph_data = {
        id : id,
        dimensions : {height: 400, width: 400},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: $scope.resources.name + " Producing " + $scope.good_x.name, min: 0, max: 200, ticks: 10},
        y_axis : {title: $scope.resources.name + " Producing " + $scope.good_y.name, min: 0, max: 200, ticks: 10}
    };
    
    var graph = createGraph(resource_graph_data),
        domain = {min: 0, max: 200, step: 1},
        range = {min: 0, max: 200},
        label = {text: "Resource Allocation Frontier", reverse: false, delta: -5};

    // Draw demand and supply curves
    drawFunction($scope.resource_frontier,domain,range,graph,demandColor,label);

    var show_resource_allocation = pointInPlottedArea($scope.good_x.resources,$scope.good_y.resources,domain,range),
        on_frontier = ($scope.allocation.percent_resources_used == 100),
        dot_color = on_frontier ? equilibriumColor : demandColor;

    if(show_resource_allocation) {

        drawHorizontalDropline(graph, $scope.good_x.resources, $scope.good_y.resources, dot_color, "price");
        drawVerticalDropline(graph, $scope.good_x.resources, $scope.good_y.resources, dot_color, "price");
        drawDot(graph, $scope.good_x.resources, $scope.good_y.resources, dot_color, "demand");
        addLabel(graph, "axis", $scope.good_y.resources, $scope.resources.name[0], $scope.good_y.name[0], '', "axisLabel");
        addLabel(graph, $scope.good_x.resources, "axis", $scope.resources.name[0], $scope.good_x.name[0], '', 'axisLabel');

    }

}



// production_possibilities/production_choice.js
function drawProductionPossibilitiesGraph($scope,id) {

    var ppf_graph_data = {
        id : id,
        dimensions : {height: 400, width: 400},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: $scope.good_x.name + " Produced (" + $scope.good_x.units + ")", min: 0, max: 500, ticks: 10},
        y_axis : {title: $scope.good_y.name + " Produced (" + $scope.good_y.units + ")", min: 0, max: 500, ticks: 10}
    };
    
    var graph = createGraph(ppf_graph_data),
        domain = {min: 0, max: 500, step: 1},
        range = {min: 0, max: 500},
        label = {text: "Production Possibilities Frontier", reverse: false, delta: -5};

    // Draw demand and supply curves
    drawFunction($scope.production_frontier,domain,range,graph,demandColor,label);

    var show_resource_allocation = pointInPlottedArea($scope.good_x.quantity,$scope.good_y.quantity,domain,range),
        on_frontier = ($scope.allocation.percent_resources_used == 100),
        dot_color = on_frontier ? equilibriumColor : demandColor;

    if(show_resource_allocation) {

        drawHorizontalDropline(graph, $scope.good_x.quantity, $scope.good_y.quantity, dot_color, "price");
        drawVerticalDropline(graph, $scope.good_x.quantity, $scope.good_y.quantity, dot_color, "price");
        drawDot(graph, $scope.good_x.quantity, $scope.good_y.quantity, dot_color, "demand");
        addLabel(graph, "axis", $scope.good_y.quantity, 'Q', $scope.good_y.name[0], '', "axisLabel");
        addLabel(graph, $scope.good_x.quantity, "axis", 'Q', $scope.good_x.name[0], '', 'axisLabel');

    }

}



// production_possibilities/production_function.js
function drawProductionFunctionGraph($scope, id, good_data) {

    var good_initial = good_data.name[0],
        production_function_label = good_data.productivity + 'L' + good_initial;

    if($scope.resources.diminishing_marginal_returns > 0) {
        production_function_label += ' - ' + Math.round($scope.resources.diminishing_marginal_returns*10000) + '(.01L' + good_initial + ')^2'
    }

    var production_graph_data = {
        id: id,
        dimensions: {height: 300, width: 400},
        margin: {top: 10, right: 80, bottom: 100, left: 70},
        x_axis: {title:'Labor Producing ' + good_data.name, min: 0, max: 200, ticks: 10},
        y_axis: {title: good_data.name + " Produced (" + good_data.units + ")", min: 0, max: 500, ticks: 10}
    };

    var graph = createGraph(production_graph_data),
        domain = {min: 0, max: 200, step: 1},
        range = {min: 0, max: 500},
        label = {text: production_function_label, reverse: true, delta: -5};

    // Draw demand and supply curves
    drawFunction(good_data.production_function, domain, range, graph, demandColor, label);

    var show_resource_allocation = pointInPlottedArea(good_data.resources, good_data.quantity, domain, range),
        on_frontier = ($scope.allocation.percent_resources_used == 100),
        dot_color = on_frontier ? equilibriumColor : demandColor;

    if (show_resource_allocation) {

        drawHorizontalDropline(graph, good_data.resources, good_data.quantity, dot_color, "price");
        drawVerticalDropline(graph, good_data.resources, good_data.quantity, dot_color, "price");
        drawDot(graph, good_data.resources, good_data.quantity, dot_color, "demand");
        addLabel(graph, "axis", good_data.quantity, 'Q', good_data.name[0], '', "axisLabel");
        addLabel(graph, good_data.resources, "axis", $scope.resources.name[0], good_data.name[0], '', 'axisLabel');

    }

}



// production_possibilities/controller.js
econGraphsApp.controller('ProductionPossibilitiesController', function($scope){

    $scope.resources = {
        name: 'Labor',
        units: 'Workers',
        quantity : 150,
        diminishing_marginal_returns : 0
    };

    $scope.good_x = {
        name: 'Wine',
        units: 'Barrels',
        resources: 75,
        productivity: 2,
        quantity: 150,
        production_function: function (r) {
            return $scope.quantity_produced(r, $scope.good_x.productivity)
        }
    };

    $scope.good_y = {
        name: 'Cloth',
        units: 'Yards',
        resources: 75,
        productivity: 3,
        quantity: 225,
        production_function: function (r) {
            return $scope.quantity_produced(r, $scope.good_y.productivity)
        }
    };

    $scope.allocation = {
        percent_resources_used : 100,
        percent_resources_x : 50
    };

    $scope.displayOptions = {
        show_prod_function : false,
        show_mpl : false
    };

    $scope.quantity_produced = function(resources,productivity) {
        return Math.max(0,productivity * (resources - $scope.resources.diminishing_marginal_returns * resources * resources));
    };

    // inverse of quantity produced
    $scope.resources_used = function(quantity,productivity) {
        if ($scope.resources.diminishing_marginal_returns == 0) {
            return quantity / productivity;
        } else if(quantity == 0) {
            return 0;
        } else {
            var a = productivity*$scope.resources.diminishing_marginal_returns,
                b = productivity * -1,
                c = quantity
            return (-b - Math.sqrt(b * b - (4 * a * c))) / (2 * a);
        }
    };

    $scope.max_possible = function(productivity) {
        return $scope.quantity_produced($scope.resources.quantity, productivity);
    };

    // returns the quantity of resources dedicated to good y, for a given quantity dedicated to good x
    $scope.resource_frontier = function(good_x_resources) {
        if(good_x_resources <= $scope.resources.quantity) {
            return $scope.resources.quantity - good_x_resources;
        }
    };

    // returns the quantity of good y produced, for a given quantity of good y produced
    $scope.production_frontier = function (good_x_quantity) {
        if (good_x_quantity <= $scope.max_possible($scope.good_x.productivity)) {
            var good_x_resources = $scope.resources_used(good_x_quantity,$scope.good_x.productivity),
                good_y_resources = $scope.resource_frontier(good_x_resources);
            return $scope.quantity_produced(good_y_resources,$scope.good_y.productivity);
        }
    };


    // Update graphs when any variables change
    $scope.$watchCollection("displayOptions",function(){ $scope.render() });
    $scope.$watchCollection("allocation",function(){ $scope.render() });
    $scope.$watchCollection("resources", function (){ $scope.render() });
    $scope.$watchCollection("good_x",function(){ $scope.render() });
    $scope.$watchCollection("good_y",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        // Update resources allocated to goods X and Y
        $scope.good_x.resources = $scope.resources.quantity * ($scope.allocation.percent_resources_used * 0.01) * ($scope.allocation.percent_resources_x * 0.01);
        $scope.good_y.resources = $scope.resources.quantity * ($scope.allocation.percent_resources_used * 0.01) * ((100 - $scope.allocation.percent_resources_x) * 0.01);

        // Determine quantity produced of each good by those resources
        $scope.good_x.quantity = $scope.quantity_produced($scope.good_x.resources,$scope.good_x.productivity);
        $scope.good_y.quantity = $scope.quantity_produced($scope.good_y.resources, $scope.good_y.productivity);

        // Determine the maximum possible quantity of each good
        $scope.good_x.max = $scope.max_possible($scope.good_x.productivity);
        $scope.good_y.max = $scope.max_possible($scope.good_y.productivity);

        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        drawResourceGraph($scope,"left_graph");
        drawProductionPossibilitiesGraph($scope, "right_graph");
        if($scope.displayOptions.show_prod_function) {
            drawProductionFunctionGraph($scope,"left_2_graph",$scope.good_x)
        }
        if ($scope.displayOptions.show_prod_function) {
            drawProductionFunctionGraph($scope, "right_2_graph", $scope.good_y)
        }

    }
});


// structured_products/structured_products.js
function drawStructuredProductsGraph($scope,id) {

    var structured_product_graph_data = {
        id : id,
        dimensions : {height: 500, width: 800},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: "Average Annual Percent Change", min: -30, max: 30},
        y_axis : {title: "Total Portfolio Net Present Value", min: 50, max: 150}
    };

    var graph = createGraph(structured_product_graph_data),
        domain = {min: -30, max: 30, step: 0.01},
        range = {min: 50, max: 150},
        productLabel = {text: "MS", reverse: true, delta: 5},
        indexLabel = {text: "DJIA", reverse: true, delta: 5};

    // percent increase of stock index at maturity, relative to original value
    // given current value, time to maturity, and rate of growth between now and then
    var index_increase = function(average_annual_increase,base_value) {
        var value_at_maturity = $scope.productParams.current*Math.pow(1 + average_annual_increase*0.01,$scope.productParams.time);
        return 100*value_at_maturity/base_value - 100;
    };

    var index_value = function(average_annual_increase) {
        return 100 + index_increase(average_annual_increase,$scope.productParams.current);
    }

    // net present value of value at maturity
    var npv = function(face_value, time_to_maturity, interest_rate) {
        var discount = Math.pow(1 + interest_rate*0.01,time_to_maturity);   // d = (1 + r)^t
        return face_value / discount;                                       // NPV = FV / d
      };

    // structured product rules
    var sp_value = function(average_annual_increase) {
      var raw_increase = index_increase(average_annual_increase,$scope.productParams.original);
      var percent_increase = 0;
      if(raw_increase < -20) {
        percent_increase = raw_increase + 20;
      } else if(raw_increase < 0) {
        percent_increase = 0;
      } else if(raw_increase < 16.5) {
        percent_increase = 16.5;
      } else {
        percent_increase = raw_increase;
      };
      return 100 + percent_increase;
    };

    //
    var present_value_of_structured_product = function(average_annual_increase) {
        return npv(sp_value(average_annual_increase), $scope.productParams.time, $scope.productParams.rate);
    };

    var present_value_of_index = function(average_annual_increase) {
        return npv(index_value(average_annual_increase)*Math.pow(1 + $scope.productParams.dividend_percent*0.01, $scope.productParams.time), $scope.productParams.time, $scope.productParams.rate);
    }

    // Draw demand and supply curves
    drawFunction(present_value_of_structured_product,domain,range,graph,demandColor,productLabel);
    //drawFunction(present_value_of_index,domain,range,graph,supplyColor,indexLabel);


}



// structured_products/controller.js
econGraphsApp.controller('StructuredProductsController', function($scope){

    $scope.productParams = {
        time: 3,
        original: 15000,
        current: 17000,
        rate: 3,
        dividend_percent: 1.75
    };

    $scope.$watchCollection("productParams",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        d3.select('svg').remove();
        drawStructuredProductsGraph($scope,"graph");

    };
});

// supply_and_demand/market.js
function drawMarketGraph($scope,id) {

    var market_graph_data = {
        id : id,
        dimensions : {height: 500, width: 800},
        margin : {top: 10, right: 100, bottom: 100, left: 70},
        x_axis : {title: "Quantity (Thousands of Units)", min: 0, max: 200, ticks: 10},
        y_axis : {title: "Price (Dollars per Unit)", min: 0, max: 60, ticks: 10}
    };
    
    var price = $scope.marketParams.price,
        price_consumers_pay = $scope.price_consumers_pay(price),
        price_firms_receive = $scope.price_firms_receive(price)

    var graph = createGraph(market_graph_data),
        domain = {y: true, min: 0, max: 55, step: 0.25},
        range = {min: 0, max: 195},
        supplyLabel = {text: "S", reverse: true, delta: 15},
        demandLabel = {text: "D", reverse: true, delta: 5},
        showDemand = $scope.displayOptions.showDemand,
        showSupply = $scope.displayOptions.showSupply;

    // Draw demand and supply curves
    if(showDemand) {drawFunction($scope.quantityDemandedAtPrice,domain,range,graph,demandColor,demandLabel)}
    if(showSupply) {drawFunction($scope.quantitySuppliedAtPrice,domain,range,graph,supplyColor,supplyLabel)};

    var show_demand_point = (showDemand && pointInPlottedArea(price_consumers_pay,$scope.quantityDemanded,domain,range)),
        show_supply_point = (showSupply && pointInPlottedArea(price,$scope.quantitySupplied,domain,range)),
        show_price = (price >= range.min && price <= range.max),
        show_price_consumers_pay = (showDemand && price_consumers_pay != price && price_consumers_pay >= range.min && price_consumers_pay <= range.max);

    if($scope.inEquilibrium && showDemand && showSupply) {

        // only show equilibrium if equilibrium price is in range
        if(show_price) {

             // Indicate equilibrium price
            drawHorizontalDropline(graph,"max",price,equilibriumColor,"price");
            addLabel(graph,"axis",price,'P','*','',"axisLabel");

            // Indicate price consumers pay, if tax rate > 0
            if(show_price_consumers_pay) {
                drawHorizontalDropline(graph,"max",price_consumers_pay,equilibriumColor,"price");
                addLabel(graph,"axis",price_consumers_pay,'P','C','',"axisLabel");
            }

            // Indicate equilibrium quantity
            drawVerticalDropline(graph,$scope.quantityDemanded,price_consumers_pay,equilibriumColor,"demand");
            drawDot(graph,$scope.quantityDemanded,price_consumers_pay,equilibriumColor,"demand");
            drawDot(graph,$scope.quantityDemanded,price,equilibriumColor,"supply");
            addLabel(graph,$scope.quantityDemanded,"axis",'Q','*','','axisLabel');

        }

    } else {

        // Indicate price
        drawHorizontalDropline(graph,"max",price,priceColor,"price");
        addLabel(graph,"axis",price,'P','','',"axisLabel");

        // Indicate price consumers pay, if tax rate > 0 and in range
        if(show_price_consumers_pay) {
            drawHorizontalDropline(graph,"max",price_consumers_pay,priceColor,"price");
            addLabel(graph,"axis",price_consumers_pay,'P','C','',"axisLabel");
        }

        // Indicate quantity demanded if in range
        if(show_demand_point) {
            drawVerticalDropline(graph,$scope.quantityDemanded,price_consumers_pay,demandColor,"demand");
            drawDot(graph,$scope.quantityDemanded,price_consumers_pay,demandColor,"demand");
            addLabel(graph,$scope.quantityDemanded,"axis",'Q','D','','axisLabel');
        }

        // Indicate quantity supplied if in range
        if(show_supply_point) {
            drawVerticalDropline(graph,$scope.quantitySupplied,price,supplyColor,"supply");
            drawDot(graph,$scope.quantitySupplied,price,supplyColor,"supply");
            addLabel(graph,$scope.quantitySupplied,"axis",'Q','S','','axisLabel');
        }


        // Indicate shortage or surplus if both supply and demand points are in range
        if(show_demand_point && show_supply_point) {
            drawSegment(graph,$scope.quantitySupplied,3,$scope.quantityDemanded,3,priceColor,"surplusOrShortage",($scope.surplus? "Surplus" : "Shortage"),0,15,"Middle")
        }

    }

}



// supply_and_demand/controller.js
econGraphsApp.controller('SupplyAndDemandController', function($scope){

    $scope.displayOptions = {
        snapToEquilibriumPrice : false,
        curveType : "Constant Elasticity",
        showDemand: true,
        showSupply: true
    };

    $scope.marketParams = {
        price : 45,
        tax_rate : 0,
        consumer_fraction : 100
    };

    $scope.elasticityControls = {
        demand : 50,
        supply : 60
    }

    $scope.perfectly_inelastic_demand = function() {return ($scope.elasticityControls.demand == 100)};
    $scope.perfectly_inelastic_supply = function() {return ($scope.elasticityControls.supply == 100)};


    $scope.display_demand_elasticity = function() {
        if($scope.perfectly_inelastic_demand()) { return "Perfectly Inelastic"}
        else return Math.round($scope.demandParams.elasticity*100)/100;
    }

    $scope.display_supply_elasticity = function() {
        if($scope.perfectly_inelastic_supply()) {return "Perfectly Inelastic"}
        else return Math.round($scope.supplyParams.elasticity*100)/100;
    }

    $scope.demandParams = {
        q : 40,
        elasticity : ($scope.elasticityControls.demand - 100)/$scope.elasticityControls.demand,
        p : 30
    };


    $scope.supplyParams = {
        q : 60,
        elasticity : (100 - $scope.elasticityControls.supply)/$scope.elasticityControls.supply,
        p : 30
    };

    // Function returning market price plus tax paid by consumers
    $scope.price_consumers_pay = function(p) { return p*(1 + $scope.marketParams.tax_rate*.01) };

    // Function returning market price minus tax paid by firms
    $scope.price_firms_receive = function(p) { return p };

    // Function returning quantity demanded at a particular price (inclusive of taxes)
    $scope.quantityDemandedAtPrice = function(p) {
        if($scope.displayOptions.curveType == "Linear") {
            return LinearQuantityAtPrice($scope.demandParams,p);
        } else {
            return CE_QuantityAtPrice($scope.demandParams,p);
        }
    };

    // Function returning quantity supplied at a particular price (inclusive of taxes)
    $scope.quantitySuppliedAtPrice = function(p) {
        if($scope.displayOptions.curveType == "Linear") {
            return LinearQuantityAtPrice($scope.supplyParams,p);
        } else {
            return CE_QuantityAtPrice($scope.supplyParams,p);
        }
    };

    // Function returning surplus at a given market price, given the implied (possibly different) prices consumers pay and firms receive
    $scope.surplusAtPrice = function(p) {
        return $scope.quantitySuppliedAtPrice($scope.price_firms_receive(p)) - $scope.quantityDemandedAtPrice($scope.price_consumers_pay(p));
    };

    // Maximum price at which quantity demanded is greater than or equal to quantity supplied
    $scope.equilibriumPrice = function() {
        if ($scope.displayOptions.curveType == "Linear") {
            return LinearEquilibriumPrice($scope.demandParams, $scope.supplyParams, $scope.marketParams.tax_rate)
        } else {
            return CE_EquilibriumPrice($scope.demandParams, $scope.supplyParams, $scope.marketParams.tax_rate)
        }
        ;
    }

        /*function() {

        var p = 0;

        // Return immediately if the lowest price in range causes a surplus
        if ($scope.surplusAtPrice(p) > 0) {
            return null;
        }

        // Increase price until the next highest price causes a surplus
        while(p <= 55) {
            if ($scope.surplusAtPrice(p + 0.01) > 0)
            {
                return p;
            } else {
                p+=0.01;
            }
        }
        return null;

    };*/

    $scope.$watchCollection("elasticityControls",function() {

        $scope.demandParams.elasticity = ($scope.elasticityControls.demand - 100)/$scope.elasticityControls.demand;
        $scope.supplyParams.elasticity = (100 - $scope.elasticityControls.supply)/$scope.elasticityControls.supply;

    })

    // Update graphs when any variables change
    $scope.$watchCollection("displayOptions",function(){ $scope.render() });
    $scope.$watchCollection("marketParams",function(){ $scope.render() });
    $scope.$watchCollection("demandParams",function(){ $scope.render() });
    $scope.$watchCollection("supplyParams",function(){ $scope.render() });
    window.onresize = function() { $scope.render()};

    $scope.render = function(){

        if($scope.displayOptions.snapToEquilibriumPrice) {$scope.marketParams.price = $scope.equilibriumPrice()}

        // Quantity demanded by all consumers at the current price, including consumer_tax
        $scope.quantityDemanded = $scope.quantityDemandedAtPrice($scope.price_consumers_pay($scope.marketParams.price));

        // Quantity supplied by all firms in the market at the current price
        $scope.quantitySupplied = $scope.quantitySuppliedAtPrice($scope.marketParams.price);

        // Boolean indicating whether the current price results in a surplus
        $scope.surplus = $scope.surplusAtPrice($scope.marketParams.price) > 0 && !$scope.inEquilibrium;

        // Boolean indicating whether the current price results in a shortage
        $scope.shortage = $scope.surplusAtPrice($scope.marketParams.price) < 0 && !$scope.inEquilibrium;

        // Boolean indicating whether the current price is an equilibrium price
        $scope.inEquilibrium = (Math.abs(($scope.marketParams.price - $scope.equilibriumPrice())/$scope.equilibriumPrice()) < 0.01);


        d3.select('svg').remove();
        drawMarketGraph($scope,"graph");

    }
});


