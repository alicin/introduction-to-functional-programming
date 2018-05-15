/* eslint import/no-webpack-loader-syntax: off */
import filterExample from "!raw-loader!./filter.js";
import mapExample from "!raw-loader!./map.js";
import reduceExample from "!raw-loader!./reduce.js";

import implementMap from "!raw-loader!./write-map.js";
import implementFilter from "!raw-loader!./write-filter.js";
import implementReduce from "!raw-loader!./write-reduce.js";

import chainedExample from "!raw-loader!./chain-methods.js";

export {
  filterExample,
  mapExample,
  reduceExample,
  implementMap,
  implementFilter,
  implementReduce,
  chainedExample
};
