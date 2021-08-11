"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Stars = ({ rating, reviews, }) => {
    const [stars] = react_1.useState(Array(rating).fill(''));
    const [blankStars] = react_1.useState(Array(5 - rating).fill(''));
    return (jsx_runtime_1.jsx("div", Object.assign({ className: 'container' }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: 'stars' }, { children: [stars.map((curr, key) => (jsx_runtime_1.jsx("svg", Object.assign({ id: 'star', xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 24 24' }, { children: jsx_runtime_1.jsx("path", { id: 'blackstars', d: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z', fill: 'black' }, void 0) }), `starkey-${key}`))), blankStars.map((curr, i) => (jsx_runtime_1.jsx("svg", Object.assign({ id: 'star', width: '18', height: '18', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', viewBox: '0 0 24 24' }, { children: jsx_runtime_1.jsx("path", { id: 'blankstars', d: 'M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z', fill: '#212529;' }, void 0) }), `blankstarskey-${i}`))), jsx_runtime_1.jsxs("span", Object.assign({ id: 'reviews' }, { children: [" ", reviews] }), void 0), " reviews"] }), void 0) }), void 0));
};
exports.default = Stars;
//# sourceMappingURL=Stars.js.map