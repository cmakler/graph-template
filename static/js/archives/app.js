//Built using buildjs.py script - do not hand edit

// app.js
/**
 * Created by cmakler on 10/31/14.
 */
var kgAngular = angular.module('kineticGraphs', []);

kgAngular.controller('kgController', function ($scope) {

    Reveal.addEventListener('slidechanged', function (event) {
        $scope.$broadcast('resize');
    });

});

// d3-helpers.js
kgAngular.service('D3Helpers', function () {


    this.drawCircles = function (data, circles) {

        circles = circles.data(data);
        circles.exit().remove();
        circles.enter().append('circle');
        circles
            .attr('cx', function (d) {
                return d.cx
            })
            .attr('cy', function (d) {
                return d.cy
            })
            .attr('stroke', function(d) {
                return d.color
            })
            .attr('fill', function (d) {
                return d.color
            })
            .attr('r', function (d) {
                return d.r || 10;
            });
        return circles;

    };


    this.drawLines = function (data, lines) {

        lines = lines.data(data);
        lines.exit().remove();
        lines.enter().append('line')
            .attr('class', function(d) {
                return d.class
            });
        lines
            .attr('x1', function (d) {
                return d.x1
            })
            .attr('y1', function (d) {
                return d.y1
            })
            .attr('x2', function (d) {
                return d.x2
            })
            .attr('y2', function (d) {
                return d.y2
            })
            .attr('stroke-width', 2)
            .attr('stroke', function (d) {
                return d.color || '#666666'
            });

        return lines;

    };

    this.drawRects = function (data, rects) {

        rects = rects.data(data);
        rects.exit().remove();
        rects.enter().append('rect')
            .attr('class', function (d) {
                return d.class
            })
            .attr('fill-opacity', 0.3);;
        rects
            .attr('x', function (d) {
                return d.x
            })
            .attr('y', function (d) {
                return d.y
            })
            .attr('width', function (d) {
                return d.width
            })
            .attr('height', function (d) {
                return d.height
            })
            .attr('style', function(d) {
                return 'fill:' + d.color
            });

        return rects;

    };


    this.drawCurves = function (data,curves) {

        curves = curves.data(data);
        curves.exit().remove();
        curves.enter().append('svg:path').attr('fill','none');
        curves
            .attr('stroke-width', 2)
            .attr('stroke', function (d) {
                return d.color || '#666666'
            })
            .attr('d', function (d) {
                return d.points
            });
        return curves;

    };


    this.drawAreas = function(data,areas) {

        areas = areas.data(data);
        areas.exit().remove();
        areas.enter().append('svg:path')
            .attr('fill-opacity', 0.3);
        areas
            .attr('d', function (d) {
                return d.points
            })
            .attr('fill', function (d) {
                return d.color
            });
        return areas;

    };


    this.drawTexts = function (data,texts) {

        texts = texts.data(data);
        texts.exit().remove();
        texts.enter().append("svg:text");
        texts
            .attr("x", function (d) {
                return d.x
            })
            .attr("y", function (d) {
                return d.y
            })
            .attr("text-anchor", function (d) {
                return d.anchor
            })
            .attr("fill", function (d) {
                return d.color
            })
            .attr("font-size", 14)
            .attr("font-style", "oblique")
            .text(function (d) {
                return d.text
            });

        return texts;

    };

    this.configLabel = function(labelParams) {


        var width = labelParams['width'] || 100,
            xOffset = labelParams['xOffset'] || 0,
            yOffset = labelParams['yOffset'] || 0,
            xCoord = 0,
            yCoord = 0;

        if(labelParams.hasOwnProperty('point') && labelParams.point != undefined) {
            xCoord = labelParams.point['x'] || labelParams.point[0] || xCoord;
            yCoord = labelParams.point['y'] || labelParams.point[1] || yCoord;
        }

        var x = labelParams['graph'].x(xCoord) + xOffset,
            y = labelParams['graph'].y(yCoord) + yOffset - 20,
            align = labelParams['align'] || 'left';

        if(align == 'right') {
            x -= width;
        }
        if(align == 'center') {
            x -= 0.5*width;
        }
        return {
            html: labelParams['html'],
            x: x,
            y: y,
            align: align,
            width: width,
            math: true,
            size: '16pt'
        }
    };

    this.drawDivs = function(data,divs) {

        divs = divs.data(data);
        divs.exit().remove();
        divs.enter().append("div");
        divs
            .attr("class", function(d) {
                return d.math ? 'katex' : "";
            })
            .attr("style", function (d) {
                return "position: absolute; font-size: " + d.size + "; text-align: "+ d.align + "; left: " + d.x + "px; top: " + d.y + "px; color: " + d.color + "; width: " + d.width + "px";
            })
            .text(function(d) { return d.html});

        for (var i = 0; i < data.length; i++) {
            if (false != data[i].math) {
                var element = divs[0][i],
                    text = element.innerText;
                katex.render(text, element)
            }
        }

        return divs;
    };


    this.addAxes = function(graph,x_axis,y_axis) {

        graph.xDomain = [x_axis.min || 0, x_axis.max || 10];
        graph.yDomain = [y_axis.min || 0, y_axis.max || 10];

        // Create the D3 scales for the x and y dimensions
        graph.x = d3.scale.linear()
            .range([0, graph.width])
            .domain(graph.xDomain);
        graph.y = d3.scale.linear()
            .range([graph.height, 0])
            .domain(graph.yDomain);

        graph.curveFunction = d3.svg.line()
            .x(function (d) {
                return graph.x(d.x);
            }).y(function (d) {
                return graph.y(d.y);
            }).interpolate("linear");

        graph.verticalArea = d3.svg.area()
            .x(function (d) {
                return graph.x(d.x);
            })
            .y0(function (d) {
                return graph.y(d.y0);
            })
            .y1(function (d) {
                return graph.y(d.y1);
            });

        graph.horizontalArea = d3.svg.area()
            .x0(function (d) {
                return graph.x(d.x0);
            })
            .x1(function (d) {
                return graph.x(d.x1);
            })
            .y(function (d) {
                return graph.y(d.y);
            });

        return graph;

    }

});

