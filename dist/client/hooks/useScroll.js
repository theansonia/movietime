"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScroll = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const pagesSlice_1 = require("../appSlices/pagesSlice");
// import { RootState } from '../app/reducer';s
const useScroll = () => {
    const isLoading = react_redux_1.useSelector((state) => state.isLoading.value);
    const pages = react_redux_1.useSelector((state) => state.pages.value);
    const hasMore = react_redux_1.useSelector((state) => state.hasMore.value);
    const query = react_redux_1.useSelector((state) => state.query.value);
    const observer = react_1.useRef();
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        if (query.length < 1) {
            document.addEventListener('keydown', () => {
                const key = event.key; // const {key} = event; ES6+
                if (key === 'Backspace') {
                    dispatch(pagesSlice_1.updatePages(1));
                }
            });
        }
    }, [query]);
    const lastOne = react_1.useCallback((node) => {
        if (isLoading)
            return;
        if (observer.current)
            observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                dispatch(pagesSlice_1.updatePages(pages + 1));
            }
        });
        if (node)
            observer.current.observe(node);
    }, [isLoading, hasMore]);
    return lastOne;
};
exports.useScroll = useScroll;
//# sourceMappingURL=useScroll.js.map