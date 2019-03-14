import { shazamData } from "../data/shazamData";

export const flattenAlbums = albumData =>
  albumData.reduce(
    (allTracksData, album, albumIdx) =>
      allTracksData.concat(album.tracks.map(track => ({ ...track, albumIdx }))),
    []
  );

export const addShazams = albums => {
  const albumsWithShazams = albums.map(album => {
    const tracksWithShazams = album.tracks
      .map(track => {
        const shazamLink = shazamData.find(shazamTrack => {
          return shazamTrack.Title.toLowerCase() === track.name.toLowerCase();
        });
        const shazams = shazamLink ? shazamLink["Shazams per year"] : "0";

        return {
          ...track,
          shazams
        };
      })
      .filter(track => track.shazams > 0);
    return {
      ...album,
      tracks: tracksWithShazams
    };
  });

  return albumsWithShazams;
};

export const getMaxValue = (albumData, trackField) =>
  albumData.reduce((currentMax, album) => {
    const albumTrackValues = album.tracks.map(track => track[trackField]);
    return d3.max([currentMax, d3.max(albumTrackValues)]);
  }, 0);
export const getMinValue = (albumData, trackField) =>
  albumData.reduce((currentMax, album) => {
    const albumTrackValues = album.tracks.map(track => track[trackField]);
    return d3.min([currentMax, d3.min(albumTrackValues)]);
  }, 0);
