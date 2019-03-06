import { albumsData } from "./data";
import { getTrackData, getMaxValue, getMinValue } from "./utils";

const minValence = getMinValue(albumsData, "valence");
const maxValence = getMaxValue(albumsData, "valence");

const tracksData = getTrackData(albumsData);

const width = window.innerWidth - 200;
const height = 900;
const MAX_CIRCLE_RADIUS = Math.min(width / albumsData.length / 2 - 20, 100);

const xAlbumsScale = d3.scale
  .linear()
  .domain([0, albumsData.length])
  .range([MAX_CIRCLE_RADIUS, width - MAX_CIRCLE_RADIUS]);

var yHappinessScale = d3.scale
  .linear()
  .domain([minValence, maxValence])
  .range([height - 200, MAX_CIRCLE_RADIUS]);

const colorEnergyScale = d3.scale
  .linear()
  .domain([0, 0.5, 1])
  .range(["#C5E5F5", "#ECCB28", "#EF0E15"]);

var chart = d3
  .select(".chart")
  .attr("width", window.innerWidth)
  .attr("height", height);

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
      Number(xAlbumsScale(track.albumIdx) + 200) +
      `, ${height + 200})`
  );

chart
  .selectAll("g.track-circle")
  .transition()
  .duration(() => 500 + Math.random() * 500)
  .attr(
    "transform",
    track =>
      "translate(" +
      Number(xAlbumsScale(track.albumIdx) + 200) +
      ", " +
      yHappinessScale(track.valence) +
      ")"
  );

musicMapChart
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 30)
  .attr("fill", track => colorEnergyScale(track.energy));

// musicMapChart.selectAll("circle");

musicMapChart
  .append("text")
  .attr("x", 0)
  .attr("y", 50)
  .attr("dy", ".35em")
  .text(function(d) {
    return d.name;
  });
console.log(albumsData);

var albumsLine = chart
  .selectAll("g.albumsRow")
  .data(albumsData)
  .enter()
  .append("g")
  .attr(
    "transform",
    (_, i) =>
      "translate(" + Number(xAlbumsScale(i) + 200) + "," + (height - 130) + ")"
  );
const ALBUM_IMAGE_SIZE = 60;
albumsLine
  .append("image")
  .attr("x", 20)
  .attr("y", 0)
  .attr("width", ALBUM_IMAGE_SIZE)
  .attr("height", ALBUM_IMAGE_SIZE)
  .attr("xlink:href", album => {
    if (album && album.image) {
      return album.image.url;
    }
    return null;
  });

albumsLine
  .append("text")
  .attr("class", "album-title")
  .attr("x", ALBUM_IMAGE_SIZE - 10)
  .attr("y", ALBUM_IMAGE_SIZE + 20)
  .text(album => {
    if (album) {
      return album.name;
    }
    return null;
  });

albumsLine
  .append("text")
  .attr("class", "album-description")
  .attr("x", ALBUM_IMAGE_SIZE + 25)
  .attr("y", ALBUM_IMAGE_SIZE + 40)
  .text(album => {
    if (album) {
      return (
        `${album.release_date}`.substr(0, 4) + `, ${album.tracks.length} tracks`
      );
    }
    return null;
  });

chart
  .append("line")
  .attr("x1", 100)
  .attr("y1", 20)
  .attr("x2", 100)
  .attr("y2", height - 150)
  .attr("style", "stroke:#6C6973;stroke-width:1;");

chart
  .append("text")
  .attr("class", "horizontal-description")
  .text("Less depressive")
  .attr("x", -20)
  .attr("y", 80)
  .attr("transform", "rotate(270)");
chart
  .append("text")
  .attr("class", "horizontal-description")
  .text("More depressive")
  .attr("x", -670)
  .attr("y", 80)
  .attr("transform", "rotate(270)");
