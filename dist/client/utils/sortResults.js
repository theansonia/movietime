"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortResults = void 0;
const sortResults = (incomingResultsArray) => {
    const outgoingSortedArray = incomingResultsArray.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    return outgoingSortedArray;
};
exports.sortResults = sortResults;
//# sourceMappingURL=sortResults.js.map