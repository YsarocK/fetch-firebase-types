import type { FetchParameters } from "./types/index.js";
/**
 *
 * @param outDir The directory to output the types to. Defaults to "./types"
 * @param queryResultsLength The number of documents to query for each collection. Defaults to 25
 */
declare const FetchNewTypes: ({ outDir, queryResultsLength }?: FetchParameters) => Promise<string>;
export { FetchNewTypes };
