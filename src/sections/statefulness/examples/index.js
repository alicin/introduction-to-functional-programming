/* eslint import/no-webpack-loader-syntax: off */
import AdderDefinition from "!raw-loader!./adder.ts";
import AdderUsage from "!raw-loader!./adder-usage.ts";

export { AdderDefinition, AdderUsage };