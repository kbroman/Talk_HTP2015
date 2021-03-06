// Generated by CoffeeScript 1.9.1
var draw_scale_of_results;

draw_scale_of_results = function() {
  var add_results, animation_duration, bgcolor, colors, div, h, height, svg, w, width, x, xs, y, ys;
  h = 600;
  w = 900;
  colors = ["#7442c8", "#c364c5", "#a8e4a0", "#fd7c6e"];
  bgcolor = "#181818";
  xs = d3.scale.linear().range([0, w]).domain([0, 100]);
  ys = d3.scale.linear().range([0, h]).domain([0, 100]);
  animation_duration = 1000;
  x = [0, 40, 10];
  y = [0, 0, 35];
  width = [35, 60];
  height = [19, 19];
  div = d3.select("div#scale_of_results");
  svg = div.append("svg").attr("height", h).attr("width", w).attr("id", "scale_of_results");
  svg.selectAll("empty").data([0, 1]).enter().append("rect").attr("x", function(i) {
    return xs(x[i]);
  }).attr("y", function(i) {
    return ys(y[i]);
  }).attr("width", function(i) {
    return xs(width[i]);
  }).attr("height", function(i) {
    return ys(height[i]);
  }).attr("stroke", bgcolor).attr("stroke-width", 1).attr("fill", function(i) {
    return colors[i];
  }).on("click", function(i) {
    return add_results();
  });
  svg.selectAll("empty").data(["genotypes", "phenotypes"]).enter().append("text").attr("x", function(d, i) {
    return xs(x[i] + 2.5);
  }).attr("y", function(d, i) {
    return ys(y[i] + 5);
  }).text(function(d) {
    return d;
  }).attr("fill", bgcolor).attr("dominant-baseline", "middle").attr("text-anchor", "start").style("font-size", "30pt");
  return add_results = function() {
    svg.append("rect").attr("x", xs(x[2])).attr("y", ys(y[2])).attr("width", xs(width[1])).attr("height", xs(width[0])).attr("stroke", bgcolor).attr("stroke-width", 1).attr("fill", colors[3]).attr("opacity", 0).transition().duration(animation_duration).attr("opacity", 1);
    return svg.append("text").attr("x", xs(x[2] + 2.5)).attr("y", ys(y[2] + 5)).text("results").attr("fill", bgcolor).attr("dominant-baseline", "middle").attr("text-anchor", "start").style("font-size", "30pt");
  };
};

draw_scale_of_results();
