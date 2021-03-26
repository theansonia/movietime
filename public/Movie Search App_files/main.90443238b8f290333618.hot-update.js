webpackHotUpdate("main",{

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
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  height: 100%;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 1rem;\n  min-height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n\n.app {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.moviecontainer {\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s;\n  flex: 1 1 auto;\n  min-height: 100vh;\n  grid-gap: 1em;\n  gap: 1em;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n  overflow: hidden;\n  width: 100%;\n}\n\n#navbar {\n  background-color: #212529;\n  height: 5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1.5em;\n  z-index: 14;\n}\n\n#trending {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  width: 100%;\n}\n\n#option {\n  margin: 3em;\n  font-size: 2em;\n  color: #F8F9FA;\n  text-decoration: none;\n}\n#option:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n#categories {\n  height: 5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  margin-left: 5em;\n}\n\n#searchbar {\n  flex: 1 0 auto;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  background-color: #212529;\n  margin-bottom: 1em;\n}\n#searchbar:after, #searchbar :before {\n  box-sizing: border-box;\n}\n\ninput {\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  display: inline-block;\n  text-align: start;\n  -webkit-appearance: auto;\n          appearance: auto;\n  cursor: text;\n}\n\n::placeholder {\n  color: #CED4DA;\n  width: 95%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#search {\n  position: relative;\n  color: #F8F9FA;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  height: 3rem;\n  padding: 0 26px;\n  background-color: #212529;\n  height: 4.125rem;\n  line-height: 1.5rem;\n  border: none;\n}\n#search:after, #search :before {\n  box-sizing: border-box;\n  border-bottom: 2px solid #F8F9FA;\n}\n\n#movies {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n}\n\nimg {\n  width: 16em;\n  margin-left: 1em;\n  margin-right: 2em;\n}\n\n#poster {\n  align-items: center;\n  justify-content: center;\n}\n\n#details {\n  display: flex;\n  font-size: 1.05em;\n  flex-direction: column;\n  padding-right: 0.65em;\n  margin: 0;\n  justify-content: space-evenly;\n  max-height: 600px;\n  padding-top: 0.5em;\n}\n\n#title {\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: 0.15em;\n}\n\n#release {\n  color: #9fa8b2;\n  margin-bottom: 0.25em;\n}\n\n#overview {\n  overflow: scroll;\n  margin-bottom: 0.15em;\n}\n\n#rating {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 0.25em;\n}\n\n#star {\n  width: 0.5em;\n  margin: 0;\n}\n\n.footer {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: none;\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  left: 35%;\n  width: 50%;\n  display: flex;\n  flex: 1 1;\n}\n\n#searchbtn {\n  width: 8em;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  transition: top 0.2s;\n  pointer-events: all;\n  z-index: 18;\n  overflow: visible;\n  -webkit-appearance: button;\n  display: inline-block;\n  text-align: center;\n  align-items: flex-start;\n}\n#searchbtn:hover {\n  cursor: pointer;\n}\n\n#homebtn {\n  width: 3em;\n  margin-right: 5em;\n  margin-left: 3em;\n}\n#homebtn:hover {\n  cursor: pointer;\n}\n\n#more {\n  color: #4cc9f0;\n  text-decoration: underline;\n}\n#more:hover {\n  cursor: pointer;\n}\n\n@media (min-width: 600px) {\n  .footer {\n    margin-top: 1rem;\n    padding: 1rem;\n    background-color: none;\n    position: fixed;\n    z-index: 1;\n    bottom: 0;\n    left: 35%;\n    width: 50%;\n    display: flex;\n    flex: 1 1;\n  }\n\n  #searchbtn {\n    width: 3em;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    position: relative;\n    transition: top 0.2s;\n    pointer-events: all;\n    z-index: 18;\n    overflow: visible;\n    -webkit-appearance: button;\n    display: inline-block;\n    text-align: center;\n    align-items: flex-start;\n  }\n  #searchbtn:hover {\n    cursor: pointer;\n  }\n}", "",{"version":3,"sources":["webpack://src/App.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');\n\n$font-stack: 'Source Sans Pro', sans-serif;\n$background: #F8F9FA;\n$primary-font: #212529;\n\n// #root {\n//   height: 100%;\n//   width: 200vh;\n//   overflow: scroll;\n\n// }\n\nhtml, body {\n  height:100%;\n  font-family: $font-stack;\n  font-size: 1rem;\n  // display: flex;\n  // margin: 0 auto;\n\n  min-height:100vh;\n  padding: 0;\n  margin: 0;\n\n}\n\n\n\n.app{\n  width: 100%;\n  margin: 0 auto;\n}\n\n.moviecontainer{\n  display: flex;\n  flex-direction: column;\n  // flex-flow: column nowrap;\n  transition: all .2s;\n  flex: 1 1 auto;\n  min-height: 100vh;\n  gap: 1em;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n  overflow: hidden;\n  // padding-left: 1rem;\n  // padding-right: 1rem;\n  width: 100%;\n\n}\n\n#navbar{\n  background-color:#212529;\n  // position: fixed;\n  height: 5em;\n  // width: 100%;\n  display: flex; \n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1.5em;\n  z-index: 14;\n  \n}\n\n#trending{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: center;\n  width: 100%;\n  // margin-left: 1em;\n  // margin-right: 1em;\n  \n\n}\n\n\n#option{\n  margin: 3em;\n  font-size: 2em;\n  color: #F8F9FA;\n  text-decoration: none;\n\n    &:hover{\n      text-decoration: underline;\n      cursor: pointer;\n      font-weight: 600;\n    }\n}\n\n#categories{\n  height: 5em;\n  display: flex; \n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  margin-left: 5em;\n}\n\n#searchbar{\n  flex: 1 0 auto;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  background-color: #212529;\n  margin-bottom: 1em;\n\n    &:after, :before{\n      box-sizing: border-box;\n    }\n    \n  \n}\n\ninput{\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  display: inline-block;\n  text-align: start;\n  appearance: auto;\n  cursor: text;\n}\n\n::placeholder{\n  color: #CED4DA;\n  width: 95%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  // padding-left: 2em;\n}\n\n\n#search {\n  position: relative;\n  color: #F8F9FA;\n  width: 100%;\n  font-size: 1rem;\n  -webkit-text-size-adjust: 100%;\n  height: 3rem;\n  padding: 0 26px;\n  background-color: #212529;\n  height: 4.125rem;\n  line-height: 1.5rem;\n  border: none;\n \n\n    &:after, :before{\n    box-sizing: border-box;\n    border-bottom: 2px solid #F8F9FA;\n  }\n}\n\n#movies{\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n\n}\n\nimg{\n  width: 16em;\n  margin-left: 1em;\n  margin-right: 2em;\n\n}\n\n#poster{\n  align-items: center;\n  justify-content: center;\n}\n\n#details{\n  display: flex;\n  font-size: 1.05em;\n  flex-direction: column;\n  padding-right: .65em;\n  margin: 0;\n  justify-content: space-evenly;\n  max-height: 600px;\n  padding-top: .5em;\n}\n\n#title{\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: .15em;\n}\n\n#release{\n  color: darken(#ADB5BD, 5%);\n  margin-bottom: .25em;\n\n\n}\n\n#overview{\n  overflow: scroll;\n  margin-bottom: .15em;\n\n}\n\n#rating{\n  display: flex;\n  justify-content: flex-start;\n  margin-top: .25em;\n}\n\n#star{\n  width: .5em;\n  margin: 0;\n}\n\n\n.footer{\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: none;\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  left: 35%;\n  width: 50%;\n  display: flex;\n  flex: 1;\n}\n\n#searchbtn{\n  width: 8em;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  transition: top .2s;\n  pointer-events: all;\n  z-index: 18;\n  overflow: visible;\n  -webkit-appearance: button;\n  display: inline-block;\n  text-align: center;\n  align-items: flex-start;\n\n  &:hover{\n    cursor: pointer;\n  }\n}\n\n#homebtn{\n  width: 3em;\n  margin-right: 5em;\n  margin-left: 3em;\n  &:hover{\n    cursor: pointer;\n  }\n}\n\n#more{\n  color: #4cc9f0;\n  text-decoration: underline;\n  &:hover{\n    cursor: pointer;\n  }\n}\n\n\n@media (min-width: 600px) {\n  .footer{\n    margin-top: 1rem;\n    padding: 1rem;\n    background-color: none;\n    position: fixed;\n    z-index: 1;\n    bottom: 0;\n    left: 35%;\n    width: 50%;\n    display: flex;\n    flex: 1;\n  }\n  \n  #searchbtn{\n    width: 3em;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    position: relative;\n    transition: top .2s;\n    pointer-events: all;\n    z-index: 18;\n    overflow: visible;\n    -webkit-appearance: button;\n    display: inline-block;\n    text-align: center;\n    align-items: flex-start;\n  \n    &:hover{\n      cursor: pointer;\n    }\n  }\n  \n}\n\n\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.90443238b8f290333618.hot-update.js.map