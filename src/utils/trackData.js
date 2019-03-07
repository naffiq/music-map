export const flattenAlbums = albumData =>
  albumData.reduce(
    (allTracksData, album, albumIdx) =>
      allTracksData.concat(album.tracks.map(track => ({ ...track, albumIdx }))),
    []
  );

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
