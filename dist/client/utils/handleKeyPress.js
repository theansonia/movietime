"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleKeyPress = void 0;
const handleKeyPress = (e) => {
    const target = e.target;
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        if (key === 'Tab')
            target.focus();
    });
    return target;
};
exports.handleKeyPress = handleKeyPress;
//# sourceMappingURL=handleKeyPress.js.map