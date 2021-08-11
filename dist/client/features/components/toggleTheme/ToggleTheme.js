"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const sun_svg_1 = __importDefault(require("./sun.svg"));
const moon_svg_1 = __importDefault(require("./moon.svg"));
const toggleThemeSlice_1 = require("./toggleThemeSlice");
const handleKeyPress_1 = require("../../../utils/handleKeyPress");
const ToggleTheme = () => {
    const dispatch = react_redux_1.useDispatch();
    const theme = react_redux_1.useSelector((state) => state.theme.value);
    const [icon, setIcon] = react_1.useState(sun_svg_1.default);
    const toggleTheme = () => {
        if (theme === 'lightmode') {
            dispatch(toggleThemeSlice_1.setLightTheme('darkmode'));
        }
        if (theme === 'darkmode') {
            dispatch(toggleThemeSlice_1.setLightTheme('lightmode'));
        }
    };
    return (jsx_runtime_1.jsxs("div", Object.assign({ className: 'toggle__box' }, { children: [jsx_runtime_1.jsx("span", { children: icon && (jsx_runtime_1.jsx("img", { src: theme === 'lightmode' ? sun_svg_1.default : moon_svg_1.default, alt: 'moon or sun symbol for theme', className: 'theme-icon' }, void 0)) }, void 0), jsx_runtime_1.jsxs("div", Object.assign({ className: 'toggle__btn' }, { children: [jsx_runtime_1.jsx("input", { type: 'checkbox', className: 'checkbox', onClick: toggleTheme, onKeyPress: (e) => handleKeyPress_1.handleKeyPress(e), role: 'button', tabIndex: 0 }, void 0), jsx_runtime_1.jsx("div", { className: 'circle' }, void 0), jsx_runtime_1.jsx("div", { className: 'layer' }, void 0)] }), void 0)] }), void 0));
};
exports.default = ToggleTheme;
//# sourceMappingURL=ToggleTheme.js.map