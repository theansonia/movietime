"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const Recs = ({ title, pic, id, }) => {
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
                    pathname: `/moviedetails/${title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                    state: { id: id, title: title },
                } }, { children: title ? jsx_runtime_1.jsx("div", Object.assign({ id: 'rectitle' }, { children: title }), void 0) : null }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ style: { textDecoration: 'none' }, to: {
                    pathname: `/moviedetails/${title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                    state: { id: id, title: title },
                } }, { children: pic !== 'https://image.tmdb.org/t/p/w500/null' ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'recposterdiv', 
                    // onClick={topFunction}
                    // onKeyDown={handleKey}
                    role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsx("img", { id: 'recposter', style: { borderRadius: '30px' }, src: pic, alt: `Movie poster for ${query}` }, void 0) }), void 0)) : (jsx_runtime_1.jsx("div", Object.assign({ id: 'recposterdiv' }, { children: jsx_runtime_1.jsx("img", { id: 'recposter', style: { borderRadius: '30px' }, src: 'https://image.tmdb.org/t/p/w500///tfNuePdHrP9fp6K2VTJwHKKJf8C.jpg', alt: 'back up movie poster cinema pardiso' }, void 0) }), void 0)) }), void 0)] }), void 0));
};
exports.default = Recs;
//# sourceMappingURL=Recs.js.map