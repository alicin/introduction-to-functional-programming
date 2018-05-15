/* eslint import/no-webpack-loader-syntax: off */
import closuresExample from "!raw-loader!./closures.js"
import hofExample from "!raw-loader!./higher-order-functions.js"
import curryingExample from "!raw-loader!./currying.js";

export {
  closuresExample,
  hofExample,
  curryingExample
}
