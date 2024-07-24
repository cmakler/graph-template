// model.js
/**
 * Created by cmakler on 10/31/14.
 */

'use strict';

kgAngular.directive('model', function () {

    function controller($scope, $window) {

        $scope.params = $scope.params || {};
        $scope.functions = $scope.functions || {};

        // Redraw graph objects when a child calls this update function
        this.update = function() {
            $scope.$broadcast('redraw');
        };

        Reveal.addEventListener('ready',function(event) {
            console.log('content loaded');
            $scope.$broadcast('resize');
        });

        // Redraw graph objects when parameters change
        $scope.$watchCollection('params',function(){$scope.$broadcast('redraw');});

        // Resize all elements when window changes size
        angular.element($window).on('resize', function () {
            $scope.$broadcast('resize');
        });


        // Setters for parameters and functions
        this.setValue = function(category,name,value) {
            $scope[category][name] = value;
        };

    }

    return {
        restrict: 'E',
        controller: controller
    }

})

// math.js
/**
 * Created by cmakler on 11/10/14.
 */

kgAngular.directive('renderedMath',function() {

    function link(scope,el) {

        function render() {
            katex.render(scope.expression, el[0]);
        }

        scope.$on('redraw', render);

        render();

    }

    return {
        link: link,
        restrict: 'A',
        scope: {expression: '@'}
    }

});

// param.js
/**
 * Created by cmakler on 11/6/14.
 */

/**
 * Created by cmakler on 10/31/14.
 */

'use strict';

kgAngular.directive('param', function () {

    function link(scope,el,attrs,ModelCtrl) {
        ModelCtrl.setValue('params',attrs.name,(attrs.type && attrs.type != 'number') ? attrs.value : parseFloat(attrs.value));
    }

    return {
        require: '^model',
        link: link,
        restrict: 'E',
        scope: false
    }

});

// function.js
/**
 * Created by cmakler on 11/6/14.
 */

'use strict';

kgAngular.directive('function', function () {

    function link(scope,el,attrs,ModelCtrl) {

        var fn = new econgraphs.functions[scope.category][scope.form];

        if (scope.fnParams) {
            fn = fn.updateParams(scope.fnParams);
        }
        ModelCtrl.setValue('functions', scope.name, fn);

    }

    return {
        require: '^model',
        link: link,
        restrict: 'E',
        scope: { name: '@', category: '@', form: '@', fnParams: '&' }
    }

});

// slider.js
/**
 * Created by cmakler on 10/31/14.
 */

'use strict';

kgAngular.directive('slider', function () {

        function link(scope, el, attrs, ModelCtrl) {
            el = el[0];

            var raw_value = scope.value; // needed to help smoothe slider motion

            var height = 40,
                radius = height / 2,
                margin = 20;

            var svg,circle, line;

            scope.width = el.parentElement.clientWidth - 2*margin;

            scope.innerWidth = scope.width - 2 * radius;

            function positionDelta(dx) {
                return dx * (scope.max - scope.min) / scope.innerWidth
            }

            svg = d3.select(el).append('svg')
                .attr({width: el.parentElement.clientWidth, height: 2 * radius});

            var drag = d3.behavior.drag()
                .on("dragstart", function () {
                    this.parentNode.appendChild(this);
                    d3.select(this).transition()
                        .ease("elastic")
                        .duration(500)
                        .attr("r", radius * 0.8);
                })
                .on("drag", function () {
                    var dragPosition = parseFloat(raw_value) + positionDelta(d3.event.dx);
                    raw_value = Math.max(scope.min, Math.min(scope.max, dragPosition));
                    scope.$apply(function() {
                        scope.value = Math.round(raw_value / parseFloat(scope.precision)) * scope.precision;
                    });
                    ModelCtrl.update();
                })
                .on("dragend", function () {
                    d3.select(this).transition()
                        .ease("elastic")
                        .duration(500)
                        .attr("r", radius * 0.7);
                });

            // Draw slider line
            line = svg.append('line').attr({x1: radius, x2: radius + scope.innerWidth, y1: radius, y2: radius, stroke: 'blue', strokeWidth: 1});

            // Establish y-coordinate and radius for control circle
            circle = svg.append('circle')
                .attr({cy: radius, r: radius * 0.7 })
                .call(drag);

            // Set and update x-coordinate for control circle
            scope.$watch('value', function (value) {
                circle.attr({cx: function() {
                    return radius + scope.innerWidth * (value - scope.min) / (scope.max - scope.min);
                }});
            });

            scope.$on('resize', function() {
                scope.width = el.parentElement.clientWidth - 2*margin;
                scope.innerWidth = scope.width - 2*radius;
                svg.attr('width',el.parentElement.clientWidth);
                line.attr('x2', radius + scope.innerWidth);
                circle.attr({cx: function () {
                    return radius + scope.innerWidth * (scope.value - scope.min) / (scope.max - scope.min);
                }});
            })


        }

        return {
            link: link,
            require: '^model',
            restrict: 'E',
            scope: { value: '=', min: '=', max: '=', precision: '=' }
        };
    });