// clicker.js
/**
 * Created by cmakler on 12/17/14.
 */

// Set the CSV to be used throughout the session.
// This doesn't change, though the data in it will.
kgAngular.directive('clickerFile', function () {
    return {
        restrict: 'E',
        scope: false,
        template: "<input ng-if='!currentFile' type='file'/>",
        link: function (scope, element) {
            element.on('change', function (onChangeEvent) {
                scope.currentFile = (onChangeEvent.srcElement || onChangeEvent.target).files[0];
                scope.$apply();
            });
        }
    };
});

kgAngular.directive('clickerQuestion', function () {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        replace: true,
        template: "<div><div ng-transclude></div><hr/><div ng-if='currentFile'><button ng-click='update()'>Reveal</button><button ng-click='reset()'>Reset</button></div></div>",
        controller: function ($scope) {

            $scope.options = {}

            this.addOption = function(scope) {
                $scope.options[scope.letter] = scope;
            };

            function updateChildren() {
                for (var letter in $scope.options) {
                    var count = $scope.count[letter],
                        frequency = 100 * count / $scope.total,
                        option = $scope.options[letter];
                    option.frequency = frequency;
                    option.count = count;
                    option.$apply();
                }
            }

            function parseCSV(csvdata) {

                var data = csvdata['data'];

                $scope.reset();

                // i starts at 5 because student data begins on the sixth line of the CSV
                for (var i = 5; i < data.length; i++) {
                    var studentResponse = data[i];
                    if (studentResponse.length == 1) {
                        studentResponse = studentResponse[0].split(',');
                    }
                    if (studentResponse.length > 2) {

                        // Each student's most response to the last question is in the seventh-to-last column of the CSV
                        var responseLetter = studentResponse[studentResponse.length - 7];
                        if ($scope.count.hasOwnProperty(responseLetter)) {
                            $scope.count[responseLetter] += 1;
                        } else {
                            $scope.count[responseLetter] = 1;
                        }
                        $scope.total++;
                    }
                    updateChildren();
                }


            }

            // Get latest data from CSV.
            $scope.update = function () {

                if ($scope.currentFile) {
                    Papa.parse($scope.currentFile, {
                        complete: parseCSV //when data is loaded, call parseCSV
                    });
                }

            };

            $scope.reset = function () {
                // Reset count and frequency objects for this scope.
                $scope.count = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0};
                $scope.frequency = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0};
                $scope.total = 0;
                updateChildren();
            }

        }
    }
});

