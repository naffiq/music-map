import axios from "axios";
import { headers } from "../header";

// const someAlbums = [
//   { id: "4ENxWWkPImVwAle9cpJ12I" },
//   { id: "7mUKceir3qJ2WeQETnvz8g" },
//   { id: "5GcgkRjhWDxrOTDk0TJQK8" }
// ];

const someTracks = [
  { id: "6FhqMiFC6PPYXihpGTFNMC" },
  { id: "7vuVUQV0dDnjXUyLPzJLPi" }
];
someTracks.map(track =>
  axios
    .get(`https://api.spotify.com/v1/audio-features/${track.id}`, {
      headers
    })
    .then(({ data }) => {
      const trackData = { ...data, ...track };
      console.log(JSON.stringify(trackData));
      return trackData;
    })
);

// const scrapeData = () => {
//   const fullData = Promise.all(
//     someAlbums.map(album => {
//       return axios
//         .get(`https://api.spotify.com/v1/albums/${album.id}/tracks?market=US`, {
//           headers
//         })
//         .then(({ data }) => {
//           // console.log(data);
//           return data.items.map(({ id, name }) => ({ id, name }));
//         })
//         .then(tracks => {
//           Promise.all(
//             tracks.map(track =>
//               axios
//                 .get(`https://api.spotify.com/v1/audio-features/${track.id}`, {
//                   headers
//                 })
//                 .then(({ data }) => {
//                   const trackData = { ...data, ...track };
//                   // console.log(trackData);
//                   return trackData;
//                 })
//             )
//           ).then(tracks => {
//             console.log(
//               JSON.stringify({
//                 ...album,
//                 tracks
//               })
//             );
//           });
//         });
//     })
//   );

//   return fullData;
// };
// scrapeData().then(console.log);