// graph.js
/**
 * Created by cmakler on 10/31/14.
 */

'use strict';

kgAngular.directive('graph', function (D3Helpers) {

    function link(scope, el, attrs) {

        el = el[0];

        scope.graph_definition = scope.graph_definition || {};
        
        scope.x_axis = scope.x_axis || {min: 0, max: 10, title: 'X axis'};
        scope.y_axis = scope.y_axis || {min: 0, max: 10, title: 'Y axis'};
        scope.dimensions = {height: attrs.height || 700, width: attrs.width || 700};
        scope.margin = {top: 10, right: 10, bottom: 70, left: 70};

        scope.$on('redraw', drawObjects);
        scope.$on('resize', resize);

        // These are D3 selectors for each type of shape on the graph
        var circles, lines, curves, areas, texts, x_axis, y_axis, x_axis_label, y_axis_label;

        // Regenerate current definitions of plotted shapes from graph objects.
        function plotted_shapes () {

            // reset plotted shapes
            var shapes = {lines: [], circles: [], curves: [], texts: [], areas: []};

            // get current coordinates for shapes
            scope.graph_definition.objects.forEach(function (graph_object) {
                shapes = graph_object.update(shapes,scope.graph_definition);
            });

            return shapes;

        }

        function drawObjects() {

            // get updated data based on current parameters
            var data = plotted_shapes();

            // update the data for each of the D3 shape selectors
            areas = D3Helpers.drawAreas(data.areas, areas);
            lines = D3Helpers.drawLines(data.lines,lines);
            curves = D3Helpers.drawCurves(data.curves,curves);
            circles = D3Helpers.drawCircles(data.circles,circles);
            texts = D3Helpers.drawTexts(data.texts,texts);

            // Add x axis
            x_axis.call(d3.svg.axis().scale(scope.graph_definition.x).orient("bottom"));
            x_axis_label.text(scope.x_axis.title);

            // Add y axis
            y_axis.call(d3.svg.axis().scale(scope.graph_definition.y).orient("left"));
            y_axis_label.text(scope.y_axis.title);

        }

        function resize() {
            if (scope.graph_definition.vis) {
                d3.select(el).select('svg').remove();
                drawGraph();
            }
        }


        function drawGraph() {

            // The width and height of the drawn graph are the width and height of the alloted space, minus the margins.
            scope.graph_definition.width = Math.min(el.parentElement.clientWidth,scope.dimensions.width) - scope.margin.left - scope.margin.right;
            scope.graph_definition.height = scope.dimensions.height - scope.margin.top - scope.margin.bottom;

            // Create the D3 visualization object
            scope.graph_definition.vis = d3.select(el)
                .append("svg")
                .attr("width", el.parentElement.clientWidth)
                .attr("height", scope.dimensions.height)
                .append("g")
                .attr("transform", "translate(" + scope.margin.left + "," + scope.margin.top + ")");

            areas = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.area');
            curves = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.curve');
            lines = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.line');
            circles = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.circle');
            texts = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.text');
            x_axis = scope.graph_definition.vis.append('g').attr('class', 'x axis').attr("transform", "translate(0," + scope.graph_definition.height + ")");
            y_axis = scope.graph_definition.vis.append('g').attr('class', 'y axis');
            x_axis_label = x_axis.append("text")
                .attr("x", scope.graph_definition.width / 2)
                .attr("y", "4em")
                .style("text-anchor", "middle");
            y_axis_label = y_axis.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -scope.graph_definition.height / 2)
                .attr("y", "-4em")
                .style("text-anchor", "middle");


            // Establish axes and scales
            scope.graph_definition = D3Helpers.addAxes(scope.graph_definition, scope.x_axis, scope.y_axis);


            drawObjects();
        }

        drawGraph();

    }

    function controller($scope) {

        $scope.graph_definition = $scope.graph_definition || {};

        var graph_objects = $scope.graph_definition.objects = [];

        this.addObject = function(newObject) {
            graph_objects.push(newObject);
        };

        this.addAxis = function(dim,axis_definition) {
            $scope[dim+'_axis'] = axis_definition;
        };

    }

    return {
        link: link,
        controller: controller,
        restrict: 'E',
        scope: true
    }

});

// axis.js
/**
 * Created by cmakler on 10/31/14.
 */

'use strict';

