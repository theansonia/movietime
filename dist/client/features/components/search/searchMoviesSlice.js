"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieData = exports.searchMoviesSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    data: [
        {
            genre_ids: [0, 1, 2, 3],
            original_language: 'en',
            original_title: 'Movie title',
            poster_path: 'posterpath.com',
            video: false,
            vote_average: 0,
            overview: 'overview',
            release_date: 'date as string',
            id: 1234,
            vote_count: 386976,
            adult: false,
            backdrop_path: '/pathtojpg',
            title: 'Movie title',
            popularity: 69,
            media_type: 'movie',
        },
    ],
};
exports.searchMoviesSlice = toolkit_1.createSlice({
    name: 'movieData',
    initialState,
    reducers: {
        updateMovieData: (state, action) => {
            state.data = action.payload;
        },
    },
});
exports.updateMovieData = exports.searchMoviesSlice.actions.updateMovieData;
exports.default = exports.searchMoviesSlice.reducer;
//# sourceMappingURL=searchMoviesSlice.js.map