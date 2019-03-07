import { flattenAlbums } from "../utils";

import {
  albumIdxToX,
  tempoToRadius,
  colorEnergyScale,
  scaleGenerator
} from "../scales";

export const render = (chart, height, albumsData) => {
  const valenceToY = scaleGenerator.valenceToY(height);
  const tracksData = flattenAlbums(albumsData);

  var musicMapChart = chart
    .selectAll("g")
    .data(tracksData)
    .enter()
    .append("g")
    .attr("class", "track-circle")
    .attr(
      "transform",
      track =>
        "translate(" +
        Number(albumIdxToX(track.albumIdx) + 200) +
        `, ${height + 200})`
    );

  musicMapChart
    .transition()
    .duration(track => 300 * (track.albumIdx + 5) + Math.random() * 50)
    .attr(
      "transform",
      track =>
        "translate(" +
        Number(albumIdxToX(track.albumIdx) + 200) +
        ", " +
        valenceToY(track.valence) +
        ")"
    );

  musicMapChart
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 0)
    .attr("style", "stroke:#000;stroke-width:1;")
    .attr("fill", track => colorEnergyScale(track.energy));

  musicMapChart
    .selectAll("circle")
    .transition()
    .duration((_, i) => 100 * (i + 1))
    .attr("r", track => tempoToRadius(track.tempo));

  // musicMapChart.selectAll("circle");

  musicMapChart
    .append("text")
    .attr("x", 0)
    .attr("y", 50)
    .attr("dy", ".35em")
    .text(function(d) {
      return d.name;
    });
};

export default { render };
