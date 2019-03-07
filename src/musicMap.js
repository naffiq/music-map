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
