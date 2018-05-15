/* eslint import/no-webpack-loader-syntax: off */
import MergeSort from "!raw-loader!./mergesort.ts";
import AdderDefinition from "!raw-loader!./adder.ts";
import AdderUsage from "!raw-loader!./adder-usage.ts";
import OrderError from "!raw-loader!./order-error.ts";
import OrderResolution from "!raw-loader!./order-resolution.ts";

export { MergeSort, AdderDefinition, AdderUsage, OrderError, OrderResolution };
