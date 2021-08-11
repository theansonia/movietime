"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
require("./styles/App.scss");
// import reportWebVitals from './reportWebVitals';
const store_1 = __importDefault(require("./store"));
const App_1 = __importDefault(require("./App"));
const ScrollToTop_1 = require("./hooks/ScrollToTop");
react_dom_1.default.render(jsx_runtime_1.jsx(react_redux_1.Provider, Object.assign({ store: store_1.default }, { children: jsx_runtime_1.jsxs(react_router_dom_1.BrowserRouter, { children: [jsx_runtime_1.jsx(ScrollToTop_1.ScrollToTop, {}, void 0), jsx_runtime_1.jsx(App_1.default, {}, void 0)] }, void 0) }), void 0), document.getElementById('root'));
//# sourceMappingURL=index.js.map