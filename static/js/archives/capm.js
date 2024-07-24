//Built using buildjs.py script - do not hand edit

// vis.js
function addAxesAndLegend (svg, xAxis, yAxis, margin, chartWidth, chartHeight) {
    var legendWidth  = 200,
        legendHeight = 180;

    // clipping to make sure nothing appears behind legend
    /*svg.append('clipPath')
        .attr('id', 'axes-clip')
        .append('polygon')
        .attr('points', (-margin.left)                 + ',' + (-margin.top)                 + ' ' +
        (chartWidth - legendWidth - 1) + ',' + (-margin.top)                 + ' ' +
        (chartWidth - legendWidth - 1) + ',' + legendHeight                  + ' ' +
        (chartWidth + margin.right)    + ',' + legendHeight                  + ' ' +
        (chartWidth + margin.right)    + ',' + (chartHeight + margin.bottom) + ' ' +
        (-margin.left)                 + ',' + (chartHeight + margin.bottom));*/

    var axes = svg.append('g')
        .attr('clip-path', 'url(#axes-clip)');

    axes.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + chartHeight + ')')
        .call(xAxis)
        .append('text')
                .attr('x', chartWidth)
                .attr('dy', '-0.2em')
                .style('text-anchor', 'end')
        .text('Year');

    axes.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 10)
        .attr('dy', '0.5em')
        .style('text-anchor', 'end')
        .text('Value');



    var legend = d3.select('#legend').append('svg')
        .attr('class', 'legend')
        .attr('transform', 'translate(50, 10)');

    legend.append('rect')
        .attr('class', 'legend-bg')
        .attr('width',  legendWidth)
        .attr('height', legendHeight);

    legend.append('rect')
        .attr('class', 'outer')
        .attr('width',  75)
        .attr('height', 20)
        .attr('x', 10)
        .attr('y', 10);

    legend.append('text')
        .attr('x', 115)
        .attr('y', 25)
        .text('5% - 95%');

    legend.append('rect')
        .attr('class', 'inner')
        .attr('width',  75)
        .attr('height', 20)
        .attr('x', 10)
        .attr('y', 40);

    legend.append('text')
        .attr('x', 115)
        .attr('y', 55)
        .text('25% - 75%');

    legend.append('path')
        .attr('class', 'median-line')
        .attr('d', 'M10,80L85,80');

    legend.append('text')
        .attr('x', 115)
        .attr('y', 85)
        .text('Median');

    legend.append('path')
        .attr('class', 'mean-line')
        .attr('d', 'M10,110L85,110');

    legend.append('text')
        .attr('x', 115)
        .attr('y', 115)
        .text('Mean');

    legend.append('path')
        .attr('class', 'risk-free-line')
        .attr('d', 'M10,140L85,140');

    legend.append('text')
        .attr('x', 115)
        .attr('y', 145)
        .text('Risk-Free');
}

function drawPaths (svg, data, x, y) {
    var upperOuterArea = d3.svg.area()
        .interpolate('linear')
        .x (function (d) { return x(d.date) || 1; })
        .y0(function (d) { return y(d.pct95); })
        .y1(function (d) { return y(d.pct75); });

    var upperInnerArea = d3.svg.area()
        .interpolate('linear')
        .x (function (d) { return x(d.date) || 1; })
        .y0(function (d) { return y(d.pct75); })
        .y1(function (d) { return y(d.pct50); });

    var medianLine = d3.svg.line()
        .interpolate('linear')
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.pct50); });

    var meanLine = d3.svg.line()
        .interpolate('linear')
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.mean); });

    var riskFreeLine = d3.svg.line()
        .interpolate('linear')
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.riskFree); });

    var lowerInnerArea = d3.svg.area()
        .interpolate('linear')
        .x (function (d) { return x(d.date) || 1; })
        .y0(function (d) { return y(d.pct50); })
        .y1(function (d) { return y(d.pct25); });

    var lowerOuterArea = d3.svg.area()
        .interpolate('linear')
        .x (function (d) { return x(d.date) || 1; })
        .y0(function (d) { return y(d.pct25); })
        .y1(function (d) { return y(d.pct05); });

    svg.datum(data);

    if(data[0].hasOwnProperty('allValues')) {
        for(var i=0;i<data[0].allValues.length;i++) {
            svg.append('path')
                .attr('class','draw-line')
                .attr('d', d3.svg.line()
                    .interpolate('linear')
                    .x(function(d) {return x(d.date)})
                    .y(function(d) {return y(d.allValues[i])}))
        }
    }

    svg.append('path')
        .attr('class', 'area upper outer')
        .attr('d', upperOuterArea);

    svg.append('path')
        .attr('class', 'area lower outer')
        .attr('d', lowerOuterArea);

    svg.append('path')
        .attr('class', 'area upper inner')
        .attr('d', upperInnerArea);

    svg.append('path')
        .attr('class', 'area lower inner')
        .attr('d', lowerInnerArea);

    svg.append('path')
        .attr('class', 'median-line')
        .attr('d', medianLine);

    svg.append('path')
        .attr('class', 'mean-line')
        .attr('d', meanLine);

    svg.append('path')
        .attr('class', 'risk-free-line')
        .attr('d', riskFreeLine);
}

function startTransitions (svg, chartWidth, chartHeight, rectClip, x) {
    rectClip.transition()
        .duration(5000)
        .attr('width', chartWidth);
}

