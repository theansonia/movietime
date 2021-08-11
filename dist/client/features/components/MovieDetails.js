"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const react_1 = require("react");
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
const Recs_1 = __importDefault(require("./Recs"));
const Stars_1 = __importDefault(require("./Stars"));
const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
const MovieDetails = (props) => {
    const { state } = react_router_1.useLocation();
    const { params: { title }, } = props.match;
    const [type] = react_1.useState(state.type ? state.type : 'movie');
    const [details, updateDetails] = react_1.useState([]);
    const [recommendations, updateRecommendations] = react_1.useState([]);
    const [watch, updateWatch] = react_1.useState(null);
    const [providers, updateProviders] = react_1.useState([]);
    const theme = react_redux_1.useSelector((state) => state.theme.value);
    react_1.useEffect(() => {
        if (title === ' ' ||
            title === '.' ||
            title === '/' ||
            title === '$' ||
            title === '%' ||
            title === '#' ||
            title === '&' ||
            title === '+' ||
            title === '#' ||
            title === '?' ||
            title === '+' ||
            title === '#') {
            return;
        }
        let query = title.replaceAll('%20', ' ');
        query = title.replaceAll('%%20', ' ');
        const URL = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => updateDetails(data.results[0]))
            .catch((error) => console.log(error));
        return () => updateDetails([]);
    }, [title]);
    react_1.useEffect(() => {
        if (details === undefined)
            return;
        if (details.length === 0)
            return;
        const URL = `https://api.themoviedb.org/3/${type}/${details.id}/recommendations?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => updateRecommendations(data.results))
            .catch((error) => console.log(error));
        const providerURL = `https://api.themoviedb.org/3/${type}/${details.id}/watch/providers?api_key=${REACT_APP_MOVIE_API_KEY}`;
        fetch(providerURL)
            .then((res) => res.json())
            .then((data) => {
            updateWatch(data.results['US']);
        })
            .catch((error) => console.log(error));
        // may need to add id back to details.id
    }, [details, type]);
    react_1.useEffect(() => {
        if (!watch)
            return;
        const options = Object.keys(watch).filter((key) => {
            if (key !== 'link')
                return key;
        });
        const arrayOfProviderInfo = [
            ...new Set(options
                .map((medium) => {
                if (watch[medium] && medium !== 'link') {
                    return watch[medium].map((provider) => {
                        if (provider.provider_name.includes('Google'))
                            provider.provider_name = 'googleplay';
                        return [
                            provider.logo_path,
                            `http://www.${provider.provider_name.replace(' ', '')}.com`,
                        ];
                    });
                }
            })
                .flat()),
        ];
        const cache = {};
        arrayOfProviderInfo.filter((provider, i) => {
            if (!cache[provider])
                cache[provider] = i;
        });
        updateProviders(Object.keys(cache).map((pair) => {
            const temp = pair.split(',');
            return [temp[0], temp[1]];
        }));
    }, [watch]);
    return (jsx_runtime_1.jsx("div", Object.assign({ className: theme }, { children: jsx_runtime_1.jsx("div", { children: !details ? null : (jsx_runtime_1.jsxs("div", Object.assign({ id: 'detail' }, { children: [jsx_runtime_1.jsx("div", Object.assign({ id: 'detailposter' }, { children: `https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                            'https://image.tmdb.org/t/p/w500/null' &&
                            `https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                                'https://image.tmdb.org/t/p/w500/undefined' ? (jsx_runtime_1.jsx("img", { id: 'detailposter', src: `https://image.tmdb.org/t/p/w500/${details.poster_path}`, alt: `Movie poster for ${title}` }, void 0)) : (jsx_runtime_1.jsx("img", { id: 'poster', src: 'https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg', alt: 'back up movie poster cinema pardiso' }, void 0)) }), void 0), jsx_runtime_1.jsxs("div", Object.assign({ id: 'detaildetails' }, { children: [details.title ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'detailtitle' }, { children: details.title }), void 0)) : null, details.release_date ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'detailrelease' }, { children: `${
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                                details.release_date.split('-')[0]}` }), void 0)) : null, details.overview ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'detailoverview' }, { children: details.overview }), void 0)) : null, Math.round(details.vote_average / 2) ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'detailrating' }, { children: Math.round(details.vote_average / 2) ? (jsx_runtime_1.jsx(Stars_1.default, { rating: Math.round(details.vote_average / 2), reviews: details.vote_count }, void 0)) : ('No Rating') }), void 0)) : null, !watch ? null : (jsx_runtime_1.jsx("a", Object.assign({ id: 'providers', rel: 'noreferrer', href: `${watch.link}`, target: '_blank' }, { children: "Where to Watch" }), void 0)), providers ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'logos' }, { children: providers.map((logo, i) => {
                                    return (jsx_runtime_1.jsx("a", Object.assign({ href: logo[1], rel: 'noreferrer', target: '_blank' }, { children: jsx_runtime_1.jsx("div", Object.assign({ id: 'shinediv' }, { children: jsx_runtime_1.jsx("img", { id: 'logo', src: `https://image.tmdb.org/t/p/w500/${logo[0]}`, alt: 'thumbnail for current provider' }, `logoid - ${i}`) }), void 0) }), `logoid - ${logo.toString()} + ${i + 1} `));
                                }) }), void 0)) : null] }), void 0), recommendations && recommendations.length > 0 ? (jsx_runtime_1.jsxs("div", { children: [' ', recommendations.map((rec, i) => {
                                jsx_runtime_1.jsx("div", Object.assign({ id: 'likethis' }, { children: "More Like This" }), void 0);
                                if (i < 5)
                                    return (jsx_runtime_1.jsx(Recs_1.default, { id: rec.id, title: rec.title || rec.name, pic: `https://image.tmdb.org/t/p/w500/${rec.backdrop_path}` }, `recskey-${i}`));
                            })] }, void 0)) : (jsx_runtime_1.jsx("div", Object.assign({ id: 'likethis' }, { children: "No recommendations available" }), void 0))] }), void 0)) }, void 0) }), void 0));
};
exports.default = MovieDetails;
//# sourceMappingURL=MovieDetails.js.map