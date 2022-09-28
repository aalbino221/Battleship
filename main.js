"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\r\n\r\n:root {\r\n  --lightgrey: rgb(240, 234, 234);\r\n}\r\n\r\n* { box-sizing: border-box;}\r\n\r\nhtml,body {height: 100%;}\r\n\r\nh1 {margin: 0;}\r\n\r\np {margin: 0;}\r\n\r\nbody {background-color: var(--lightgrey);\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: -1;\r\n}\r\n\r\n.main {width: 70vw;\r\n  margin-top: 5vh;\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;}\r\n\r\n.title {display: flex;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  margin-bottom: 5vh;}\r\n\r\n.inner {display: flex;\r\n  flex-grow: 1;}\r\n\r\n.inner>div {\r\n  padding: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-grow: 1;\r\n}\r\n\r\n.inner>div>div:nth-child(1), .inner>div>div:nth-child(3) {\r\n  height: 10%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.inner>div>div:nth-child(2) {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.board {\r\n  height: 400px;\r\n  width: 402px;\r\n  border: solid black 1px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: #D9D9D9;\r\n}\r\n\r\n.square {height: 10%;\r\n  width: 10%;\r\n  border: solid black 1px;}\r\n\r\n.board>.square:hover {cursor: pointer;\r\n  transform: scale(1.1);}\r\n\r\n[data-ship] {\r\n  background-color: rgba(0, 0, 0, 0.788);\r\n}\r\n\r\n[data-value = 'miss'] {\r\n  background-color: rgb(62, 36, 87);\r\n}\r\n\r\n[data-value = 'hit'] {\r\n  background-color: red;\r\n}\r\n\r\n.select-board>.square:hover {cursor: pointer;}\r\n\r\n.select-board {\r\n  border: 1px solid black;\r\n  height: 397px;\r\n  width: 402px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: #D9D9D9;\r\n  z-index: 1;\r\n}\r\n\r\n.block {background-color: #000000cb;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.select {width: fit-content;\r\n  height: fit-content;\r\n  padding: 3rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #D9D9D9;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.select>p:nth-child(2) {font-size: 1.4rem;}\r\n\r\n.select>p:nth-child(1) {font-size: 2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.axis>button, .winner>div>button {\r\n  font-size: 1.4rem;\r\n  color: white;\r\n  background-color: black;\r\n  border-radius: 4px;\r\n  padding: 0.6rem 1rem;\r\n}\r\n\r\n.axis>button:hover, .winner>div>button:hover {\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n#ship {border-bottom: 3px solid black;\r\n  font-weight: 900;}\r\n\r\n.select-board .square:hover {\r\n  background-color: green;\r\n}\r\n\r\n.winner {background-color: #000000cb;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.winner>div {width: fit-content;\r\n  height: fit-content;\r\n  padding: 3rem 6rem;\r\n  border-radius: 1rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #D9D9D9;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.winner>div>p {font-size: 3rem;}\r\n\r\n.winner>div>button {font-size: 2.5rem;}\r\n\r\n.footer {position: absolute;\r\n  bottom: 0;\r\n  font-size: 1.5rem;}\r\n\r\n@media screen and (max-width: 992px) {\r\n  html, body {height: fit-content;}\r\n\r\n  .inner {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .main {width: 95vw;}\r\n\r\n  .board, .select-board {height: 302px;\r\n    width: 302px;}\r\n\r\n  .select-board {width: 301px;\r\n    height: 303px;}\r\n\r\n  .inner>div {padding: 0;}\r\n\r\n  .title {font-size: 1.4rem;\r\n    margin-bottom: 0;}\r\n\r\n  .inner>div>div:nth-child(1) {font-size: 1rem;}\r\n\r\n  .select>p:nth-child(1) {font-size: 1.2rem;}\r\n  \r\n  .select>p:nth-child(2) {font-size: 1rem;}\r\n\r\n  .axis>button, .winner>div>button {font-size: 1rem;}\r\n\r\n  .select {padding: 1.4rem;}\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\r\n\r\n:root {\r\n  --lightgrey: rgb(240, 234, 234);\r\n}\r\n\r\n* { box-sizing: border-box;}\r\n\r\nhtml,body {height: 100%;}\r\n\r\nh1 {margin: 0;}\r\n\r\np {margin: 0;}\r\n\r\nbody {background-color: var(--lightgrey);\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: -1;\r\n}\r\n\r\n.main {width: 70vw;\r\n  margin-top: 5vh;\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;}\r\n\r\n.title {display: flex;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  margin-bottom: 5vh;}\r\n\r\n.inner {display: flex;\r\n  flex-grow: 1;}\r\n\r\n.inner>div {\r\n  padding: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  flex-grow: 1;\r\n}\r\n\r\n.inner>div>div:nth-child(1), .inner>div>div:nth-child(3) {\r\n  height: 10%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.inner>div>div:nth-child(2) {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.board {\r\n  height: 400px;\r\n  width: 402px;\r\n  border: solid black 1px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: #D9D9D9;\r\n}\r\n\r\n.square {height: 10%;\r\n  width: 10%;\r\n  border: solid black 1px;}\r\n\r\n.board>.square:hover {cursor: pointer;\r\n  transform: scale(1.1);}\r\n\r\n[data-ship] {\r\n  background-color: rgba(0, 0, 0, 0.788);\r\n}\r\n\r\n[data-value = 'miss'] {\r\n  background-color: rgb(62, 36, 87);\r\n}\r\n\r\n[data-value = 'hit'] {\r\n  background-color: red;\r\n}\r\n\r\n.select-board>.square:hover {cursor: pointer;}\r\n\r\n.select-board {\r\n  border: 1px solid black;\r\n  height: 397px;\r\n  width: 402px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: #D9D9D9;\r\n  z-index: 1;\r\n}\r\n\r\n.block {background-color: #000000cb;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.select {width: fit-content;\r\n  height: fit-content;\r\n  padding: 3rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #D9D9D9;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.select>p:nth-child(2) {font-size: 1.4rem;}\r\n\r\n.select>p:nth-child(1) {font-size: 2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.axis>button, .winner>div>button {\r\n  font-size: 1.4rem;\r\n  color: white;\r\n  background-color: black;\r\n  border-radius: 4px;\r\n  padding: 0.6rem 1rem;\r\n}\r\n\r\n.axis>button:hover, .winner>div>button:hover {\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n#ship {border-bottom: 3px solid black;\r\n  font-weight: 900;}\r\n\r\n.select-board .square:hover {\r\n  background-color: green;\r\n}\r\n\r\n.winner {background-color: #000000cb;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.winner>div {width: fit-content;\r\n  height: fit-content;\r\n  padding: 3rem 6rem;\r\n  border-radius: 1rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #D9D9D9;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.winner>div>p {font-size: 3rem;}\r\n\r\n.winner>div>button {font-size: 2.5rem;}\r\n\r\n.footer {position: absolute;\r\n  bottom: 0;\r\n  font-size: 1.5rem;}\r\n\r\n@media screen and (max-width: 992px) {\r\n  html, body {height: fit-content;}\r\n\r\n  .inner {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .main {width: 95vw;}\r\n\r\n  .board, .select-board {height: 302px;\r\n    width: 302px;}\r\n\r\n  .select-board {width: 301px;\r\n    height: 303px;}\r\n\r\n  .inner>div {padding: 0;}\r\n\r\n  .title {font-size: 1.4rem;\r\n    margin-bottom: 0;}\r\n\r\n  .inner>div>div:nth-child(1) {font-size: 1rem;}\r\n\r\n  .select>p:nth-child(1) {font-size: 1.2rem;}\r\n  \r\n  .select>p:nth-child(2) {font-size: 1rem;}\r\n\r\n  .axis>button, .winner>div>button {font-size: 1rem;}\r\n\r\n  .select {padding: 1.4rem;}\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawBoard": () => (/* binding */ drawBoard),
/* harmony export */   "mouseOver": () => (/* binding */ mouseOver),
/* harmony export */   "restartGame": () => (/* binding */ restartGame),
/* harmony export */   "restartRotate": () => (/* binding */ restartRotate),
/* harmony export */   "selectShips": () => (/* binding */ selectShips),
/* harmony export */   "winScreen": () => (/* binding */ winScreen)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
const drawBoard = (game) => {
  const boards = document.querySelectorAll('.board');
  const board1 = boards[0];
  const board2 = boards[1];
  board1.innerHTML = '';
  board2.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (game.players.player1.gameboard.board[i][j].ship === true) square.dataset.ship = true;
      if (game.players.player1.gameboard.board[i][j].value === 'miss') square.dataset.value = 'miss';
      if (game.players.player1.gameboard.board[i][j].value === 'hit') square.dataset.value = 'hit';
      board1.append(square);
    }
  }

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (game.players.player2.gameboard.board[i][j].value === 'miss') square.dataset.value = 'miss';
      if (game.players.player2.gameboard.board[i][j].value === 'hit') square.dataset.value = 'hit';
      square.addEventListener('click', () => {
        if (game.players.player2.gameboard.board[i][j].value != null) return;
        game.gameAttack([i, j]);
      });
      board2.append(square);
    }
  }
};

