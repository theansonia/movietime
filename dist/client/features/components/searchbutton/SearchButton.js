"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const handleKeyPress_1 = require("../../../utils/handleKeyPress");
const useHandleSearchClick_1 = require("../../../hooks/useHandleSearchClick");
const SearchButton = () => {
    // const [whereTo, setWhereTo] = useState('home');
    const category = react_redux_1.useSelector((state) => state.category.value);
    const handleClick = useHandleSearchClick_1.useHandleSearchClick();
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: category === null ? (jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/home', style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            } }, { children: jsx_runtime_1.jsx("div", Object.assign({ id: 'somediv', style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, onClick: handleClick, onKeyPress: (e) => handleKeyPress_1.handleKeyPress(e), role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsxs("svg", Object.assign({ id: 'searchbtn', width: '104', height: '104', viewBox: '0 0 104 104', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: [jsx_runtime_1.jsxs("g", Object.assign({ filter: 'url(#filter0_d)' }, { children: [jsx_runtime_1.jsx("path", { id: 'searchpath', d: 'M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z', fill: '#343A40' }, void 0), jsx_runtime_1.jsx("path", { id: 'searchpath', d: 'M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z', fill: 'url(#paint0_linear)' }, void 0)] }), void 0), jsx_runtime_1.jsx("path", { d: 'M61.7632 42.7662C61.7632 49.4941 55.7091 55.0325 48.1316 55.0325C40.5541 55.0325 34.5 49.4941 34.5 42.7662C34.5 36.0384 40.5541 30.5 48.1316 30.5C55.7091 30.5 61.7632 36.0384 61.7632 42.7662Z', stroke: '#F8F9FA' }, void 0), jsx_runtime_1.jsx("line", { y1: '-0.5', x2: '19.0436', y2: '-0.5', transform: 'matrix(0.671291 0.741194 -0.804176 0.594391 57.2162 51.885)', stroke: '#F8F9FA' }, void 0), jsx_runtime_1.jsxs("defs", { children: [jsx_runtime_1.jsxs("filter", Object.assign({ id: 'filter0_d', x: '0', y: '0', width: '104', height: '104', filterUnits: 'userSpaceOnUse', colorInterpolationFilters: 'sRGB' }, { children: [jsx_runtime_1.jsx("feFlood", { floodOpacity: '0', result: 'BackgroundImageFix' }, void 0), jsx_runtime_1.jsx("feColorMatrix", { in: 'SourceAlpha', type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' }, void 0), jsx_runtime_1.jsx("feOffset", { dy: '4' }, void 0), jsx_runtime_1.jsx("feGaussianBlur", { stdDeviation: '2' }, void 0), jsx_runtime_1.jsx("feColorMatrix", { type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' }, void 0), jsx_runtime_1.jsx("feBlend", { mode: 'normal', in2: 'BackgroundImageFix', result: 'effect1_dropShadow' }, void 0), jsx_runtime_1.jsx("feBlend", { mode: 'normal', in: 'SourceGraphic', in2: 'effect1_dropShadow', result: 'shape' }, void 0)] }), void 0), jsx_runtime_1.jsxs("linearGradient", Object.assign({ id: 'paint0_linear', x1: '52', y1: '0', x2: '52', y2: '96', gradientUnits: 'userSpaceOnUse' }, { children: [jsx_runtime_1.jsx("stop", { stopColor: '#6C757D' }, void 0), jsx_runtime_1.jsx("stop", { offset: '1', stopColor: 'white', stopOpacity: '0' }, void 0)] }), void 0)] }, void 0)] }), void 0) }), void 0) }), void 0)) : (jsx_runtime_1.jsx("div", Object.assign({ onClick: handleClick, style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }, onKeyPress: (e) => handleKeyPress_1.handleKeyPress(e), role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsxs("svg", Object.assign({ id: 'searchbtn', width: '104', height: '104', viewBox: '0 0 104 104', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: [jsx_runtime_1.jsxs("g", Object.assign({ filter: 'url(#filter0_d)' }, { children: [jsx_runtime_1.jsx("path", { id: 'searchpath', d: 'M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z', fill: '#343A40' }, void 0), jsx_runtime_1.jsx("path", { 
                                // id="searchpath"
                                d: 'M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z', fill: 'url(#paint0_linear)' }, void 0)] }), void 0), jsx_runtime_1.jsx("path", { d: 'M61.7632 42.7662C61.7632 49.4941 55.7091 55.0325 48.1316 55.0325C40.5541 55.0325 34.5 49.4941 34.5 42.7662C34.5 36.0384 40.5541 30.5 48.1316 30.5C55.7091 30.5 61.7632 36.0384 61.7632 42.7662Z', stroke: '#F8F9FA' }, void 0), jsx_runtime_1.jsx("line", { y1: '-0.5', x2: '19.0436', y2: '-0.5', transform: 'matrix(0.671291 0.741194 -0.804176 0.594391 57.2162 51.885)', stroke: '#F8F9FA' }, void 0), jsx_runtime_1.jsxs("defs", { children: [jsx_runtime_1.jsxs("filter", Object.assign({ id: 'filter0_d', x: '0', y: '0', width: '104', height: '104', filterUnits: 'userSpaceOnUse', colorInterpolationFilters: 'sRGB' }, { children: [jsx_runtime_1.jsx("feFlood", { floodOpacity: '0', result: 'BackgroundImageFix' }, void 0), jsx_runtime_1.jsx("feColorMatrix", { in: 'SourceAlpha', type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' }, void 0), jsx_runtime_1.jsx("feOffset", { dy: '4' }, void 0), jsx_runtime_1.jsx("feGaussianBlur", { stdDeviation: '2' }, void 0), jsx_runtime_1.jsx("feColorMatrix", { type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' }, void 0), jsx_runtime_1.jsx("feBlend", { mode: 'normal', in2: 'BackgroundImageFix', result: 'effect1_dropShadow' }, void 0), jsx_runtime_1.jsx("feBlend", { mode: 'normal', in: 'SourceGraphic', in2: 'effect1_dropShadow', result: 'shape' }, void 0)] }), void 0), jsx_runtime_1.jsxs("linearGradient", Object.assign({ id: 'paint0_linear', x1: '52', y1: '0', x2: '52', y2: '96', gradientUnits: 'userSpaceOnUse' }, { children: [jsx_runtime_1.jsx("stop", { stopColor: '#6C757D' }, void 0), jsx_runtime_1.jsx("stop", { offset: '1', stopColor: 'white', stopOpacity: '0' }, void 0)] }), void 0)] }, void 0)] }), void 0) }), void 0)) }, void 0));
};
exports.default = SearchButton;
//# sourceMappingURL=SearchButton.js.map