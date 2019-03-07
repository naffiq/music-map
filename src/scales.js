import { albumsData } from "./data";

import { getMinValue, getMaxValue } from "./utils";

const width = window.innerWidth - 200;
const COLUMN_WIDTH = Math.min(width / albumsData.length / 2 - 20, 100);

const minValence = getMinValue(albumsData, "valence");
const maxValence = getMaxValue(albumsData, "valence");

const minTempo = getMinValue(albumsData, "tempo");
const maxTempo = getMaxValue(albumsData, "tempo");

export const albumIdxToX = d3.scale
  .linear()
  .domain([0, albumsData.length])
  .range([COLUMN_WIDTH, width - COLUMN_WIDTH]);

export const scaleGenerator = {
  valenceToY: height =>
    d3.scale
      .linear()
      .domain([minValence, maxValence])
      .range([height - 200, COLUMN_WIDTH])
};

export const valenceToY = scaleGenerator.valenceToY(900);

export const tempoToRadius = d3.scale
  .linear()
  .domain([minTempo, maxTempo])
  .range([10, COLUMN_WIDTH]);

export const colorEnergyScale = d3.scale
  .linear()
  .domain([0, 0.5, 1])
  .range(["#C5E5F5", "#ECCB28", "#EF0E15"]);