const rotateShip = () => {
  const btn = document.querySelector('#rotation');
  if (btn.dataset.axis === 'yAxis') btn.dataset.axis = 'xAxis';
  else btn.dataset.axis = 'yAxis';
};

const shipNames = (length) => {
  const name = document.querySelector('#ship');
  switch (length) {
    case 1:
      name.textContent = 'Carrier';
      break;
    case 2:
      name.textContent = 'Battleship';
      break;
    case 3:
      name.textContent = 'Destroyer';
      break;
    case 4:
      name.textContent = 'Submarine';
      break;
    default:
      name.textContent = 'Patrol Boat';
      break;
  }
};

const mouseOver = (length, axis) => {
  const squares = document.querySelectorAll('.select-board .square');
  for (let i = 0; i < squares.length; i += 1) {
    if (axis === 'xAxis') {
      squares[i].addEventListener('mouseover', () => {
        for (let j = 0; j < length; j += 1) {
          if (i < 10 && i + j > 9) break;
          if (Number(String(i)[1]) > Number(String(i + j)[1])) break;
          if (length <= 2) squares[i + j + 1].style.backgroundColor = 'green';
          else squares[i + j].style.backgroundColor = 'green';
        }
      });
      squares[i].addEventListener('mouseout', () => {
        for (let j = 0; j < length; j += 1) {
          if (i + j >= 100) break;
          if (length <= 2) squares[i + j + 1].style.backgroundColor = '';
          else squares[i + j].style.backgroundColor = '';
        }
      });
    }
    if (axis === 'yAxis') {
      squares[i].addEventListener('mouseover', () => {
        for (let j = length - 1; j >= 0; j -= 1) {
          if (String(i).length === 1) {
            squares[i].style.backgroundColor = 'green';
            break;
          }
          let num = String(i);
          num = Number(String(Number(num[0]) - j).concat(num.slice(1)));
          if (length <= 2) num -= 10;
          if (num >= 0) squares[num].style.backgroundColor = 'green';
        }
      });
      squares[i].addEventListener('mouseout', () => {
        for (let j = length - 1; j >= 0; j -= 1) {
          if (String(i).length === 1) {
            squares[i].style.backgroundColor = '';
            break;
          }
          let num = String(i);
          num = Number(String(Number(num[0]) - j).concat(num.slice(1)));
          if (length <= 2) num -= 10;
          if (num >= 0) squares[num].style.backgroundColor = '';
        }
      });
    }
  }
};

const selectShips = (game, length, nam) => {
  const board = document.querySelector('.select-board');
  board.innerHTML = '';
  const { axis } = document.querySelector('#rotation').dataset;
  const btn = document.querySelector('#rotation');
  btn.addEventListener('click', () => {
    rotateShip();
    btn.replaceWith(btn.cloneNode(true));
    selectShips(game, length, nam);
  });
  if (length === 0) {
    document.querySelector('.block').style.display = 'none';
    drawBoard(game);
    return;
  }
  shipNames(nam);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      board.append(square);
      if (game.players.player1.gameboard.board[i][j].ship === true) square.dataset.ship = true;
      square.addEventListener('click', () => {
        let size = length;
        if (size <= 2) size += 1;
        if (!game.players.player1.gameboard.validateShip(size, [i, j], axis)) return;
        game.populateBoards(length, [i, j], axis);
        board.innerHTML = '';
        btn.replaceWith(btn.cloneNode(true));
        selectShips(game, length - 1, nam + 1);
      });
    }
  }
  mouseOver(length, axis);
};

const restartGame = () => {
  const btn = document.querySelector('#restart');
  const screen = document.querySelector('.winner');
  const block = document.querySelector('.block');
  block.style.display = 'none';
  btn.addEventListener('click', () => {
    btn.replaceWith(btn.cloneNode(true));
    block.style.display = 'block';
    screen.style.display = 'none';
  });
};

const winScreen = (win) => {
  const screen = document.querySelector('.winner');
  const text = document.querySelector('#message');
  if (win === 1) {
    text.textContent = 'You won';
    screen.style.display = 'block';
    return;
  }
  text.textContent = 'You lost';
  screen.style.display = 'block';
};

const restartRotate = () => {
  const btn = document.querySelector('#rotation');
  btn.replaceWith(btn.cloneNode(true));
};




/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _logic_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/gameboard */ "./src/logic/gameboard.js");
/* harmony import */ var _logic_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/ship */ "./src/logic/ship.js");
/* harmony import */ var _logic_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/player */ "./src/logic/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





const random = () => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
const randomAxis = () => {
  if (Math.floor(Math.random() * 2) === 0) return 'xAxis';
  return 'yAxis';
};

