"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const TVRecs = ({ name, pic, id, }) => {
    const query = react_redux_1.useSelector((state) => state.query.value);
    return (jsx_runtime_1.jsxs("div", Object.assign({ id: 'recs' }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ style: {
                    textDecoration: 'none',
                    fontSize: '1em',
                    marginBottom: '.5em',
                    fontWeight: 'bold',
                    marginTop: '.5em',
                    color: 'inherit',
                    zIndex: 100000000000,
                }, to: {
                    pathname: `/tvdetails/${name.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                    state: { id: id, name: name },
                } }, { children: name ? jsx_runtime_1.jsx("div", Object.assign({ id: 'rectitle' }, { children: name }), void 0) : null }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ style: { textDecoration: 'none' }, to: {
                    pathname: `/tvdetails/${name.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                    state: { id: id, name: name },
                } }, { children: pic !== 'https://image.tmdb.org/t/p/w500/null' ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'recposterdiv' }, { children: jsx_runtime_1.jsx("img", { style: { borderRadius: '30px' }, id: 'recposter', src: pic, alt: `Movie poster for ${query}` }, void 0) }), void 0)) : (jsx_runtime_1.jsx("div", Object.assign({ id: 'recposterdiv' }, { children: jsx_runtime_1.jsx("img", { id: 'recposter', style: { borderRadius: '30px' }, src: 'https://image.tmdb.org/t/p/w500///lyTCCuymqg8egIaQXZAY5vE4MB0.jpg', alt: 'back up movie poster cinema pardiso' }, void 0) }), void 0)) }), void 0)] }), void 0));
};
exports.default = TVRecs;
//# sourceMappingURL=TVRecs.js.map