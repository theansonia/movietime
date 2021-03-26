(this["webpackJsonpmovie-search-app"] = this["webpackJsonpmovie-search-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  margin: 0px;\n  min-height: 100%;\n  width: 100%;\n}\n\n.app {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.moviecontainer {\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s;\n  flex: 1 1 auto;\n  min-height: 100vh;\n  grid-gap: 1em;\n  gap: 1em;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n  overflow: hidden;\n  width: 100%;\n}\n\n#navbar {\n  background-color: #212529;\n  height: 5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1.5em;\n  z-index: 14;\n}\n\n#trending {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  width: 100%;\n}\n\n#option {\n  margin: 3em;\n  font-size: 2em;\n  color: #F8F9FA;\n  text-decoration: none;\n}\n#option:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n#categories {\n  height: 5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  margin-left: 5em;\n}\n\n#searchbar {\n  flex: 1 0 auto;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  background-color: #212529;\n  margin-bottom: 1em;\n}\n#searchbar:after, #searchbar :before {\n  box-sizing: border-box;\n}\n\ninput {\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  display: inline-block;\n  text-align: start;\n  -webkit-appearance: auto;\n          appearance: auto;\n  cursor: text;\n}\n\n::placeholder {\n  color: #CED4DA;\n  width: 95%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#search {\n  position: relative;\n  color: #F8F9FA;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  height: 3rem;\n  padding: 0 26px;\n  background-color: #212529;\n  height: 4.125rem;\n  line-height: 1.5rem;\n  border: none;\n}\n#search:after, #search :before {\n  box-sizing: border-box;\n  border-bottom: 2px solid #F8F9FA;\n}\n\n#movies {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n}\n\nimg {\n  width: 16em;\n  margin-left: 1em;\n  margin-right: 2em;\n}\n\n#poster {\n  align-items: center;\n  justify-content: center;\n}\n\n#details {\n  display: flex;\n  font-size: 1.05em;\n  flex-direction: column;\n  padding-right: 0.65em;\n  margin: 0;\n  justify-content: space-evenly;\n  max-height: 600px;\n  padding-top: 0.5em;\n}\n\n#title {\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: 0.15em;\n}\n\n#release {\n  color: #9fa8b2;\n  margin-bottom: 0.25em;\n}\n\n#overview {\n  overflow: scroll;\n  margin-bottom: 0.15em;\n}\n\n#rating {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 0.25em;\n}\n\n#star {\n  width: 0.5em;\n  margin: 0;\n}\n\n.footer {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: none;\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  left: 35%;\n  width: 50%;\n  display: flex;\n  flex: 1 1;\n}\n\n#searchbtn {\n  width: 8em;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  transition: top 0.2s;\n  pointer-events: all;\n  z-index: 18;\n  overflow: visible;\n  -webkit-appearance: button;\n  display: inline-block;\n  text-align: center;\n  align-items: flex-start;\n}\n#searchbtn:hover {\n  cursor: pointer;\n}\n\n#homebtn {\n  width: 3em;\n  margin-right: 5em;\n  margin-left: 3em;\n}\n#homebtn:hover {\n  cursor: pointer;\n}\n\n#more {\n  color: #4cc9f0;\n  text-decoration: underline;\n}\n#more:hover {\n  cursor: pointer;\n}\n\n@media (min-width: 600px) {\n  .footer {\n    margin-top: 1rem;\n    padding: 1rem;\n    background-color: none;\n    position: fixed;\n    z-index: 1;\n    bottom: 0;\n    left: 35%;\n    width: 50%;\n    display: flex;\n    flex: 1 1;\n  }\n\n  #searchbtn {\n    width: 3em;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    position: relative;\n    transition: top 0.2s;\n    pointer-events: all;\n    z-index: 18;\n    overflow: visible;\n    -webkit-appearance: button;\n    display: inline-block;\n    text-align: center;\n    align-items: flex-start;\n  }\n  #searchbtn:hover {\n    cursor: pointer;\n  }\n}", "",{"version":3,"sources":["webpack://src/App.scss"],"names":[],"mappings":"AAaA;EACE,YAAA;EAOA,aAAA;EAAc,sBAAA;EAAuB,uBAAA;EACrC,iBAAA;EACA,UAAA;EACA,SAAA;AAfF;;AAmBA;EACE,WAAA;EACC,YAAA;EACA,WAAA;AAhBH;;AAmBA;EACE,WAAA;EACA,gBAAA;EACA,WAAA;AAhBF;;AAmBA;EACE,WAAA;EACA,cAAA;AAhBF;;AAmBA;EACE,aAAA;EACA,sBAAA;EAEA,oBAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EAAA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EAGA,WAAA;AAnBF;;AAuBA;EACE,yBAAA;EAEA,WAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;AAtBF;;AA0BA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,WAAA;AAvBF;;AA+BA;EACE,WAAA;EACA,cAAA;EACA,cAAA;EACA,qBAAA;AA5BF;AA8BI;EACE,0BAAA;EACA,eAAA;EACA,gBAAA;AA5BN;;AAgCA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,gBAAA;AA7BF;;AAgCA;EACE,cAAA;EACA,WAAA;EACA,eAAA;EACA,8BAAA;EACA,yBAAA;EACA,kBAAA;AA7BF;AA+BI;EACE,sBAAA;AA7BN;;AAmCA;EACE,oBAAA;EACA,sBAAA;EACA,oBAAA;EACA,qBAAA;EACA,iBAAA;EACA,wBAAA;UAAA,gBAAA;EACA,YAAA;AAhCF;;AAmCA;EACE,cAAA;EACA,UAAA;EACA,gBAAA;EACA,uBAAA;AAhCF;;AAqCA;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;AAlCF;AAqCI;EACA,sBAAA;EACA,gCAAA;AAnCJ;;AAuCA;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;AApCF;;AAwCA;EACE,WAAA;EACA,gBAAA;EACA,iBAAA;AArCF;;AAyCA;EACE,mBAAA;EACA,uBAAA;AAtCF;;AAyCA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,qBAAA;EACA,SAAA;EACA,6BAAA;EACA,iBAAA;EACA,kBAAA;AAtCF;;AAyCA;EACE,cAAA;EACA,iBAAA;EACA,qBAAA;AAtCF;;AAyCA;EACE,cAAA;EACA,qBAAA;AAtCF;;AA2CA;EACE,gBAAA;EACA,qBAAA;AAxCF;;AA4CA;EACE,aAAA;EACA,2BAAA;EACA,kBAAA;AAzCF;;AA4CA;EACE,YAAA;EACA,SAAA;AAzCF;;AA6CA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,UAAA;EACA,SAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,SAAA;AA1CF;;AA6CA;EACE,UAAA;EACA,4BAAA;EACA,wBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,0BAAA;EACA,qBAAA;EACA,kBAAA;EACA,uBAAA;AA1CF;AA4CE;EACE,eAAA;AA1CJ;;AA8CA;EACE,UAAA;EACA,iBAAA;EACA,gBAAA;AA3CF;AA4CE;EACE,eAAA;AA1CJ;;AA8CA;EACE,cAAA;EACA,0BAAA;AA3CF;AA4CE;EACE,eAAA;AA1CJ;;AA+CA;EACE;IACE,gBAAA;IACA,aAAA;IACA,sBAAA;IACA,eAAA;IACA,UAAA;IACA,SAAA;IACA,SAAA;IACA,UAAA;IACA,aAAA;IACA,SAAA;EA5CF;;EA+CA;IACE,UAAA;IACA,4BAAA;IACA,wBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,WAAA;IACA,iBAAA;IACA,0BAAA;IACA,qBAAA;IACA,kBAAA;IACA,uBAAA;EA5CF;EA8CE;IACE,eAAA;EA5CJ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');\n\n$font-stack: 'Source Sans Pro', sans-serif;\n$background: #F8F9FA;\n$primary-font: #212529;\n\n// #root {\n//   height: 100%;\n//   width: 200vh;\n//   overflow: scroll;\n\n// }\n\nhtml, body {\n  height:100%;\n  // width:100%;\n  // padding:0;\n  // font-family: $font-stack;\n  // font-size: 1rem;\n  // display: flex;\n  // margin: 0 auto;\n  display:flex; flex-direction:column; justify-content:center;\n  min-height:100vh;\n  padding: 0;\n  margin: 0;\n\n}\n\nhtml{\n  margin: 0px;\n   height: 100%;\n   width: 100%;\n}\n\nbody {\n  margin: 0px;\n  min-height: 100%;\n  width: 100%;\n}\n\n.app{\n  width: 100%;\n  margin: 0 auto;\n}\n\n.moviecontainer{\n  display: flex;\n  flex-direction: column;\n  // flex-flow: column nowrap;\n  transition: all .2s;\n  flex: 1 1 auto;\n  min-height: 100vh;\n  gap: 1em;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n  overflow: hidden;\n  // padding-left: 1rem;\n  // padding-right: 1rem;\n  width: 100%;\n\n}\n\n#navbar{\n  background-color:#212529;\n  // position: fixed;\n  height: 5em;\n  // width: 100%;\n  display: flex; \n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1.5em;\n  z-index: 14;\n  \n}\n\n#trending{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  width: 100%;\n  // margin-left: 1em;\n  // margin-right: 1em;\n  \n\n}\n\n\n#option{\n  margin: 3em;\n  font-size: 2em;\n  color: #F8F9FA;\n  text-decoration: none;\n\n    &:hover{\n      text-decoration: underline;\n      cursor: pointer;\n      font-weight: 600;\n    }\n}\n\n#categories{\n  height: 5em;\n  display: flex; \n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  margin-left: 5em;\n}\n\n#searchbar{\n  flex: 1 0 auto;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  background-color: #212529;\n  margin-bottom: 1em;\n\n    &:after, :before{\n      box-sizing: border-box;\n    }\n    \n  \n}\n\ninput{\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  display: inline-block;\n  text-align: start;\n  appearance: auto;\n  cursor: text;\n}\n\n::placeholder{\n  color: #CED4DA;\n  width: 95%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  // padding-left: 2em;\n}\n\n\n#search {\n  position: relative;\n  color: #F8F9FA;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  height: 3rem;\n  padding: 0 26px;\n  background-color: #212529;\n  height: 4.125rem;\n  line-height: 1.5rem;\n  border: none;\n \n\n    &:after, :before{\n    box-sizing: border-box;\n    border-bottom: 2px solid #F8F9FA;\n  }\n}\n\n#movies{\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n\n}\n\nimg{\n  width: 16em;\n  margin-left: 1em;\n  margin-right: 2em;\n\n}\n\n#poster{\n  align-items: center;\n  justify-content: center;\n}\n\n#details{\n  display: flex;\n  font-size: 1.05em;\n  flex-direction: column;\n  padding-right: .65em;\n  margin: 0;\n  justify-content: space-evenly;\n  max-height: 600px;\n  padding-top: .5em;\n}\n\n#title{\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: .15em;\n}\n\n#release{\n  color: darken(#ADB5BD, 5%);\n  margin-bottom: .25em;\n\n\n}\n\n#overview{\n  overflow: scroll;\n  margin-bottom: .15em;\n\n}\n\n#rating{\n  display: flex;\n  justify-content: flex-start;\n  margin-top: .25em;\n}\n\n#star{\n  width: .5em;\n  margin: 0;\n}\n\n\n.footer{\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: none;\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  left: 35%;\n  width: 50%;\n  display: flex;\n  flex: 1;\n}\n\n#searchbtn{\n  width: 8em;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  transition: top .2s;\n  pointer-events: all;\n  z-index: 18;\n  overflow: visible;\n  -webkit-appearance: button;\n  display: inline-block;\n  text-align: center;\n  align-items: flex-start;\n\n  &:hover{\n    cursor: pointer;\n  }\n}\n\n#homebtn{\n  width: 3em;\n  margin-right: 5em;\n  margin-left: 3em;\n  &:hover{\n    cursor: pointer;\n  }\n}\n\n#more{\n  color: #4cc9f0;\n  text-decoration: underline;\n  &:hover{\n    cursor: pointer;\n  }\n}\n\n\n@media (min-width: 600px) {\n  .footer{\n    margin-top: 1rem;\n    padding: 1rem;\n    background-color: none;\n    position: fixed;\n    z-index: 1;\n    bottom: 0;\n    left: 35%;\n    width: 50%;\n    display: flex;\n    flex: 1;\n  }\n  \n  #searchbtn{\n    width: 3em;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    position: relative;\n    transition: top .2s;\n    pointer-events: all;\n    z-index: 18;\n    overflow: visible;\n    -webkit-appearance: button;\n    display: inline-block;\n    text-align: center;\n    align-items: flex-start;\n  \n    &:hover{\n      cursor: pointer;\n    }\n  }\n  \n}\n\n\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Search */ "./src/components/Search.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_tvSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tvSearch */ "./src/components/tvSearch.js");
/* harmony import */ var _components_TrendingSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TrendingSearch */ "./src/components/TrendingSearch.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();









function App() {
  _s();

  const [searchStatus, updateSearchStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [category, updateCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    id: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      id: "navbar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          id: "homebtn",
          onClick: () => {
            updateSearchStatus(true);
            updateCategory(null);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            id: "homebtn",
            src: "../home.png",
            alt: "home button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 110
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 27
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        id: "categories",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: `/movies`,
          id: "option",
          onClick: () => {
            updateCategory('Movie');
            updateSearchStatus(true);
          },
          children: "Film"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: `/shows`,
          id: "option",
          onClick: () => {
            updateCategory('TV');
            updateSearchStatus(true);
          },
          children: "TV"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/movies",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
          category: category,
          searchStatus: searchStatus
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/shows",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_tvSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
          category: category,
          searchStatus: searchStatus
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_TrendingSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
          category: category,
          searchStatus: searchStatus
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          alt: "search button",
          id: "searchbtn",
          onClick: () => {
            updateSearchStatus(true);
            updateCategory(null);
          },
          src: "../Search.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, this);
}

_s(App, "dQgiUvMRt+/LD34tHu785nQ+LWQ=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stars */ "./src/components/Stars.js");
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-truncate */ "./node_modules/react-truncate/lib/Truncate.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/components/Movie.js",
    _s = __webpack_require__.$Refresh$.signature();






const Movie = ({
  id,
  title,
  poster,
  overview,
  release,
  rating,
  reviews
}) => {
  _s();

  const [expanded, toggleExpand] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    id: "movies",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      id: "poster",
      children: poster !== 'https://image.tmdb.org/t/p/w500/null' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        id: "poster",
        src: poster,
        alt: `Movie poster for ${title}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 60
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        id: "poster",
        src: "https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
        alt: "back up movie poster cinema pardiso"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 129
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      id: "details",
      children: [title ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 16
      }, undefined) : null, release ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "release",
        children: release
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 18
      }, undefined) : null, overview ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_truncate__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          overflow: `${expanded ? 'scroll' : 'hidden'}`,
          color: `${expanded ? '#6C757D' : 'inherit'}`
        },
        lines: expanded ? 30 : 9,
        ellipsis: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          children: ["...", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            id: "more",
            onClick: e => {
              toggleExpand(!expanded);
            },
            children: "click to scroll for more"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 175
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 165
        }, undefined),
        children: overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }, undefined) : null, rating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "rating",
        children: rating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Stars__WEBPACK_IMPORTED_MODULE_1__["default"], {
          rating: rating,
          reviews: reviews
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 44
        }, undefined) : 'No Rating'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_s(Movie, "+//wCax+xzaw+8RSP5X+hnFCOKo=");

_c = Movie;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c;

__webpack_require__.$Refresh$.register(_c, "Movie");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_MovieContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/MovieContainer */ "./src/containers/MovieContainer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/components/Search.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */

 // import { Route, Switch, Link } from "react-router-dom";
// import api_key from '../apiKey';



const Search = ({
  category,
  searchStatus
}) => {
  _s();

  const [title, updateTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [movieResults, updateMovieResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // eslint-disable-next-line no-unused-vars

  const [tvResults, updateTvResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const api_key = process.env.apiKey;

  if (category === null) category = 'a Movie or TV';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (title.length === 0 || category === 'TV') {
      updateMovieResults([]);
      return;
    }

    ;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL).then(res => res.json()).then(data => updateMovieResults(data.results)).catch(error => console.log(error));
  }, [title, category]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (title.length > 0) return;
    if (title.length === 0) updateMovieResults([]);
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;
    fetch(URL).then(res => res.json()).then(data => updateMovieResults(data.results)).catch(error => console.log(error));
  }, [title]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "searchbar",
      children: searchStatus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "search",
          list: "movie",
          placeholder: `Search for a Movie`,
          autoFocus: true,
          onChange: e => updateTitle(e.target.value),
          value: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), !title ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "trending",
      children: ["Featured ", category, "s"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "trending",
      children: "Results"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 65
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_containers_MovieContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movieResults: movieResults,
      tvResults: tvResults,
      category: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(Search, "gE1UYqiu8oiNdRZe5hepKRdZ9ZQ=");

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

__webpack_require__.$Refresh$.register(_c, "Search");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Show.js":
/*!********************************!*\
  !*** ./src/components/Show.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-truncate */ "./node_modules/react-truncate/lib/Truncate.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stars */ "./src/components/Stars.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/components/Show.js",
    _s = __webpack_require__.$Refresh$.signature();



 // import { Route, Switch, Link, Redirect } from "react-router-dom";
// import Details from './Details';




const Show = props => {
  _s();

  const [expanded, toggleExpand] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Either link to details for one target movie or pop up modal

  const {
    name,
    poster,
    overview,
    release,
    rating,
    reviews
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      id: "movies",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "poster",
        children: poster !== 'https://image.tmdb.org/t/p/w500/null' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          id: "poster",
          src: poster,
          alt: `Movie poster for ${name}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 64
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          id: "poster",
          src: "https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
          alt: "back up movie poster cinema pardiso"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 132
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "details",
        children: [name ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          id: "title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 19
        }, undefined) : null, release ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          id: "release",
          children: release
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 22
        }, undefined) : null, overview ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_truncate__WEBPACK_IMPORTED_MODULE_1__["default"], {
          style: {
            overflow: `${expanded ? 'scroll' : 'hidden'}`,
            color: `${expanded ? '#ADB5BD' : 'inherit'}`
          },
          lines: expanded ? 20 : 9,
          ellipsis: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            children: ["...", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              to: {
                pathname: `/details/`,
                state: props
              },
              id: "more",
              onClick: e => {
                toggleExpand(!expanded);
              },
              children: "click to scroll for more"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 179
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 169
          }, undefined),
          children: overview
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 22
        }, undefined) : null, rating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          id: "rating",
          children: rating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Stars__WEBPACK_IMPORTED_MODULE_2__["default"], {
            rating: rating,
            reviews: reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 48
          }, undefined) : 'No Rating'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(Show, "+//wCax+xzaw+8RSP5X+hnFCOKo=");

_c = Show;
/* harmony default export */ __webpack_exports__["default"] = (Show);

var _c;

__webpack_require__.$Refresh$.register(_c, "Show");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Stars.js":
/*!*********************************!*\
  !*** ./src/components/Stars.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/components/Stars.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable no-unused-vars */



const Stars = ({
  rating,
  reviews
}) => {
  _s();

  const [stars, updateStars] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Array(rating).fill(''));
  const [blankStars, updateBlankStars] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Array(5 - rating).fill(''));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "stars",
      children: [stars.map((curr, key) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        id: "star",
        alt: "filled review star",
        src: "https://img.icons8.com/ios-filled/26/000000/star--v1.png"
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)), blankStars.map((curr, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        id: "star",
        alt: "unfilled review star",
        src: "https://img.icons8.com/ios/26/000000/star--v1.png"
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: [" ", reviews]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), " reviews"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }, undefined);
};

