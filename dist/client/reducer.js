"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const categorySlice_1 = __importDefault(require("./appSlices/categorySlice"));
const searchStatusSlice_1 = __importDefault(require("./appSlices/searchStatusSlice"));
const querySlice_1 = __importDefault(require("./appSlices/querySlice"));
const hasMoreSlice_1 = __importDefault(require("./features/containers/containerSlices/hasMoreSlice"));
const pagesSlice_1 = __importDefault(require("./appSlices/pagesSlice"));
const isLoadingSlice_1 = __importDefault(require("./features/containers/containerSlices/isLoadingSlice"));
const toggleThemeSlice_1 = __importDefault(require("./features/components/toggleTheme/toggleThemeSlice"));
const searchMoviesSlice_1 = __importDefault(require("./features/components/search/searchMoviesSlice"));
const valueSlice_1 = __importDefault(require("./features/components/search/searchSlices/valueSlice"));
exports.rootReducer = redux_1.combineReducers({
    category: categorySlice_1.default,
    searchStatus: searchStatusSlice_1.default,
    query: querySlice_1.default,
    hasMore: hasMoreSlice_1.default,
    pages: pagesSlice_1.default,
    isLoading: isLoadingSlice_1.default,
    theme: toggleThemeSlice_1.default,
    movieData: searchMoviesSlice_1.default,
    value: valueSlice_1.default,
});
//# sourceMappingURL=reducer.js.map