const gameLoop = {
  players: _logic_player__WEBPACK_IMPORTED_MODULE_2__.player,
  buildBoards() {
    this.players.player1.gameboard = (0,_logic_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    this.players.player1.gameboard.newBoard();
    this.players.player2.gameboard = (0,_logic_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    this.players.player2.gameboard.newBoard();
  },
  populateBoards(lenght, coords, axis) {
    const newShip = (0,_logic_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(lenght);
    this.players.player1.gameboard.placeShip(newShip, coords, axis);
  },
  populateBoardsAI() {
    let pos = random();
    let axis = randomAxis();
    for (let i = 5; i >= 1; i -= 1) {
      let size = i;
      if (size <= 2) size += 1;
      let place = this.players.player2.gameboard.validateShip(size, pos, axis);
      while (place === false) {
        pos = random();
        place = this.players.player2.gameboard.validateShip(size, pos, axis);
      }
      this.players.player2.gameboard.placeShip((0,_logic_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(i), pos, axis);
      axis = randomAxis();
    }
  },
  gameAttack(position) {
    this.players.player1.attack(position);
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.drawBoard)(this);
    if (this.checkWin() === 1) {
      this.announceWinner(1);
      return;
    }
    this.players.player2.AI();
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.drawBoard)(this);
    if (this.checkWin() === 2) {
      this.announceWinner(2);
    }
  },
  checkWin() {
    if (this.players.player2.gameboard.allSunk) return 1;
    if (this.players.player1.gameboard.allSunk) return 2;
    return false;
  },
  announceWinner(win) {
    switch (win) {
      case 1:
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.winScreen)(win);
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.restartRotate)();
        this.newGame();
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.restartGame)();
        break;

      default:
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.winScreen)(win);
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.restartRotate)();
        this.newGame();
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.restartGame)();
        break;
    }
  },
  newGame() {
    this.players = _logic_player__WEBPACK_IMPORTED_MODULE_2__.player;
    this.players.player1.shotsFired = [];
    this.players.player2.shotsFired = [];
    this.buildBoards();
    this.populateBoardsAI();
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.drawBoard)(this);
    document.querySelector('.block').style.display = 'block';
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.selectShips)(this, 5, 1);
  },
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");




let game;

const init = () => {
  game = _gameLoop__WEBPACK_IMPORTED_MODULE_2__.gameLoop;
  game.buildBoards();
  game.populateBoardsAI();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.drawBoard)(game);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.selectShips)(game, 5, 1);
};

init();


/***/ }),

/***/ "./src/logic/gameboard.js":
/*!********************************!*\
  !*** ./src/logic/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

const gameboard = () => (
  {
    board: [],
    shipList: [],
    missedShots: [],
    allSunk: false,

    newBoard() {
      this.board = new Array(10);
      for (let i = 0; i < 10; i++) {
        this.board[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
          this.board[i][j] = { value: null, ship: null };
        }
      }
    },

    placeShip(ship, coords, axis = 'yAxis') {
      if (!this.validateShip(ship.length, coords, axis)) return 0;
      const x = coords[1];
      const y = coords[0];
      const temp = this.board[y][x];
      const position = [];
      const { length } = ship;
      temp.ship = true;
      position.push([y, x]);
      if (axis === 'yAxis') {
        for (let i = 1; i < length; i++) {
          this.board[y - i][x].ship = true;
          position.push([y - i, x]);
        }
      } else if (axis === 'xAxis') {
        for (let i = 1; i < length; i++) {
          this.board[y][x + i].ship = true;
          position.push([y, x + i]);
        }
      }
      this.shipList.push({ ship, position });
      return 1;
    },

    validateShip(length, coords, axis = 'yAxis') {
      const y = coords[0];
      const x = coords[1];
      if (coords[0] > 9 || coords[0] < 0) return false;
      if (coords[1] > 9 || coords[1] < 0) return false;

      if (axis === 'yAxis') {
        const result = y - length + 1;
        if (result < 0) return false;
      } else if (axis === 'xAxis') {
        const result = x + length - 1;
        if (result > 9) return false;
      }

      if (axis === 'yAxis') {
        for (let i = 0; i < length; i++) {
          const newY = y - i;
          if (this.board[newY][x].ship) return false;// SHIP ON POSITION
          if (x - 1 >= 0) { // IF IS NOT ON LEFT BORDER
            if (this.board[y][x - 1].ship) return false;// LEFT
            if (newY - 1 >= 0 && this.board[newY - 1][x - 1].ship) {
              // IF NOT UPPER BORDER -> LEFT-UP;
              return false;
            }
            if (newY + 1 <= 9 && this.board[newY + 1][x - 1].ship) {
              // IF NOT ON LOWERBORDER -> LEFT-DOWN
              return false;
            }
          }
          if (x + 1 <= 9) { // IF IS NOT ON RIGHT BORDER
            if (this.board[newY][x + 1].ship) return false; // RIGHT
            if (newY - 1 >= 0 && this.board[newY - 1][x + 1].ship) {
              // IF NOT ON UPPER BORDER -> RIGHT-UP
              return false;
            }
            if (newY + 1 <= 9 && this.board[newY + 1][x + 1].ship) {
              // IF NOT ON LOWERBORDER -> RIGHT-DOWN
              return false;
            }
          }
          if (i === 0) { // IF FIRST
            if (newY + 1 <= 9 && this.board[newY + 1][x].ship) {
              // IF NOT ON LOWER BORDER -> DOWN
              return false;
            }
          }
          if (i === length - 1) { // IF LAST ITERATION
            if (newY - 1 >= 0 && this.board[newY - 1][x].ship) {
              // IF NOT ON UPPER BORDER -> UP
              return false;
            }
          }
        }
      } else if (axis === 'xAxis') {
        for (let i = 0; i < length; i++) {
          const newX = x + i;
          if (this.board[y][newX].ship) return false;// SHIP ON POSITION
          if (y - 1 >= 0) { // IF IS NOT ON UPPER BORDER
            if (newX - 1 >= 0 && this.board[y - 1][newX - 1].ship) {
              // IF NOT ON LEFT BORDER -> LEFT-UP
              return false;
            }
            if (this.board[y - 1][newX].ship) return false;// UP
            if (newX + 1 <= 9 && this.board[y - 1][newX + 1].ship) {
              // IF NOT ON RIGHT BORDER -> RIGHT-UP
              return false;
            }
          }
          if (y + 1 <= 9) { // IF IS NOT ON LOWER BORDER
            if (this.board[y + 1][newX].ship) return false; // DOWN
            if (newX + 1 <= 9 && this.board[y + 1][newX + 1].ship) {
              // IF NOT ON RIGHT BORDER -> RIGHT-DOWN
              return false;
            }
            if (newX - 1 >= 0 && this.board[y + 1][newX - 1].ship) {
              // IF NOT ON LEFT BORDRDER -> LEFT-DOWN
              return false;
            }
          }
          if (i === 0) { // IF FIRST
            if (newX - 1 >= 0 && this.board[y][newX - 1].ship) {
              // IF NOT ON LEFT BORDER -> LEFT
              return false;
            }
          }
          if (i === length - 1) { // IF LAST ITERATION
            if (newX + 1 <= 9 && this.board[y][newX + 1].ship) {
              // IF NOT ON RIGHT BORDER -> RIGHT
              return false;
            }
          }
        }
      }
      return true;
    },

    receiveAttack(position) {
      // eslint-disable-next-line no-restricted-syntax
      this.board[position[0]][position[1]].value = 'miss';
      for (const key of this.shipList) {
        // eslint-disable-next-line no-restricted-syntax
        for (const shipPosition of key.position) {
          if (shipPosition[0] === position[0] && shipPosition[1] === position[1]) {
            this.board[position[0]][position[1]].value = 'hit';
            key.ship.hit(position);
            this.checkSunk();
            return;
          }
        }
      }
      this.checkSunk();
      this.missedShots.push(position);
    },

    checkSunk() {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of this.shipList) {
        if (key.ship.isSunk === false) return;
      }
      this.allSunk = true;
    },
  });




/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
const player = {
  player1: {
    gameboard: {},
    shotsFired: [],
    attack: (position) => {
      for (let key of player.player1.shotsFired) {
        if (key[0] === position[0] && key[1] === position[1]) return false;
      }
      player.player2.gameboard.receiveAttack(position);
      player.player1.shotsFired.push(position);
      return true;
    },
  },
  player2: {
    gameboard: {},
    shotsFired: [],
    AI: () => {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      const attackSucess = player.player2.attack([a, b]);
      if (!attackSucess) player.player2.AI();
    },
    attack: (position) => {
      for (let key of player.player2.shotsFired) {
        if (key[0] === position[0] && key[1] === position[1]) return false;
      }
      player.player1.gameboard.receiveAttack(position);
      player.player2.shotsFired.push(position);
      return true;
    },
  },
};




/***/ }),

