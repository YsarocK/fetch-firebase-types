#! /usr/bin/env node
import { argv } from "node:process";
import { FetchNewTypes } from "../main.js";
import type { FetchParameters } from "../types/index.js";

const args = argv.slice(2);

const opts: FetchParameters = {};

if(args.includes("outDir")) {
  const outDirIndex = args.indexOf("outDir");
  opts.outDir = args[outDirIndex + 1];
}

if(args.includes("queryResultsLength")) {
  const queryResultsLengthIndex = args.indexOf("queryResultsLength");
  opts.queryResultsLength = parseInt(args[queryResultsLengthIndex + 1]);
}

await FetchNewTypes(opts);
