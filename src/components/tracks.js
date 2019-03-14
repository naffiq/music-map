import { flattenAlbums } from "../utils";

import {
  albumIdxToX,
  shazamsToRadius,
  colorEnergyScale,
  scaleGenerator
} from "../scales";

import _debounce from "lodash/debounce";

export const render = (chart, height, albumsData) => {
  const valenceToY = scaleGenerator.valenceToY(height);
  const tracksData = flattenAlbums(albumsData);

  var musicMapChart = chart
    .selectAll("g")
    .data(
      tracksData.sort((x, y) =>
        shazamsToRadius(x.shazams) > shazamsToRadius(y.shazams) ? -1 : 1
      )
    )
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

  musicMapChart.on("mouseover", x => {
    console.log(x);
    musicMapChart.attr(
      "class",
      track => `track-circle${track.id !== x.id ? " unfocued" : ""}`
    );
  });

  musicMapChart.on("mouseout", () => {
    musicMapChart.attr("class", "track-circle");
  });

  musicMapChart
    .transition()
    .delay(track => (Math.random() * 200 + 100) * (track.albumIdx + 1))
    .duration(track => 350 * (track.albumIdx + 5))
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
    .attr("fill", track => colorEnergyScale(track.energy));

  musicMapChart
    .selectAll("circle")
    .transition()
    .duration((_, i) => 100 * (i + 1))
    .attr("r", track => shazamsToRadius(track.shazams));

  // musicMapChart.selectAll("circle");

  musicMapChart
    .append("text")
    .attr("x", 0)
    .attr("y", 50)
    .attr("dy", ".35em")
    .text(function(d) {
      return `${d.name}`;
    });
};

export default { render };