/***/ "./src/logic/ship.js":
/*!***************************!*\
  !*** ./src/logic/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
const ship = (length = 0) => {
  let len = length;
  if (len <= 2) len += 1;
  return {
    length: len,
    hitList: [],
    isSunk: false,
    hit(position) {
      this.hitList.push(position);
      this.sunk();
    },
    sunk() {
      if (this.hitList.length === this.length) this.isSunk = true;
    },
  };
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNrQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbG9naWMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbG9naWMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge2ZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjt9XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1saWdodGdyZXk6IHJnYigyNDAsIDIzNCwgMjM0KTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxcclxcblxcclxcbmh0bWwsYm9keSB7aGVpZ2h0OiAxMDAlO31cXHJcXG5cXHJcXG5oMSB7bWFyZ2luOiAwO31cXHJcXG5cXHJcXG5wIHttYXJnaW46IDA7fVxcclxcblxcclxcbmJvZHkge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge3dpZHRoOiA3MHZ3O1xcclxcbiAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cXHJcXG5cXHJcXG4udGl0bGUge2Rpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDV2aDt9XFxyXFxuXFxyXFxuLmlubmVyIHtkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1ncm93OiAxO31cXHJcXG5cXHJcXG4uaW5uZXI+ZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyPmRpdj5kaXY6bnRoLWNoaWxkKDEpLCAuaW5uZXI+ZGl2PmRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyPmRpdj5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDQwMnB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSB7aGVpZ2h0OiAxMCU7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7fVxcclxcblxcclxcbi5ib2FyZD4uc3F1YXJlOmhvdmVyIHtjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7fVxcclxcblxcclxcbltkYXRhLXNoaXBdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43ODgpO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS12YWx1ZSA9ICdtaXNzJ10ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAzNiwgODcpO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS12YWx1ZSA9ICdoaXQnXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtYm9hcmQ+LnNxdWFyZTpob3ZlciB7Y3Vyc29yOiBwb2ludGVyO31cXHJcXG5cXHJcXG4uc2VsZWN0LWJvYXJkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAzOTdweDtcXHJcXG4gIHdpZHRoOiA0MDJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwY2I7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdCB7d2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdD5wOm50aC1jaGlsZCgyKSB7Zm9udC1zaXplOiAxLjRyZW07fVxcclxcblxcclxcbi5zZWxlY3Q+cDpudGgtY2hpbGQoMSkge2ZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5heGlzPmJ1dHRvbiwgLndpbm5lcj5kaXY+YnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF4aXM+YnV0dG9uOmhvdmVyLCAud2lubmVyPmRpdj5idXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcCB7Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDt9XFxyXFxuXFxyXFxuLnNlbGVjdC1ib2FyZCAuc3F1YXJlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwY2I7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXI+ZGl2IHt3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogM3JlbSA2cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyPmRpdj5wIHtmb250LXNpemU6IDNyZW07fVxcclxcblxcclxcbi53aW5uZXI+ZGl2PmJ1dHRvbiB7Zm9udC1zaXplOiAyLjVyZW07fVxcclxcblxcclxcbi5mb290ZXIge3Bvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO31cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgaHRtbCwgYm9keSB7aGVpZ2h0OiBmaXQtY29udGVudDt9XFxyXFxuXFxyXFxuICAuaW5uZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge3dpZHRoOiA5NXZ3O31cXHJcXG5cXHJcXG4gIC5ib2FyZCwgLnNlbGVjdC1ib2FyZCB7aGVpZ2h0OiAzMDJweDtcXHJcXG4gICAgd2lkdGg6IDMwMnB4O31cXHJcXG5cXHJcXG4gIC5zZWxlY3QtYm9hcmQge3dpZHRoOiAzMDFweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDNweDt9XFxyXFxuXFxyXFxuICAuaW5uZXI+ZGl2IHtwYWRkaW5nOiAwO31cXHJcXG5cXHJcXG4gIC50aXRsZSB7Zm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7fVxcclxcblxcclxcbiAgLmlubmVyPmRpdj5kaXY6bnRoLWNoaWxkKDEpIHtmb250LXNpemU6IDFyZW07fVxcclxcblxcclxcbiAgLnNlbGVjdD5wOm50aC1jaGlsZCgxKSB7Zm9udC1zaXplOiAxLjJyZW07fVxcclxcbiAgXFxyXFxuICAuc2VsZWN0PnA6bnRoLWNoaWxkKDIpIHtmb250LXNpemU6IDFyZW07fVxcclxcblxcclxcbiAgLmF4aXM+YnV0dG9uLCAud2lubmVyPmRpdj5idXR0b24ge2ZvbnQtc2l6ZTogMXJlbTt9XFxyXFxuXFxyXFxuICAuc2VsZWN0IHtwYWRkaW5nOiAxLjRyZW07fVxcclxcblxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLE1BQU0sbUpBQW1KLENBQUM7O0FBRTFKO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBLElBQUksc0JBQXNCLENBQUM7O0FBRTNCLFdBQVcsWUFBWSxDQUFDOztBQUV4QixJQUFJLFNBQVMsQ0FBQzs7QUFFZCxHQUFHLFNBQVMsQ0FBQzs7QUFFYixNQUFNLGtDQUFrQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSxPQUFPLFdBQVc7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCLENBQUM7O0FBRXpCLFFBQVEsYUFBYTtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQixDQUFDOztBQUVyQixRQUFRLGFBQWE7RUFDbkIsWUFBWSxDQUFDOztBQUVmO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQSxTQUFTLFdBQVc7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QixDQUFDOztBQUUxQixzQkFBc0IsZUFBZTtFQUNuQyxxQkFBcUIsQ0FBQzs7QUFFeEI7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsNkJBQTZCLGVBQWUsQ0FBQzs7QUFFN0M7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUEsUUFBUSwyQkFBMkI7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUyxrQkFBa0I7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQSx3QkFBd0IsaUJBQWlCLENBQUM7O0FBRTFDLHdCQUF3QixlQUFlO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSxPQUFPLDhCQUE4QjtFQUNuQyxnQkFBZ0IsQ0FBQzs7QUFFbkI7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsU0FBUywyQkFBMkI7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLGFBQWEsa0JBQWtCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBLGVBQWUsZUFBZSxDQUFDOztBQUUvQixvQkFBb0IsaUJBQWlCLENBQUM7O0FBRXRDLFNBQVMsa0JBQWtCO0VBQ3pCLFNBQVM7RUFDVCxpQkFBaUIsQ0FBQzs7QUFFcEI7RUFDRSxZQUFZLG1CQUFtQixDQUFDOztFQUVoQztJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQSxPQUFPLFdBQVcsQ0FBQzs7RUFFbkIsdUJBQXVCLGFBQWE7SUFDbEMsWUFBWSxDQUFDOztFQUVmLGVBQWUsWUFBWTtJQUN6QixhQUFhLENBQUM7O0VBRWhCLFlBQVksVUFBVSxDQUFDOztFQUV2QixRQUFRLGlCQUFpQjtJQUN2QixnQkFBZ0IsQ0FBQzs7RUFFbkIsNkJBQTZCLGVBQWUsQ0FBQzs7RUFFN0Msd0JBQXdCLGlCQUFpQixDQUFDOztFQUUxQyx3QkFBd0IsZUFBZSxDQUFDOztFQUV4QyxrQ0FBa0MsZUFBZSxDQUFDOztFQUVsRCxTQUFTLGVBQWUsQ0FBQzs7QUFFM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7Zm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO31cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWxpZ2h0Z3JleTogcmdiKDI0MCwgMjM0LCAyMzQpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XFxyXFxuXFxyXFxuaHRtbCxib2R5IHtoZWlnaHQ6IDEwMCU7fVxcclxcblxcclxcbmgxIHttYXJnaW46IDA7fVxcclxcblxcclxcbnAge21hcmdpbjogMDt9XFxyXFxuXFxyXFxuYm9keSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7d2lkdGg6IDcwdnc7XFxyXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxcclxcblxcclxcbi50aXRsZSB7ZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXZoO31cXHJcXG5cXHJcXG4uaW5uZXIge2Rpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWdyb3c6IDE7fVxcclxcblxcclxcbi5pbm5lcj5kaXYge1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXI+ZGl2PmRpdjpudGgtY2hpbGQoMSksIC5pbm5lcj5kaXY+ZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXI+ZGl2PmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogNDAycHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDt9XFxyXFxuXFxyXFxuLmJvYXJkPi5zcXVhcmU6aG92ZXIge2N1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTt9XFxyXFxuXFxyXFxuW2RhdGEtc2hpcF0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4OCk7XFxyXFxufVxcclxcblxcclxcbltkYXRhLXZhbHVlID0gJ21pc3MnXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDM2LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbltkYXRhLXZhbHVlID0gJ2hpdCddIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1ib2FyZD4uc3F1YXJlOmhvdmVyIHtjdXJzb3I6IHBvaW50ZXI7fVxcclxcblxcclxcbi5zZWxlY3QtYm9hcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDM5N3B4O1xcclxcbiAgd2lkdGg6IDQwMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2sge2JhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjYjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0IHt3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0PnA6bnRoLWNoaWxkKDIpIHtmb250LXNpemU6IDEuNHJlbTt9XFxyXFxuXFxyXFxuLnNlbGVjdD5wOm50aC1jaGlsZCgxKSB7Zm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmF4aXM+YnV0dG9uLCAud2lubmVyPmRpdj5idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYXhpcz5idXR0b246aG92ZXIsIC53aW5uZXI+ZGl2PmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaGlwIHtib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogOTAwO31cXHJcXG5cXHJcXG4uc2VsZWN0LWJvYXJkIC5zcXVhcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi53aW5uZXIge2JhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjYjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcj5kaXYge3dpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi53aW5uZXI+ZGl2PnAge2ZvbnQtc2l6ZTogM3JlbTt9XFxyXFxuXFxyXFxuLndpbm5lcj5kaXY+YnV0dG9uIHtmb250LXNpemU6IDIuNXJlbTt9XFxyXFxuXFxyXFxuLmZvb3RlciB7cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07fVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICBodG1sLCBib2R5IHtoZWlnaHQ6IGZpdC1jb250ZW50O31cXHJcXG5cXHJcXG4gIC5pbm5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7d2lkdGg6IDk1dnc7fVxcclxcblxcclxcbiAgLmJvYXJkLCAuc2VsZWN0LWJvYXJkIHtoZWlnaHQ6IDMwMnB4O1xcclxcbiAgICB3aWR0aDogMzAycHg7fVxcclxcblxcclxcbiAgLnNlbGVjdC1ib2FyZCB7d2lkdGg6IDMwMXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwM3B4O31cXHJcXG5cXHJcXG4gIC5pbm5lcj5kaXYge3BhZGRpbmc6IDA7fVxcclxcblxcclxcbiAgLnRpdGxlIHtmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDt9XFxyXFxuXFxyXFxuICAuaW5uZXI+ZGl2PmRpdjpudGgtY2hpbGQoMSkge2ZvbnQtc2l6ZTogMXJlbTt9XFxyXFxuXFxyXFxuICAuc2VsZWN0PnA6bnRoLWNoaWxkKDEpIHtmb250LXNpemU6IDEuMnJlbTt9XFxyXFxuICBcXHJcXG4gIC5zZWxlY3Q+cDpudGgtY2hpbGQoMikge2ZvbnQtc2l6ZTogMXJlbTt9XFxyXFxuXFxyXFxuICAuYXhpcz5idXR0b24sIC53aW5uZXI+ZGl2PmJ1dHRvbiB7Zm9udC1zaXplOiAxcmVtO31cXHJcXG5cXHJcXG4gIC5zZWxlY3Qge3BhZGRpbmc6IDEuNHJlbTt9XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuY29uc3QgZHJhd0JvYXJkID0gKGdhbWUpID0+IHtcclxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcclxuICBjb25zdCBib2FyZDEgPSBib2FyZHNbMF07XHJcbiAgY29uc3QgYm9hcmQyID0gYm9hcmRzWzFdO1xyXG4gIGJvYXJkMS5pbm5lckhUTUwgPSAnJztcclxuICBib2FyZDIuaW5uZXJIVE1MID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwID09PSB0cnVlKSBzcXVhcmUuZGF0YXNldC5zaGlwID0gdHJ1ZTtcclxuICAgICAgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtpXVtqXS52YWx1ZSA9PT0gJ21pc3MnKSBzcXVhcmUuZGF0YXNldC52YWx1ZSA9ICdtaXNzJztcclxuICAgICAgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtpXVtqXS52YWx1ZSA9PT0gJ2hpdCcpIHNxdWFyZS5kYXRhc2V0LnZhbHVlID0gJ2hpdCc7XHJcbiAgICAgIGJvYXJkMS5hcHBlbmQoc3F1YXJlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgIGlmIChnYW1lLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuYm9hcmRbaV1bal0udmFsdWUgPT09ICdtaXNzJykgc3F1YXJlLmRhdGFzZXQudmFsdWUgPSAnbWlzcyc7XHJcbiAgICAgIGlmIChnYW1lLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuYm9hcmRbaV1bal0udmFsdWUgPT09ICdoaXQnKSBzcXVhcmUuZGF0YXNldC52YWx1ZSA9ICdoaXQnO1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5ib2FyZFtpXVtqXS52YWx1ZSAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgZ2FtZS5nYW1lQXR0YWNrKFtpLCBqXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBib2FyZDIuYXBwZW5kKHNxdWFyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRpb24nKTtcclxuICBpZiAoYnRuLmRhdGFzZXQuYXhpcyA9PT0gJ3lBeGlzJykgYnRuLmRhdGFzZXQuYXhpcyA9ICd4QXhpcyc7XHJcbiAgZWxzZSBidG4uZGF0YXNldC5heGlzID0gJ3lBeGlzJztcclxufTtcclxuXHJcbmNvbnN0IHNoaXBOYW1lcyA9IChsZW5ndGgpID0+IHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAnKTtcclxuICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gJ0NhcnJpZXInO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnRGVzdHJveWVyJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnU3VibWFyaW5lJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gJ1BhdHJvbCBCb2F0JztcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbW91c2VPdmVyID0gKGxlbmd0aCwgYXhpcykgPT4ge1xyXG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LWJvYXJkIC5zcXVhcmUnKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChheGlzID09PSAneEF4aXMnKSB7XHJcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgIGlmIChpIDwgMTAgJiYgaSArIGogPiA5KSBicmVhaztcclxuICAgICAgICAgIGlmIChOdW1iZXIoU3RyaW5nKGkpWzFdKSA+IE51bWJlcihTdHJpbmcoaSArIGopWzFdKSkgYnJlYWs7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoIDw9IDIpIHNxdWFyZXNbaSArIGogKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgZWxzZSBzcXVhcmVzW2kgKyBqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgICAgaWYgKGkgKyBqID49IDEwMCkgYnJlYWs7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoIDw9IDIpIHNxdWFyZXNbaSArIGogKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICAgIGVsc2Ugc3F1YXJlc1tpICsgal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChheGlzID09PSAneUF4aXMnKSB7XHJcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBsZW5ndGggLSAxOyBqID49IDA7IGogLT0gMSkge1xyXG4gICAgICAgICAgaWYgKFN0cmluZyhpKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgc3F1YXJlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBudW0gPSBTdHJpbmcoaSk7XHJcbiAgICAgICAgICBudW0gPSBOdW1iZXIoU3RyaW5nKE51bWJlcihudW1bMF0pIC0gaikuY29uY2F0KG51bS5zbGljZSgxKSkpO1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA8PSAyKSBudW0gLT0gMTA7XHJcbiAgICAgICAgICBpZiAobnVtID49IDApIHNxdWFyZXNbbnVtXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XHJcbiAgICAgICAgICBpZiAoU3RyaW5nKGkpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBzcXVhcmVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBudW0gPSBTdHJpbmcoaSk7XHJcbiAgICAgICAgICBudW0gPSBOdW1iZXIoU3RyaW5nKE51bWJlcihudW1bMF0pIC0gaikuY29uY2F0KG51bS5zbGljZSgxKSkpO1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA8PSAyKSBudW0gLT0gMTA7XHJcbiAgICAgICAgICBpZiAobnVtID49IDApIHNxdWFyZXNbbnVtXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdFNoaXBzID0gKGdhbWUsIGxlbmd0aCwgbmFtKSA9PiB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWJvYXJkJyk7XHJcbiAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgeyBheGlzIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRpb24nKS5kYXRhc2V0O1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGlvbicpO1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJvdGF0ZVNoaXAoKTtcclxuICAgIGJ0bi5yZXBsYWNlV2l0aChidG4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIHNlbGVjdFNoaXBzKGdhbWUsIGxlbmd0aCwgbmFtKTtcclxuICB9KTtcclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZHJhd0JvYXJkKGdhbWUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBzaGlwTmFtZXMobmFtKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcclxuICAgICAgaWYgKGdhbWUucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwID09PSB0cnVlKSBzcXVhcmUuZGF0YXNldC5zaGlwID0gdHJ1ZTtcclxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzaXplID0gbGVuZ3RoO1xyXG4gICAgICAgIGlmIChzaXplIDw9IDIpIHNpemUgKz0gMTtcclxuICAgICAgICBpZiAoIWdhbWUucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC52YWxpZGF0ZVNoaXAoc2l6ZSwgW2ksIGpdLCBheGlzKSkgcmV0dXJuO1xyXG4gICAgICAgIGdhbWUucG9wdWxhdGVCb2FyZHMobGVuZ3RoLCBbaSwgal0sIGF4aXMpO1xyXG4gICAgICAgIGJvYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGJ0bi5yZXBsYWNlV2l0aChidG4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICBzZWxlY3RTaGlwcyhnYW1lLCBsZW5ndGggLSAxLCBuYW0gKyAxKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vdXNlT3ZlcihsZW5ndGgsIGF4aXMpO1xyXG59O1xyXG5cclxuY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQnKTtcclxuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XHJcbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2snKTtcclxuICBibG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ0bi5yZXBsYWNlV2l0aChidG4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB3aW5TY3JlZW4gPSAod2luKSA9PiB7XHJcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xyXG4gIGlmICh3aW4gPT09IDEpIHtcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSAnWW91IHdvbic7XHJcbiAgICBzY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRleHQudGV4dENvbnRlbnQgPSAnWW91IGxvc3QnO1xyXG4gIHNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufTtcclxuXHJcbmNvbnN0IHJlc3RhcnRSb3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0aW9uJyk7XHJcbiAgYnRuLnJlcGxhY2VXaXRoKGJ0bi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBkcmF3Qm9hcmQsIHNlbGVjdFNoaXBzLCBtb3VzZU92ZXIsIHJlc3RhcnRHYW1lLCB3aW5TY3JlZW4sIHJlc3RhcnRSb3RhdGUsXHJcbn07XHJcbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vbG9naWMvZ2FtZWJvYXJkJztcclxuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vbG9naWMvc2hpcCc7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vbG9naWMvcGxheWVyJztcclxuaW1wb3J0IHtcclxuICBkcmF3Qm9hcmQsIHNlbGVjdFNoaXBzLCB3aW5TY3JlZW4sIHJlc3RhcnRHYW1lLCByZXN0YXJ0Um90YXRlLFxyXG59IGZyb20gJy4vZG9tJztcclxuXHJcbmNvbnN0IHJhbmRvbSA9ICgpID0+IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XHJcbmNvbnN0IHJhbmRvbUF4aXMgPSAoKSA9PiB7XHJcbiAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwKSByZXR1cm4gJ3hBeGlzJztcclxuICByZXR1cm4gJ3lBeGlzJztcclxufTtcclxuXHJcbmNvbnN0IGdhbWVMb29wID0ge1xyXG4gIHBsYXllcnM6IHBsYXllcixcclxuICBidWlsZEJvYXJkcygpIHtcclxuICAgIHRoaXMucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLm5ld0JvYXJkKCk7XHJcbiAgICB0aGlzLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcclxuICAgIHRoaXMucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5uZXdCb2FyZCgpO1xyXG4gIH0sXHJcbiAgcG9wdWxhdGVCb2FyZHMobGVuZ2h0LCBjb29yZHMsIGF4aXMpIHtcclxuICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKGxlbmdodCk7XHJcbiAgICB0aGlzLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIGNvb3JkcywgYXhpcyk7XHJcbiAgfSxcclxuICBwb3B1bGF0ZUJvYXJkc0FJKCkge1xyXG4gICAgbGV0IHBvcyA9IHJhbmRvbSgpO1xyXG4gICAgbGV0IGF4aXMgPSByYW5kb21BeGlzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gNTsgaSA+PSAxOyBpIC09IDEpIHtcclxuICAgICAgbGV0IHNpemUgPSBpO1xyXG4gICAgICBpZiAoc2l6ZSA8PSAyKSBzaXplICs9IDE7XHJcbiAgICAgIGxldCBwbGFjZSA9IHRoaXMucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC52YWxpZGF0ZVNoaXAoc2l6ZSwgcG9zLCBheGlzKTtcclxuICAgICAgd2hpbGUgKHBsYWNlID09PSBmYWxzZSkge1xyXG4gICAgICAgIHBvcyA9IHJhbmRvbSgpO1xyXG4gICAgICAgIHBsYWNlID0gdGhpcy5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnZhbGlkYXRlU2hpcChzaXplLCBwb3MsIGF4aXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcChpKSwgcG9zLCBheGlzKTtcclxuICAgICAgYXhpcyA9IHJhbmRvbUF4aXMoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdhbWVBdHRhY2socG9zaXRpb24pIHtcclxuICAgIHRoaXMucGxheWVycy5wbGF5ZXIxLmF0dGFjayhwb3NpdGlvbik7XHJcbiAgICBkcmF3Qm9hcmQodGhpcyk7XHJcbiAgICBpZiAodGhpcy5jaGVja1dpbigpID09PSAxKSB7XHJcbiAgICAgIHRoaXMuYW5ub3VuY2VXaW5uZXIoMSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucGxheWVycy5wbGF5ZXIyLkFJKCk7XHJcbiAgICBkcmF3Qm9hcmQodGhpcyk7XHJcbiAgICBpZiAodGhpcy5jaGVja1dpbigpID09PSAyKSB7XHJcbiAgICAgIHRoaXMuYW5ub3VuY2VXaW5uZXIoMik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjaGVja1dpbigpIHtcclxuICAgIGlmICh0aGlzLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuYWxsU3VuaykgcmV0dXJuIDE7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmFsbFN1bmspIHJldHVybiAyO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcbiAgYW5ub3VuY2VXaW5uZXIod2luKSB7XHJcbiAgICBzd2l0Y2ggKHdpbikge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgd2luU2NyZWVuKHdpbik7XHJcbiAgICAgICAgcmVzdGFydFJvdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubmV3R2FtZSgpO1xyXG4gICAgICAgIHJlc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHdpblNjcmVlbih3aW4pO1xyXG4gICAgICAgIHJlc3RhcnRSb3RhdGUoKTtcclxuICAgICAgICB0aGlzLm5ld0dhbWUoKTtcclxuICAgICAgICByZXN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmV3R2FtZSgpIHtcclxuICAgIHRoaXMucGxheWVycyA9IHBsYXllcjtcclxuICAgIHRoaXMucGxheWVycy5wbGF5ZXIxLnNob3RzRmlyZWQgPSBbXTtcclxuICAgIHRoaXMucGxheWVycy5wbGF5ZXIyLnNob3RzRmlyZWQgPSBbXTtcclxuICAgIHRoaXMuYnVpbGRCb2FyZHMoKTtcclxuICAgIHRoaXMucG9wdWxhdGVCb2FyZHNBSSgpO1xyXG4gICAgZHJhd0JvYXJkKHRoaXMpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzZWxlY3RTaGlwcyh0aGlzLCA1LCAxKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2FtZUxvb3AgfTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGRyYXdCb2FyZCwgc2VsZWN0U2hpcHMgfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lTG9vcCc7XHJcblxyXG5sZXQgZ2FtZTtcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgZ2FtZSA9IGdhbWVMb29wO1xyXG4gIGdhbWUuYnVpbGRCb2FyZHMoKTtcclxuICBnYW1lLnBvcHVsYXRlQm9hcmRzQUkoKTtcclxuICBkcmF3Qm9hcmQoZ2FtZSk7XHJcbiAgc2VsZWN0U2hpcHMoZ2FtZSwgNSwgMSk7XHJcbn07XHJcblxyXG5pbml0KCk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXHJcblxyXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoXHJcbiAge1xyXG4gICAgYm9hcmQ6IFtdLFxyXG4gICAgc2hpcExpc3Q6IFtdLFxyXG4gICAgbWlzc2VkU2hvdHM6IFtdLFxyXG4gICAgYWxsU3VuazogZmFsc2UsXHJcblxyXG4gICAgbmV3Qm9hcmQoKSB7XHJcbiAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICB0aGlzLmJvYXJkW2ldID0gbmV3IEFycmF5KDEwKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSB7IHZhbHVlOiBudWxsLCBzaGlwOiBudWxsIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZHMsIGF4aXMgPSAneUF4aXMnKSB7XHJcbiAgICAgIGlmICghdGhpcy52YWxpZGF0ZVNoaXAoc2hpcC5sZW5ndGgsIGNvb3JkcywgYXhpcykpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCB4ID0gY29vcmRzWzFdO1xyXG4gICAgICBjb25zdCB5ID0gY29vcmRzWzBdO1xyXG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5ib2FyZFt5XVt4XTtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBbXTtcclxuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXA7XHJcbiAgICAgIHRlbXAuc2hpcCA9IHRydWU7XHJcbiAgICAgIHBvc2l0aW9uLnB1c2goW3ksIHhdKTtcclxuICAgICAgaWYgKGF4aXMgPT09ICd5QXhpcycpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkW3kgLSBpXVt4XS5zaGlwID0gdHJ1ZTtcclxuICAgICAgICAgIHBvc2l0aW9uLnB1c2goW3kgLSBpLCB4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGF4aXMgPT09ICd4QXhpcycpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXS5zaGlwID0gdHJ1ZTtcclxuICAgICAgICAgIHBvc2l0aW9uLnB1c2goW3ksIHggKyBpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hpcExpc3QucHVzaCh7IHNoaXAsIHBvc2l0aW9uIH0pO1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRhdGVTaGlwKGxlbmd0aCwgY29vcmRzLCBheGlzID0gJ3lBeGlzJykge1xyXG4gICAgICBjb25zdCB5ID0gY29vcmRzWzBdO1xyXG4gICAgICBjb25zdCB4ID0gY29vcmRzWzFdO1xyXG4gICAgICBpZiAoY29vcmRzWzBdID4gOSB8fCBjb29yZHNbMF0gPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmIChjb29yZHNbMV0gPiA5IHx8IGNvb3Jkc1sxXSA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChheGlzID09PSAneUF4aXMnKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geSAtIGxlbmd0aCArIDE7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneEF4aXMnKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geCArIGxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA+IDkpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGF4aXMgPT09ICd5QXhpcycpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdZID0geSAtIGk7XHJcbiAgICAgICAgICBpZiAodGhpcy5ib2FyZFtuZXdZXVt4XS5zaGlwKSByZXR1cm4gZmFsc2U7Ly8gU0hJUCBPTiBQT1NJVElPTlxyXG4gICAgICAgICAgaWYgKHggLSAxID49IDApIHsgLy8gSUYgSVMgTk9UIE9OIExFRlQgQk9SREVSXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3ggLSAxXS5zaGlwKSByZXR1cm4gZmFsc2U7Ly8gTEVGVFxyXG4gICAgICAgICAgICBpZiAobmV3WSAtIDEgPj0gMCAmJiB0aGlzLmJvYXJkW25ld1kgLSAxXVt4IC0gMV0uc2hpcCkge1xyXG4gICAgICAgICAgICAgIC8vIElGIE5PVCBVUFBFUiBCT1JERVIgLT4gTEVGVC1VUDtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld1kgKyAxIDw9IDkgJiYgdGhpcy5ib2FyZFtuZXdZICsgMV1beCAtIDFdLnNoaXApIHtcclxuICAgICAgICAgICAgICAvLyBJRiBOT1QgT04gTE9XRVJCT1JERVIgLT4gTEVGVC1ET1dOXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoeCArIDEgPD0gOSkgeyAvLyBJRiBJUyBOT1QgT04gUklHSFQgQk9SREVSXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW25ld1ldW3ggKyAxXS5zaGlwKSByZXR1cm4gZmFsc2U7IC8vIFJJR0hUXHJcbiAgICAgICAgICAgIGlmIChuZXdZIC0gMSA+PSAwICYmIHRoaXMuYm9hcmRbbmV3WSAtIDFdW3ggKyAxXS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIFVQUEVSIEJPUkRFUiAtPiBSSUdIVC1VUFxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3WSArIDEgPD0gOSAmJiB0aGlzLmJvYXJkW25ld1kgKyAxXVt4ICsgMV0uc2hpcCkge1xyXG4gICAgICAgICAgICAgIC8vIElGIE5PVCBPTiBMT1dFUkJPUkRFUiAtPiBSSUdIVC1ET1dOXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgeyAvLyBJRiBGSVJTVFxyXG4gICAgICAgICAgICBpZiAobmV3WSArIDEgPD0gOSAmJiB0aGlzLmJvYXJkW25ld1kgKyAxXVt4XS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIExPV0VSIEJPUkRFUiAtPiBET1dOXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoIC0gMSkgeyAvLyBJRiBMQVNUIElURVJBVElPTlxyXG4gICAgICAgICAgICBpZiAobmV3WSAtIDEgPj0gMCAmJiB0aGlzLmJvYXJkW25ld1kgLSAxXVt4XS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIFVQUEVSIEJPUkRFUiAtPiBVUFxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneEF4aXMnKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgbmV3WCA9IHggKyBpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1bbmV3WF0uc2hpcCkgcmV0dXJuIGZhbHNlOy8vIFNISVAgT04gUE9TSVRJT05cclxuICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7IC8vIElGIElTIE5PVCBPTiBVUFBFUiBCT1JERVJcclxuICAgICAgICAgICAgaWYgKG5ld1ggLSAxID49IDAgJiYgdGhpcy5ib2FyZFt5IC0gMV1bbmV3WCAtIDFdLnNoaXApIHtcclxuICAgICAgICAgICAgICAvLyBJRiBOT1QgT04gTEVGVCBCT1JERVIgLT4gTEVGVC1VUFxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5IC0gMV1bbmV3WF0uc2hpcCkgcmV0dXJuIGZhbHNlOy8vIFVQXHJcbiAgICAgICAgICAgIGlmIChuZXdYICsgMSA8PSA5ICYmIHRoaXMuYm9hcmRbeSAtIDFdW25ld1ggKyAxXS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIFJJR0hUIEJPUkRFUiAtPiBSSUdIVC1VUFxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHkgKyAxIDw9IDkpIHsgLy8gSUYgSVMgTk9UIE9OIExPV0VSIEJPUkRFUlxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5ICsgMV1bbmV3WF0uc2hpcCkgcmV0dXJuIGZhbHNlOyAvLyBET1dOXHJcbiAgICAgICAgICAgIGlmIChuZXdYICsgMSA8PSA5ICYmIHRoaXMuYm9hcmRbeSArIDFdW25ld1ggKyAxXS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIFJJR0hUIEJPUkRFUiAtPiBSSUdIVC1ET1dOXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdYIC0gMSA+PSAwICYmIHRoaXMuYm9hcmRbeSArIDFdW25ld1ggLSAxXS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIExFRlQgQk9SRFJERVIgLT4gTEVGVC1ET1dOXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgeyAvLyBJRiBGSVJTVFxyXG4gICAgICAgICAgICBpZiAobmV3WCAtIDEgPj0gMCAmJiB0aGlzLmJvYXJkW3ldW25ld1ggLSAxXS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSUYgTk9UIE9OIExFRlQgQk9SREVSIC0+IExFRlRcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpID09PSBsZW5ndGggLSAxKSB7IC8vIElGIExBU1QgSVRFUkFUSU9OXHJcbiAgICAgICAgICAgIGlmIChuZXdYICsgMSA8PSA5ICYmIHRoaXMuYm9hcmRbeV1bbmV3WCArIDFdLnNoaXApIHtcclxuICAgICAgICAgICAgICAvLyBJRiBOT1QgT04gUklHSFQgQk9SREVSIC0+IFJJR0hUXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0udmFsdWUgPSAnbWlzcyc7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuc2hpcExpc3QpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgICAgICBmb3IgKGNvbnN0IHNoaXBQb3NpdGlvbiBvZiBrZXkucG9zaXRpb24pIHtcclxuICAgICAgICAgIGlmIChzaGlwUG9zaXRpb25bMF0gPT09IHBvc2l0aW9uWzBdICYmIHNoaXBQb3NpdGlvblsxXSA9PT0gcG9zaXRpb25bMV0pIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLnZhbHVlID0gJ2hpdCc7XHJcbiAgICAgICAgICAgIGtleS5zaGlwLmhpdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdW5rKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGVja1N1bmsoKTtcclxuICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKHBvc2l0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tTdW5rKCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5zaGlwTGlzdCkge1xyXG4gICAgICAgIGlmIChrZXkuc2hpcC5pc1N1bmsgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbGxTdW5rID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgeyBnYW1lYm9hcmQgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbmNvbnN0IHBsYXllciA9IHtcclxuICBwbGF5ZXIxOiB7XHJcbiAgICBnYW1lYm9hcmQ6IHt9LFxyXG4gICAgc2hvdHNGaXJlZDogW10sXHJcbiAgICBhdHRhY2s6IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICBmb3IgKGxldCBrZXkgb2YgcGxheWVyLnBsYXllcjEuc2hvdHNGaXJlZCkge1xyXG4gICAgICAgIGlmIChrZXlbMF0gPT09IHBvc2l0aW9uWzBdICYmIGtleVsxXSA9PT0gcG9zaXRpb25bMV0pIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXIucGxheWVyMi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XHJcbiAgICAgIHBsYXllci5wbGF5ZXIxLnNob3RzRmlyZWQucHVzaChwb3NpdGlvbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsYXllcjI6IHtcclxuICAgIGdhbWVib2FyZDoge30sXHJcbiAgICBzaG90c0ZpcmVkOiBbXSxcclxuICAgIEFJOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGNvbnN0IGF0dGFja1N1Y2VzcyA9IHBsYXllci5wbGF5ZXIyLmF0dGFjayhbYSwgYl0pO1xyXG4gICAgICBpZiAoIWF0dGFja1N1Y2VzcykgcGxheWVyLnBsYXllcjIuQUkoKTtcclxuICAgIH0sXHJcbiAgICBhdHRhY2s6IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICBmb3IgKGxldCBrZXkgb2YgcGxheWVyLnBsYXllcjIuc2hvdHNGaXJlZCkge1xyXG4gICAgICAgIGlmIChrZXlbMF0gPT09IHBvc2l0aW9uWzBdICYmIGtleVsxXSA9PT0gcG9zaXRpb25bMV0pIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXIucGxheWVyMS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XHJcbiAgICAgIHBsYXllci5wbGF5ZXIyLnNob3RzRmlyZWQucHVzaChwb3NpdGlvbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGxheWVyIH07XHJcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoID0gMCkgPT4ge1xyXG4gIGxldCBsZW4gPSBsZW5ndGg7XHJcbiAgaWYgKGxlbiA8PSAyKSBsZW4gKz0gMTtcclxuICByZXR1cm4ge1xyXG4gICAgbGVuZ3RoOiBsZW4sXHJcbiAgICBoaXRMaXN0OiBbXSxcclxuICAgIGlzU3VuazogZmFsc2UsXHJcbiAgICBoaXQocG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5oaXRMaXN0LnB1c2gocG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnN1bmsoKTtcclxuICAgIH0sXHJcbiAgICBzdW5rKCkge1xyXG4gICAgICBpZiAodGhpcy5oaXRMaXN0Lmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaXNTdW5rID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNoaXAgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9