kgAngular.directive('clickerOption', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        transclude: true,
        require: '^clickerQuestion',
        template: "<table class='table'><tr style='height: 100px'><td style='width:50px'>{{letter}}</td><td style='width: 800px'><div ng-transclude></div></td><td>{{ count }} ({{ frequency | number: 0 }}%)</td></tr></table>",
        link: function (scope, element, attrs, ClickerCtrl) {
            scope.letter = attrs['letter'];
            scope.count = '-';
            scope.frequency = '-';
            ClickerCtrl.addOption(scope)

        }
    }
});

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




        // Setters for parameters and functions
        this.setValue = function(category,name,value) {
            $scope[category][name] = value;
        };

    }

    return {
        restrict: 'E',
        scope: true,
        controller: controller
    }

})

// math.js
/**
 * Created by cmakler on 11/10/14.
 */

kgAngular.directive('renderedMath',function() {

    function link(scope,el) {

        if(scope.expression) {

            function render() {
                katex.render(scope.expression, el[0]);
            }

            scope.$on('redraw', render);

            render();

        } else {

            katex.render(el[0].innerText, el[0])

        }


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

// toggle.js
/**
 * Created by cmakler on 01/09/15.
 */

'use strict';

kgAngular.directive('toggle', function () {

    function link(scope, el, attrs, ModelCtrl) {

        if(scope.init == 'true') {
            scope.param = true;
        }

        scope.toggle = function() {
            scope.param = !scope.param;
            ModelCtrl.update();
        };

    }

    return {
        link: link,
        require: '^model',
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<button ng-click='toggle()')><span ng-transclude/></button>",
        scope: { param: '=', init:'@' }
    };
});

// graph.js
/**
 * Created by cmakler on 10/31/14.
 */

'use strict';

kgAngular.directive('graph', function (D3Helpers) {

    function link(scope, el, attrs, ModelCtrl) {

        el = el[0];

        scope.graph_definition = scope.graph_definition || {};
        
        scope.x_axis = scope.x_axis || {min: 0, max: 10, title: 'X axis', ticks: 1};
        scope.y_axis = scope.y_axis || {min: 0, max: 10, title: 'Y axis', ticks: 1};
        scope.dimensions = {height: attrs.height || 700, width: attrs.width || 700};
        scope.margin = {top: 10, right: 10, bottom: 80, left: 90};

        scope.$on('redraw', drawObjects);
        scope.$on('resize', resize);

        // These are D3 selectors for each type of shape on the graph
        var circles, lines, curves, rects, areas, texts, divs, x_axis, y_axis, x_axis_label, y_axis_label;

        // Regenerate current definitions of plotted shapes from graph objects.
        function plotted_shapes () {

            // reset plotted shapes
            var shapes = {lines: [], circles: [], curves: [], texts: [], rects: [], areas: [], divs: []};

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
            rects = D3Helpers.drawRects(data.rects, rects);
            lines = D3Helpers.drawLines(data.lines,lines);
            curves = D3Helpers.drawCurves(data.curves,curves);
            circles = D3Helpers.drawCircles(data.circles,circles);
            texts = D3Helpers.drawTexts(data.texts,texts);
            divs = D3Helpers.drawDivs(data.divs,divs);

            // Add x axis
            x_axis.call(d3.svg.axis().scale(scope.graph_definition.x).orient("bottom").ticks(scope.x_axis.ticks));
            x_axis_label.text(scope.x_axis.title);

            // Add y axis
            y_axis.call(d3.svg.axis().scale(scope.graph_definition.y).orient("left").ticks(scope.y_axis.ticks));
            y_axis_label.text(scope.y_axis.title);

        }

        function resize() {
            if (scope.graph_definition.vis) {
                d3.select(el).select('svg').remove();
                d3.select(el).selectAll('div').remove();
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

            d3.select(el.parentNode).select('div').remove();
            scope.graph_definition.divs = d3.select(el.parentNode)
                .append("div")
                .attr("style", "position:absolute; left: " + scope.margin.left + "px; top: " + scope.margin.top + "px; width: " + scope.graph_definition.width + "px; height: " + scope.graph_definition.height + "px");

            areas = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.area');
            rects = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.rect');
            curves = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.curve');
            lines = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.line');
            circles = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.circle');
            texts = scope.graph_definition.vis.append('g').attr('class', 'graph-objects').selectAll('g.text');
            divs = scope.graph_definition.divs.append('div').attr('class', 'graph-divs').selectAll('div');
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
        var graph_divs = $scope.graph_definition.divs = [];

        this.addObject = function(newObject) {
            graph_objects.push(newObject);
        };

        this.addAxis = function(dim,axis_definition) {
            $scope[dim+'_axis'] = axis_definition;
        };

        this.addDiv = function(newDiv) {
            graph_divs.push(newDiv)
        };



    }

    return {
        link: link,
        controller: controller,
        require: '^model',
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
                title: scope.title,
                ticks: scope.ticks()
            });
        }

        scope.$watch('title', addAxis);

        addAxis();

    }

    return {
        link: link,
        restrict: 'E',
        require: '^graph',
        scope: {dim: '@', min: '&', max: '&', title: '@', ticks: '&'}
    }

});

// point.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('point', function () {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({

                update: function (shapes,graph) {

                    if (scope.show()) {

                        var p = (typeof scope.point == 'function') ? scope.point() : scope.point;

                        var droplines = scope.droplines || 'none'; // set droplines to "none" by default

                        var label = scope.label || 'none';

                        var x = p[0] || p.x,
                            y = p[1] || p.y;

                        var xInDomain = (x <= graph.xDomain[1] && x >= graph.xDomain[0]),
                            yInDomain = (y <= graph.yDomain[1] && y >= graph.yDomain[0]);

                        var cx = graph.x(x),
                            cy = graph.y(y);

                        // Add point to shapes if it's in the graph domain
                        if (xInDomain && yInDomain) {

                            shapes.circles.push({
                                color: scope.color,
                                cx: cx,
                                cy: cy,
                                r: scope.r
                            });

                        }

                        if (label != 'none') {
                            shapes.texts.push({
                                text: scope.label,
                                x: cx,
                                y: cy + 5,
                                anchor: 'middle',
                                color: 'white'
                            })
                        }


                        // Add associated labels only if each is in its dimension fo the graph domain
                        if (scope.xlabel != '' && xInDomain) {
                            shapes.divs.push({
                                html: scope.xlabel,
                                x: cx - 50,
                                y: graph.height + 20,
                                width: 100,
                                color: scope.color,
                                align: 'center',
                                size: '16pt'
                            })
                        }

                        if (scope.ylabel != '' && yInDomain) {
                            shapes.divs.push({
                                html: scope.ylabel,
                                x: -120,
                                y: cy - 20,
                                width: 100,
                                color: scope.color,
                                align: 'right',
                                size: '16pt'
                            })
                        }

                        // Add associated droplines only if the each is in its dimension of the graph domain

                        if (droplines != 'none') {

                            // Add a vertical dropline unless droplines == horizontal
                            if (droplines != 'horizontal' && xInDomain) {
                                shapes.lines.push({class: scope.style + ' dropline', color: scope.color,
                                    x1: cx, y1: Math.max(cy, 0), x2: cx, y2: graph.height + 25});
                            }

                            // Add a horizontal dropline unless droplines == vertical
                            if (droplines != 'vertical' && yInDomain) {
                                shapes.lines.push({class: scope.style + ' dropline', color: scope.color,
                                    x1: Math.min(cx, graph.width), y1: cy, x2: -25, y2: cy});
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
            scope: { point: '&', droplines: '@', label: '@', xlabel: '@', ylabel: '@', color: '@', show:'&', r: '@'}
        }
    }
);

// curve.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('curve', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({
                
                update: function (shapes,graph) {

                    if(scope.show()) {

                        var p = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                        var yofx = [];
                        var xofy = [];

                        if ('y' != scope.ind) {
                            yofx = p.points(graph.xDomain, graph.yDomain)
                        }

                        if ('x' != scope.ind) {
                            xofy = p.points(graph.xDomain, graph.yDomain, true)
                        }

                        function sortObjects(key, descending) {
                            return function (a, b) {
                                var lower = descending ? a[key] : b[key],
                                    higher = descending ? b[key] : a[key];
                                return lower > higher ? -1 : lower < higher ? 1 : lower <= higher ? 0 : NaN;
                            }
                        }

                        var allPoints = d3.merge([yofx, xofy]);

                        if ('y' == scope.ind) {
                            allPoints = allPoints.sort(sortObjects('y'));
                        } else {
                            allPoints = allPoints.sort(sortObjects('x'));
                        }

                        shapes.curves.push({points: graph.curveFunction(allPoints), color: scope.color});

                        // Add label to last point

                        var label = scope.label || 'none';

                        // Add associated labels only if each is in its dimension fo the graph domain
                        if (label != 'none') {
                            var labelObject = D3Helpers.configLabel({
                                graph: graph,
                                html:label,
                                point: allPoints[allPoints.length - 1],
                                xOffset: parseInt(scope.labelOffsetX()),
                                yOffset: parseInt(scope.labelOffsetY())
                            });
                            labelObject.color = scope.color;

                            shapes.divs.push(labelObject);
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
            scope: { fn: '&', label:'@', ind: '@', color: '@', show: '&', labelOffsetX: '&', labelOffsetY: '&' }
        }
    }
);

// line.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('line', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({

                update: function (shapes, graph) {

                    if (scope.show()) {

                        if(scope.params() != undefined && scope.params().hasOwnProperty('definitionType')) {
                            scope.fn = new kg.functions.Linear(scope.params());
                        }

                        var l = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                        if(l != undefined) {var points = l.points(graph.xDomain, graph.yDomain),
                            x1 = graph.x(points[0].x),
                            y1 = graph.y(points[0].y),
                            x2 = graph.x(points[1].x),
                            y2 = graph.y(points[1].y);

                        shapes.lines.push({x1: x1, y1: y1, x2: x2, y2: y2, color: scope.color});}

                        // Add label to last point

                        var label = scope.label || 'none';

                        if (label != 'none') {
                            var labelObject = D3Helpers.configLabel({
                                graph: graph,
                                html: label,
                                point: points[1],
                                xOffset: parseInt(scope.labelOffsetX()),
                                yOffset: parseInt(scope.labelOffsetY())
                            });
                            labelObject.color = scope.color;

                            shapes.divs.push(labelObject);
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
            scope: { fn: '&', color: '@', show:'&', params: '&', label:'@', labelOffsetX:'&', labelOffsetY:'&'}
        }
    }
);

kgAngular.directive('rule', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({

                update: function (shapes, graph) {

                    if (scope.show()) {

                        var direction = scope.direction || 'vertical',
                            xDomain = domainAsObject(graph.xDomain),
                            yDomain = domainAsObject(graph.yDomain);

                        var value = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                        if (value != undefined) {

                            var labelPoint = {},
                                axisLabelPoint= {};

                            if(direction == 'vertical' && value >= xDomain.min && value <= xDomain.max) {
                                shapes.lines.push(
                                    {
                                        x1: graph.x(value),
                                        y1: graph.y(yDomain.min),
                                        x2: graph.x(value),
                                        y2: graph.y(yDomain.max),
                                        color: scope.color
                                    }
                                );

                                labelPoint = {x: value, y: yDomain.max};
                            }

                            if (direction == 'horizontal' && value >= yDomain.min && value <= yDomain.max) {
                                shapes.lines.push(
                                    {
                                        x1: graph.x(xDomain.min),
                                        y1: graph.y(value),
                                        x2: graph.x(xDomain.max),
                                        y2: graph.y(value),
                                        color: scope.color
                                    }
                                );

                                labelPoint = {x: xDomain.max, y: value};
                                axisLabelPoint = {x: xDomain.max, y: value};
                            }

                            // Add label to last point

                            var label = scope.label || 'none';

                            if (label != 'none') {
                                var labelObject = D3Helpers.configLabel({
                                    graph: graph,
                                    html: label,
                                    point: labelPoint,
                                    xOffset: parseInt(scope.labelOffsetX()),
                                    yOffset: parseInt(scope.labelOffsetY())
                                });
                                labelObject.color = scope.color;

                                shapes.divs.push(labelObject);
                            }

                            // Add axis label

                            var axisLabel = scope.axisLabel || 'none';

                            if (axisLabel != 'none') {
                                var axisLabelObject = D3Helpers.configLabel({
                                    graph: graph,
                                    html: axisLabel,
                                    point: axisLabelPoint,
                                    xOffset: parseInt(scope.labelOffsetX()),
                                    yOffset: parseInt(scope.labelOffsetY())
                                });
                                axisLabelObject.color = scope.color;

                                shapes.divs.push(axisLabelObject);
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
            scope: { fn: '&', direction: '@', color: '@', show: '&', axisLabel: '@', label: '@', labelOffsetX: '&', labelOffsetY: '&'}
        }
    }
);

kgAngular.directive('segment', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({

                update: function (shapes, graph) {

                    if (scope.show()) {

                        var points = (typeof scope.points == 'function') ? scope.points() : scope.points;

                        var x1 = graph.x(points[0].x),
                            y1 = graph.y(points[0].y),
                            x2 = graph.x(points[1].x),
                            y2 = graph.y(points[1].y);

                        shapes.lines.push({x1: x1, y1: y1, x2: x2, y2: y2, color: scope.color});

                        // Add label to last point

                        var label = scope.label || 'none';

                        if (label != 'none') {

                            var labelPoint = ('center' == scope.labelPosition) ? {x : 0.5*(points[0].x + points[1].x), y: 0.5 * (points[0].y + points[1].y)} : points[1];

                            var labelObject = D3Helpers.configLabel({
                                graph: graph,
                                html: label,
                                point: labelPoint,
                                xOffset: parseInt(scope.labelOffsetX()),
                                yOffset: parseInt(scope.labelOffsetY())
                            });
                            labelObject.color = scope.color;

                            shapes.divs.push(labelObject);
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
            scope: { points: '&', color: '@', show:'&', label: '@', labelOffsetX: '&', labelOffsetY: '&', labelPosition: '@'}
        }
    }
);

// area.js
/**
 * Created by cmakler on 11/3/14.
 */

kgAngular.directive('area', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({
                
                update: function (shapes,graph) {

                    if (scope.show()) {

                        var p = (typeof scope.fn == 'function') ? scope.fn() : scope.fn;

                        shapes.areas.push({points: graph.curveFunction(p.area(graph.xDomain, graph.yDomain)), color: scope.color});


                    }

                    return shapes;

                }
            });

        }

        return {
            link: link,
            require: '^graph',
            restrict: 'E',
            scope: { fn: '&', ind: '@', color: '@', show: '&' }
        }
    }
);

// rect.js
/**
 * Created by cmakler on 1/9/15.
 */

kgAngular.directive('rect', function (D3Helpers) {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if (!attrs['show']) {
                scope.show = function () {
                    return true
                }
            }

            graphCtrl.addObject({

                update: function (shapes, graph) {

                    if(scope.show()) {

                        var p = (typeof scope.points == 'function') ? scope.points() : scope.points;

                        var x1 = graph.x(p[0][0]),
                            y1 = graph.y(p[0][1]),
                            x2 = graph.x(p[1][0]),
                            y2 = graph.y(p[1][1]);

                        var x = Math.min(x1,x2),
                            y = Math.min(y1,y2),
                            width = Math.abs(x1 - x2),
                            height = Math.abs(y1 - y2);

                        shapes.rects.push({x: x, y: y, width: width, height:height , color: scope.color});

                    }

                    return shapes;

                }
            });

        }

        return {
            link: link,
            require: '^graph',
            restrict: 'E',
            scope: { points: '&', show: '&', color: '@' }
        }
    }
);

// label.js
/**
 * Created by cmakler on 1/9/15.
 */

kgAngular.directive('label', function () {

        function link(scope, element, attrs, graphCtrl) {

            // Show unless there is an attribute determining show/hide behavior
            if(!attrs['show']) { scope.show = function(){return true} }

            graphCtrl.addObject({

                update: function (shapes, graph) {

                    if (scope.show()) {

                        var p = (typeof scope.point == 'function') ? scope.point() : scope.point;
                        var l = (typeof scope.label == 'function') ? scope.label() : scope.label;

                        var x = p[0],
                            y = p[1];

                        var xInDomain = (x <= graph.xDomain[1] && x >= graph.xDomain[0]),
                            yInDomain = (y <= graph.yDomain[1] && y >= graph.yDomain[0]);

                        var cx = graph.x(x),
                            cy = graph.y(y);

                        // Add label to shapes if it's in the graph domain
                        if (xInDomain && yInDomain) {

                            shapes.divs.push({
                                html: l,
                                x: cx - 75,
                                y: cy + 5,
                                width: 150,
                                align: 'center',
                                color: scope.color,
                                math: false,
                                size: '14pt'
                            });

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
            scope: { point: '&', label: '@', color: '@', show:'&'}
        }
    }
);

