'use strict';

var circle = d3.selectAll("circle");
circle.style("fill", "steelblue");
circle.attr("r", 30);

function repeated() {
    setTimeout(function () {
        circle.attr("cx", function () {
            return Math.random() * 720;
        });
        repeated();
    }, 2000);
}
repeated();

circle.data([32, 57, 112]);
circle.attr("r", function(d) {return Math.sqrt(d);});
circle.attr("cx", function(d, i) {return i * 100 + 30});

var svg = d3.select("svg");
circle = svg.selectAll("circle").data([32, 57, 112, 293]).enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) {return i * 100 + 30})
    .attr("r", function(d) {return Math.sqrt(d);})
    .attr("fill", "steelblue");

circle = svg.selectAll("circle").data([32, 57]).exit().remove();