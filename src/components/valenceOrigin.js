export const render = (chart, height) => {
  const line = chart
    .append("line")
    .attr("x1", 100)
    .attr("y1", height - 150)
    .attr("x2", 100)
    .attr("y2", height - 150)
    .attr("style", "stroke:#6C6973;stroke-width:1;");

  line
    .transition()
    .duration(1000)
    .attr("y2", 20);

  const lessDepressive = chart
    .append("text")
    .attr("class", "horizontal-description")
    .text("Less depressive")
    .attr("x", -20)
    .attr("y", 80)
    .attr("transform", "rotate(270)")
    .attr("style", "opacity: 0");

  setTimeout(() => {
    lessDepressive
      .transition()
      .duration(500)
      .attr("style", "opacity: 1");
  }, 600);

  const moreDepressive = chart
    .append("text")
    .attr("class", "horizontal-description")
    .text("More depressive")
    .attr("x", -670)
    .attr("y", 80)
    .attr("transform", "rotate(270)")
    .attr("style", "opacity: 0");
  moreDepressive
    .transition()
    .duration(1000)
    .attr("style", "opacity: 1");
};

export default {
  render
};
