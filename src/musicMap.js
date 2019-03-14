import { albumsData } from "./data";
import { albums, valenceOrigin, tracks } from "./components";

const height = 900;

var chart = d3
  .select(".chart")
  .attr("width", window.innerWidth)
  .attr("height", height);

valenceOrigin.render(chart, height);
tracks.render(chart, height, albumsData);
albums.render(chart, height, albumsData);

d3.select(".title-data h1").attr("class", "visible");
d3.select(".title-data p")
  .transition()
  .delay(1000)
  .attr("class", "visible");
d3.select(".legend")
  .transition()
  .delay(2000)
  .duration(1000)
  .attr("style", "opacity: 1");
