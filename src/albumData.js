import axios from "axios";
import { headers } from "./header";
export const albumsData = [
  {
    id: "6400dnyeDyD2mIFHfkwHXN",
    image: {
      height: 300,
      url: "https://i.scdn.co/image/fe11a648ea61a3c2422c21b3ff8a870a6efbc608",
      width: 300
    },
    name: "Pablo Honey",
    release_date: "1993-02-22",
    release_date_precision: "day",
    total_tracks: 12,
    type: "album"
  },
  {
    id: "500FEaUzn8lN9zWFyZG5C2",
    image: {
      height: 300,
      url: "https://i.scdn.co/image/391c85a80061f2e4cdc35c53d2a9ef86aff2502b",
      width: 300
    },
    name: "The Bends",
    release_date: "1995-03-28",
    release_date_precision: "day",
    total_tracks: 12
  },
  {
    id: "7dxKtc08dYeRVHt3p9CZJn",
    image: {
      height: 300,
      url: "https://i.scdn.co/image/1b898f0b8e3ce499d0fc629a1918c144d982e475",
      width: 300
    },
    name: "OK Computer",
    release_date: "1997-05-28",
    release_date_precision: "day",
    total_tracks: 12
  },
  {
    id: "19RUXBFyM4PpmrLRdtqWbp",
    image: {
      height: 300,
      url: "https://i.scdn.co/image/c652dc46f7eb187075e19c0cc921421c3312e641",
      width: 300
    },
    name: "Kid A",
    release_date: "2000-10-01",
    release_date_precision: "day",
    total_tracks: 11
  },
  {
    id: "6V9YnBmFjWmXCBaUVRCVXP",
    image: {
      height: 300,
      url: "https://i.scdn.co/image/b468b3f09ec4770493a8abf1ee17629be2276346",
      width: 300
    },
    name: "Amnesiac",
    release_date: "2001-03-12",
    release_date_precision: "day",
    total_tracks: 11
  },

  {
    id: "1oW3v5Har9mvXnGk0x4fHm",
    image: {
      height: 300,
      url: "https://i.scdn.co/image/4bbc829fa1284c4cf85fdb62a599ae9e6e7d1c32",
      width: 300
    },
    name: "Hail To the Thief",
    release_date: "2003",
    release_date_precision: "year",
    total_tracks: 14
  },
  {
    id: "7eyQXxuf2nGj9d2367Gi5f",
    image: {
      height: 300,
      width: 300,
      url: "https://i.scdn.co/image/34c390dd70fca5ba873ec7bc27c0f15888e77f12"
    },
    name: "In Rainbows",
    release_date: "2007-12-28",
    release_date_precision: "day",
    total_tracks: 10
  },
  {
    id: "1DBkJIEoeHrTX4WCBQGcCi",
    images: {
      height: 300,
      url: "https://i.scdn.co/image/9f69ce2bb80c60914cd4caf761afa8b1657f4783",
      width: 300
    },
    name: "The King Of Limbs",
    release_date: "2011-02-18",
    release_date_precision: "day",
    total_tracks: 8
  },
  {
    id: "6vuykQgDLUCiZ7YggIpLM9",
    image: {
      height: 300,
      width: 300,
      url: "https://i.scdn.co/image/f24736fe22360da5fcb08fbca21d536e49eeca4a"
    },
    name: "A Moon Shaped Pool",
    release_date: "2016-05-08",
    release_date_precision: "day",
    total_tracks: 11
  }
];

const someAlbums = [
  { id: "4ENxWWkPImVwAle9cpJ12I" },
  { id: "7mUKceir3qJ2WeQETnvz8g" },
  { id: "5GcgkRjhWDxrOTDk0TJQK8" }
];

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

export const oldData = [
  {
    name: "Pablo Honey",
    year: 1993,
    tracks: [
      {
        name: "Creep",
        shazamCount: 4200000,
        energy: 0.2,
        happiness: 0.1
      },

      {
        name: "Everyone can play guitar",
        shazamCount: 27000,
        energy: 0.7,
        happiness: 0.8
      }
    ]
  },
  {
    name: "The bends",
    year: 1995,
    tracks: [
      {
        name: "High and dry",
        shazamCount: 1300000,
        energy: 0.1,
        happiness: 0.4
      },

      {
        name: "Fake plastic trees",
        shazamCount: 714000,
        energy: 0.1,
        happiness: 0.2
      }
    ]
  },
  {
    name: "The bends",
    year: 1995,
    tracks: [
      {
        name: "High and dry",
        shazamCount: 1300000,
        energy: 0.1,
        happiness: 0.4
      },

      {
        name: "Fake plastic trees",
        shazamCount: 714000,
        energy: 0.1,
        happiness: 0.2
      }
    ]
  },
  {
    name: "The bends",
    year: 1995,
    tracks: [
      {
        name: "High and dry",
        shazamCount: 1300000,
        energy: 0.1,
        happiness: 0.4
      },

      {
        name: "Fake plastic trees",
        shazamCount: 714000,
        energy: 0.1,
        happiness: 0.2
      }
    ]
  }
];