_s(Stars, "CBE6X9aXpCYpJWko7fkzvxjhb00=");

_c = Stars;
/* harmony default export */ __webpack_exports__["default"] = (Stars);

var _c;

__webpack_require__.$Refresh$.register(_c, "Stars");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TrendingSearch.js":
/*!******************************************!*\
  !*** ./src/components/TrendingSearch.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_MovieContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/MovieContainer */ "./src/containers/MovieContainer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/components/TrendingSearch.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */

 // import api_key from '../apiKey';



const TrendingSearch = ({
  category,
  searchStatus
}) => {
  _s();

  const [title, updateTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [movieResults, updateMovieResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // eslint-disable-next-line no-unused-vars

  const [tvResults, updateTvResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  if (category === null) category = 'a Movie or TV'; // const api_key = process.env.apiKey;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (title.length === 0) {
      const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=20dd97d63497c0f0a8adb9bd9c547033`;
      fetch(URL).then(res => res.json()).then(data => updateMovieResults(data.results)).catch(error => console.log(error));
    }
  }, [title]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (title.length === 0) {
      updateMovieResults([]);
      return;
    }

    ;
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL).then(res => res.json()).then(data => updateMovieResults(data.results)).catch(error => console.log(error));
  }, [title, category]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "searchbar",
      children: searchStatus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "search",
          list: "movie",
          placeholder: `Search for Movies and TV Shows`,
          autoFocus: true,
          onChange: e => updateTitle(e.target.value),
          value: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), !title ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "trending",
      children: "Featured Movies and TV Shows"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "trending",
      children: "Results"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 73
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_containers_MovieContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movieResults: movieResults,
      tvResults: tvResults,
      category: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(TrendingSearch, "gE1UYqiu8oiNdRZe5hepKRdZ9ZQ=");

_c = TrendingSearch;
/* harmony default export */ __webpack_exports__["default"] = (TrendingSearch);

var _c;

__webpack_require__.$Refresh$.register(_c, "TrendingSearch");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/tvSearch.js":
/*!************************************!*\
  !*** ./src/components/tvSearch.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_MovieContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/MovieContainer */ "./src/containers/MovieContainer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/components/tvSearch.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable react-hooks/exhaustive-deps */

 // import { Route, Switch, Link } from "react-router-dom";
// import api_key from '../apiKey';



const TvSearch = ({
  category,
  searchStatus
}) => {
  _s();

  const [title, updateTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // eslint-disable-next-line no-unused-vars

  const [movieResults, updateMovieResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [tvResults, updateTvResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const api_key = process.env.apiKey;

  if (category === null) category = 'a Movie or TV';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (title.length === 0 || category === 'Movie') {
      updateTvResults([]);
      return;
    }

    ;
    const URL = `https://api.themoviedb.org/3/search/tv?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL).then(res => res.json()).then(data => updateTvResults(data.results)).catch(error => console.log(error));
  }, [title, category]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (title.length > 0) return;
    if (title.length === 0) updateTvResults([]);
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;
    fetch(URL).then(res => res.json()).then(data => updateTvResults(data.results)).catch(error => console.log(error)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "searchbar",
      children: searchStatus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "search",
          list: "movie",
          placeholder: `Search for a TV Show`,
          autoFocus: true,
          onChange: e => updateTitle(e.target.value),
          value: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), !title ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "trending",
      children: "Featured TV Shows"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "trending",
      children: "Results"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 62
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_containers_MovieContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movieResults: movieResults,
      tvResults: tvResults,
      category: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

_s(TvSearch, "gE1UYqiu8oiNdRZe5hepKRdZ9ZQ=");

_c = TvSearch;
/* harmony default export */ __webpack_exports__["default"] = (TvSearch);

var _c;

__webpack_require__.$Refresh$.register(_c, "TvSearch");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/containers/MovieContainer.js":
/*!******************************************!*\
  !*** ./src/containers/MovieContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Movie */ "./src/components/Movie.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Show */ "./src/components/Show.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/containers/MovieContainer.js";







const MovieContainer = ({
  movieResults,
  tvResults,
  category
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "moviecontainer",
    children: [tvResults.length === 0 && movieResults.length === 0 ? null : movieResults.map(movie => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Movie__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: movie.id,
        title: movie.title || movie.name,
        poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        overview: movie.overview,
        release: movie.release_date === undefined ? null : movie.release_date.split('-')[0],
        rating: Math.round(movie.vote_average / 2),
        reviews: movie.vote_count
      }, movie.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }, undefined);
    }), tvResults.length === 0 && movieResults.length === 0 && category === 'TV' ? null : tvResults.map(show => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        path: `/details/:${show.id}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Show__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: `id-${show.id}`,
        name: show.name,
        poster: `https://image.tmdb.org/t/p/w500/${show.poster_path}`,
        overview: show.overview,
        release: show.release_date === undefined ? null : show.release_date.split('-')[0],
        rating: Math.round(show.vote_average / 2),
        reviews: show.vote_count
      }, `key-${show.id}`, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = MovieContainer;
/* harmony default export */ __webpack_exports__["default"] = (MovieContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "MovieContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ansonavellar/codesmith/jobhunt/takehomes/movie-search-app/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map