function makeChart (data, max) {

    var el = d3.select('#graph');

    var svgWidth  = el[0][0].clientWidth,
        svgHeight = window.innerHeight,
        margin = { top: 50, right: 50, bottom: 70, left: 70 },
        chartWidth  = svgWidth  - margin.left - margin.right,
        chartHeight = svgHeight - margin.top  - margin.bottom;

    //var max = Math.round(1.25*d3.max(data,function(d) {return d.pct75;}));

    var x = d3.scale.linear().range([0, chartWidth])
            .domain([0, d3.max(data, function (d) { return d.date; })]),
        y = d3.scale.linear().range([chartHeight, 0])
            .domain([0, max]);

    var xAxis = d3.svg.axis().scale(x).orient('bottom')
            .innerTickSize(-chartHeight).outerTickSize(0).tickPadding(10),
        yAxis = d3.svg.axis().scale(y).orient('left')
            .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);

    d3.select('#graph').select('svg').remove();
    var svg = d3.select('#graph').append('svg')
        .attr('width',  svgWidth)
        .attr('height', svgHeight)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    d3.select('#legend').select('svg').remove();

    addAxesAndLegend(svg, xAxis, yAxis, margin, chartWidth, chartHeight);
    drawPaths(svg, data, x, y);
}

// capm.js
var app = angular.module('MyApp', []);

app.controller('Controller', function ($scope) {
    
    $scope.params = {
        beta: 1,
        rf: 0.01,
        T: 7,
        sigma: 0.17,  // historic volatility of US market
        MRP: 0.06,
        S0: 1,
        numDraws: 10,
        showDraws: false,
        max: 3
    };

    function debounce(fn,time) {
        var timerID;
        return function() {
            var self = this;
            var args = arguments;
            if(timerID) {
                clearTimeout(timerID)
            }
            timerID = setTimeout(function(){
                fn.apply(self,args)
            },time)
        }
    }

    // create a 121 x numDraws matrix of shocks
    function updateShocks() {

        var numDraws = 1000; // can set to $scope.params.numDraws
        var T = 50; // can set to $scope.params.T

        $scope.epsilon = new Array(numDraws);

        // for each stock
        for(var s=0; s<numDraws; s++) {

            // initialize with shock of zero in period 0
            var stock_shocks = new Array(T*12 + 1);

            stock_shocks[0] = 0;

            // generate an array of 120 shocks (values of epsilon) ~ N(0,1)
            for(var t=1; t<=T*12; t++) {
                stock_shocks[t] = d3.random.normal(0,1)();
            }
            $scope.epsilon[s] = stock_shocks;
        }
    }

    updateShocks();

    function stockData(params, epsilon_array) {
        
        // initialize with a stock value of S0 in period 0
        var stock_values = new Array(12*params.T + 1), sum = 0;

        stock_values[0] = params.S0;

        for(var t=1; t<=12*params.T; t++) {
            sum += epsilon_array[t];
            stock_values[t] = params.S0*Math.exp((params.t_coeff * t) + (params.sum_coeff * sum ));
        }
        return stock_values;
    }

    function generateData(params, shocks) {

        var rfcc = Math.log(1 + params.rf),
            MRPcc = Math.log(1 + params.MRP),
            betacc = [Math.log(1 + params.rf + (params.beta*params.MRP)) - rfcc ] / MRPcc;

        var stockValueParams = {
            t_coeff: (rfcc + betacc*MRPcc - 0.5*Math.pow(betacc*params.sigma,2))/12,
            sum_coeff: betacc * params.sigma * Math.pow(12,-0.5),
            S0: params.S0,
            T: params.T
        };
        
        var data_matrix = new Array(params.numDraws);
        for(var s=0; s<params.numDraws; s++) {
            data_matrix[s] = stockData(stockValueParams, shocks[s]);
        }
        return data_matrix;
    }

    function riskFreeInPeriod(t) {
        var rfcc = Math.log(1+$scope.params.rf);
        return $scope.params.S0*Math.exp(rfcc*t/12)
    }

    function valuesInPeriod(data_matrix,t) {
        return data_matrix.map(function(stock_values){return stock_values[t]});
    }

    $scope.plotdata = function(data_matrix, showDraws) {
        var data_array = [],
            vt = [];
        for(var t=0; t<=12*$scope.params.T; t++) {
            vt = valuesInPeriod(data_matrix,t).sort(d3.ascending);
            data_array[t] = {
                date: t/12,
                pct05: d3.quantile(vt,0.05),
                pct25: d3.quantile(vt,0.25),
                pct50: d3.quantile(vt,0.50),
                pct75: d3.quantile(vt,0.75),
                pct95: d3.quantile(vt,0.95),
                mean: d3.mean(vt),
                riskFree: riskFreeInPeriod(t)
            };
            if(showDraws) {data_array[t].allValues = valuesInPeriod(data_matrix,t)}
        }
        return data_array;
    };

    function update() {
        $scope.params.beta = parseFloat($scope.params.beta);
        $scope.params.rf = parseFloat($scope.params.rf);
        $scope.params.T = parseInt($scope.params.T);
        $scope.params.sigma = parseFloat($scope.params.sigma);
        $scope.params.MRP = parseFloat($scope.params.MRP);
        var d = new Date().getTime();
        $scope.data = generateData($scope.params, $scope.epsilon);
        console.log("generateData time ", (new Date().getTime() - d)/1000, "s");
        makeChart($scope.plotdata($scope.data, $scope.params.showDraws),$scope.params.max);

    }
    //$scope.data = generateData($scope.params, $scope.epsilon);
    $scope.$watchCollection('params', debounce(update,100));

    $scope.updateShocks = function() {
        updateShocks();
        update();
    };

    update();


    
});