kgAngular.directive('axis', function () {

    function link(scope, el, attrs, GraphCtrl) {

        function addAxis() {
            GraphCtrl.addAxis(scope.dim, {
                min: scope.min(),
                max: scope.max(),
                title: scope.title
            });
        }

        scope.$watch('title', addAxis);

        addAxis();

    }

    return {
        link: link,
        restrict: 'E',
        require: '^graph',
        scope: {dim: '@', min: '&', max: '&', title: '@'}
    }

});

// point.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('point', function () {

        function link(scope, element, attrs, graphCtrl) {

            graphCtrl.addObject({

                update: function (shapes,graph) {

                    var p = (typeof scope.point == 'function') ? scope.point() : scope.point;

                    var droplines = scope.droplines || 'none'; // set droplines to "none" by default

                    var x = p[0],
                        y = p[1];

                    var xInDomain = (x <= graph.xDomain[1] && x >= graph.xDomain[0]),
                        yInDomain = (y <= graph.yDomain[1] && y >= graph.yDomain[0]);

                    var cx = graph.x(x),
                        cy = graph.y(y);

                    // Add point to shapes if it's in the graph domain
                    if(xInDomain && yInDomain) {

                        shapes.circles.push({
                            style: scope.style,
                            cx: cx,
                            cy: cy
                        });

                    }

                    // Add associated droplines and labels only if the each is in its dimension of the graph domain

                    if (droplines != 'none') {

                        // Add a vertical dropline unless droplines == horizontal
                        if (droplines != 'horizontal' && xInDomain) {
                            shapes.lines.push({class: scope.style + ' dropline', x1: cx, y1: Math.max(cy,0), x2: cx, y2: graph.height + 25});
                            if (scope.xlabel != '') {
                                shapes.texts.push({
                                    text: scope.xlabel,
                                    x: cx,
                                    y: graph.height + 40,
                                    anchor: 'middle'
                                })
                            }
                        }

                        // Add a horizontal dropline unless droplines == vertical
                        if (droplines != 'vertical' && yInDomain) {
                            shapes.lines.push({class: scope.style + ' dropline', x1: Math.min(cx,graph.width), y1: cy, x2: -25, y2: cy});
                            if (scope.ylabel != '') {
                                shapes.texts.push({
                                    text: scope.ylabel,
                                    x: -27,
                                    y: cy + 5,
                                    anchor: 'end'
                                })
                            }
                        }

                    }

                    return shapes;

                }
            });

        }

        return {
            link: link,
            require: '^graph',
            restrict: 'E',
            scope: { point: '&', droplines: '@', xlabel: '@', ylabel: '@', style: '@'}
        }
    }
);

// curve.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('curve', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            graphCtrl.addObject({
                
                update: function (shapes,graph) {

                    var p = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                    var yofx = [];
                    var xofy = [];

                    if('y' != scope.ind) {
                        yofx = p.points(graph.xDomain, graph.yDomain)
                    }

                    if('x' != scope.ind) {
                        xofy = p.points(graph.xDomain, graph.yDomain, true)
                    }

                    function sortObjects(key,descending) {
                        return function(a,b) {
                            var lower = descending ? a[key] : b[key],
                                higher = descending ? b[key] : a[key];
                            return lower > higher ? -1 : lower < higher ? 1 : lower <= higher ? 0 : NaN;
                        }
                    }

                    var allPoints = d3.merge([yofx,xofy]);

                    if('y' == scope.ind) {
                        allPoints = allPoints.sort(sortObjects('y'));
                    } else {
                        allPoints = allPoints.sort(sortObjects('x'));
                    }

                    shapes.curves.push({points: graph.curveFunction(allPoints), color: scope.color});

                    return shapes;

                }
            });

        }

        return {
            link: link,
            require: '^graph',
            restrict: 'E',
            scope: { fn: '&', ind: '@', color: '@' }
        }
    }
);

// line.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('line', function () {

        function link(scope, element, attrs, graphCtrl) {

            graphCtrl.addObject({

                update: function (shapes, graph) {

                    var l = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                    var points = l.points(graph.xDomain,graph.yDomain),
                        x1 = graph.x(points[0].x),
                        y1 = graph.y(points[0].y),
                        x2 = graph.x(points[1].x),
                        y2 = graph.y(points[1].y);

                    shapes.lines.push({x1: x1, y1: y1, x2: x2, y2: y2, color: scope.color})

                    return shapes;

                }
            });

        }

        return {
            link: link,
            require: '^graph',
            restrict: 'E',
            scope: { fn: '&', color: '@'}
        }
    }
);

// area.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('area', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            graphCtrl.addObject({
                
                update: function (shapes,graph) {

                    var p = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                    shapes.areas.push({points: graph.curveFunction(p.area(graph.xDomain, graph.yDomain)), color: scope.color});

                    return shapes;

                }
            });

        }

        return {
            link: link,
            require: '^graph',
            restrict: 'E',
            scope: { fn: '&', ind: '@', color: '@' }
        }
    }
);

