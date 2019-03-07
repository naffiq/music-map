import { albumIdxToX } from "../scales";

export const render = (chart, height, albumsData) => {
  console.log(albumsData);
  const albumsLine = chart
    .selectAll("g.albumsRow")
    .data(albumsData)
    .enter()
    .append("g")
    .attr("style", "opacity:0")
    .attr(
      "transform",
      (_, i) =>
        "translate(" + Number(albumIdxToX(i) + 200) + "," + (height - 130) + ")"
    );

  albumsLine
    .transition()
    .duration((_, i) => 300 * (i + 5))
    .attr("style", "opacity:1");

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

  const title = albumsLine
    .append("text")
    .attr("class", "album-title")
    .attr("x", ALBUM_IMAGE_SIZE - 10)
    .attr("y", ALBUM_IMAGE_SIZE + 40)
    .text(album => {
      if (album) {
        return album.name;
      }
      return null;
    });

  title
    .transition()
    .duration((_, i) => 300 * (i + 5))
    .attr("y", ALBUM_IMAGE_SIZE + 20);

  const description = albumsLine
    .append("text")
    .attr("class", "album-description")
    .attr("x", ALBUM_IMAGE_SIZE + 25)
    .attr("y", ALBUM_IMAGE_SIZE + 60)
    .text(album => {
      if (album) {
        return (
          `${album.release_date}`.substr(0, 4) +
          `, ${album.tracks.length} tracks`
        );
      }
      return null;
    });

  description
    .transition()
    .duration((_, i) => 300 * (i + 5))
    .attr("y", ALBUM_IMAGE_SIZE + 40);
};

export default {
  render
};
