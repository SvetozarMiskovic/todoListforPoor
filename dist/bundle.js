/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rstate", [], factory);
	else if(typeof exports === 'object')
		exports["rstate"] = factory();
	else
		root["rstate"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* General */\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  list-style: none;\\r\\n  border-bottom: 1px #63b4b8 solid;\\r\\n  word-break: break-all;\\r\\n  flex-direction: row;\\r\\n  margin: 0.5rem 0;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nli i {\\r\\n  cursor: pointer;\\r\\n  margin-top: 0.5rem;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 1100px;\\r\\n  margin: 1rem auto;\\r\\n  position: relative;\\r\\n  font-family: 'Architects Daughter', cursive;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: #fff;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  grid-template-rows: 2fr;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\ni:hover {\\r\\n  background-color: #a9e4d7;\\r\\n  -webkit-background-clip: text;\\r\\n  background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Top Part */\\r\\n.sort {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 2rem;\\r\\n  position: relative;\\r\\n  left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n  background-color: #4b3869;\\r\\n  padding: 1.3rem;\\r\\n  border-radius: 3%;\\r\\n  color: #fff;\\r\\n  width: 80%;\\r\\n}\\r\\n.sort label {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n.todo-section {\\r\\n  background-color: rgba(241, 241, 241, 0.459);\\r\\n  padding: 0.8rem;\\r\\n  font-size: 3rem;\\r\\n  border-radius: 3%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  background-color: #4b3869;\\r\\n\\r\\n  padding: 1.5rem;\\r\\n  color: white;\\r\\n  border-radius: 3%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  outline: none;\\r\\n  width: 100%;\\r\\n  height: 2rem;\\r\\n  text-align: center;\\r\\n  border: none;\\r\\n  background-color: #63b4b8;\\r\\n  color: #fff;\\r\\n  border-radius: 3%;\\r\\n  font-size: 1.2rem;\\r\\n  font-family: 'Architects Daughter', cursive;\\r\\n}\\r\\nselect,\\r\\noption {\\r\\n  outline: none;\\r\\n  height: 2rem;\\r\\n  text-align: center;\\r\\n  border: none;\\r\\n  background-color: #63b4b8;\\r\\n  font-size: 1.2rem;\\r\\n  color: #fff;\\r\\n  width: 50%;\\r\\n  cursor: pointer;\\r\\n  border-radius: 3%;\\r\\n}\\r\\n\\r\\n.newListBtn {\\r\\n  text-align: center;\\r\\n  width: 20%;\\r\\n  height: 2rem;\\r\\n  background-color: #63b4b8;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n  border-radius: 3%;\\r\\n  cursor: pointer;\\r\\n  transform: scale(1);\\r\\n  transition: ease-out 0.2s;\\r\\n  font-size: 1.2rem;\\r\\n  font-family: 'Architects Daughter', cursive;\\r\\n}\\r\\n\\r\\n.newListBtn:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\ninput[type='submit'] {\\r\\n  text-align: center;\\r\\n  width: 20%;\\r\\n  height: 2rem;\\r\\n  background-color: #63b4b8;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n  border-radius: 3%;\\r\\n  cursor: pointer;\\r\\n  transform: scale(1);\\r\\n  transition: ease-out 0.2s;\\r\\n  font-size: 1.2rem;\\r\\n  font-family: 'Architects Daughter', cursive;\\r\\n}\\r\\n\\r\\ninput[type='submit']:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\n\\r\\n.saveBtn {\\r\\n  background-color: #63b4b8;\\r\\n  color: #fff;\\r\\n  width: 20%;\\r\\n  height: 2rem;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-radius: 3%;\\r\\n  font-family: inherit;\\r\\n  font-size: 1.2rem;\\r\\n  transform: scale(1);\\r\\n  transition: ease-out 0.2s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.saveBtn:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\n/* Bottom part */\\r\\n\\r\\n.task-section {\\r\\n  background-color: rgba(241, 241, 241, 0.459);\\r\\n  padding: 0.5rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-weight: 200;\\r\\n  margin: 1rem 0;\\r\\n  word-break: break-all;\\r\\n}\\r\\n\\r\\n.title input {\\r\\n  width: 50%;\\r\\n}\\r\\n.task-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #4b3869;\\r\\n  margin: 1rem 0;\\r\\n  padding: 1.5rem;\\r\\n  color: white;\\r\\n  border-radius: 3%;\\r\\n}\\r\\n.title {\\r\\n  text-align: center;\\r\\n}\\r\\n.fa-times-circle {\\r\\n  align-self: center;\\r\\n  margin: 0.5rem;\\r\\n}\\r\\n.removeList {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n.btns {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n\\r\\n  gap: 0.65rem;\\r\\n}\\r\\n.clear-all {\\r\\n  border: 1px solid black;\\r\\n  background-color: #63b4b8;\\r\\n  padding: 1rem;\\r\\n  margin: 0.5rem auto;\\r\\n  border-radius: 5%;\\r\\n  cursor: pointer;\\r\\n  transform: scale(1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\n.color-picker {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  margin: 1.3rem 0;\\r\\n}\\r\\n.cab {\\r\\n  display: flex;\\r\\n  width: 50%;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  margin: 1.5rem 0;\\r\\n}\\r\\n.applyBtn {\\r\\n  background-color: #63b4b8;\\r\\n  color: #fff;\\r\\n  width: 40%;\\r\\n  height: 2rem;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-radius: 3%;\\r\\n  font-family: inherit;\\r\\n  font-size: 1.2rem;\\r\\n  transform: scale(1);\\r\\n  transition: ease-out 0.2s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.applyBtn:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\ninput[type='color'] {\\r\\n  width: 15rem;\\r\\n  height: 2rem;\\r\\n  border: none;\\r\\n  transform: scale(1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\ninput[type='color']:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\ninput[type='color']::-webkit-color-swatch-wrapper {\\r\\n  padding: 0;\\r\\n  border: 2px #63b4b8 solid;\\r\\n}\\r\\ninput[type='color']::-webkit-color-swatch {\\r\\n  border: none;\\r\\n}\\r\\n.clear-all a {\\r\\n  color: #fff;\\r\\n  text-decoration: none;\\r\\n  padding: 2rem;\\r\\n}\\r\\n.clear-all:hover {\\r\\n  transform: scale(1.1);\\r\\n  transition: ease-out 0.2s;\\r\\n}\\r\\n\\r\\n/* Greetings */\\r\\n.greetings {\\r\\n  margin: 1rem 0;\\r\\n}\\r\\n.greetings .container {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n  flex-direction: column;\\r\\n  background-color: #4b3869;\\r\\n  padding: 0.8rem;\\r\\n  border-radius: 3%;\\r\\n  align-items: center;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.timezones {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: space-evenly;\\r\\n  justify-content: space-evenly;\\r\\n  text-align: center;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n.welcome {\\r\\n  text-align: center;\\r\\n}\\r\\n.welcome h2 {\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\n.welcome p {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.box {\\r\\n  background-color: #63b4b8;\\r\\n  padding: 0.8rem;\\r\\n  border-radius: 10%;\\r\\n  margin: 1rem;\\r\\n}\\r\\n.box h3 {\\r\\n  font-weight: 300;\\r\\n  font-size: 2rem;\\r\\n  margin: 1.5rem 1rem;\\r\\n  color: #664e88;\\r\\n}\\r\\n.box p {\\r\\n  font-size: 1.8rem;\\r\\n  line-height: 3rem;\\r\\n  padding: 0.8rem;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\ninput[type='color'] {\\r\\n  outline: none;\\r\\n\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .timezones {\\r\\n    display: grid;\\r\\n    grid-template-rows: 1fr;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    gap: 0.1rem;\\r\\n\\r\\n    justify-items: center;\\r\\n  }\\r\\n  .box {\\r\\n    padding: 0.5rem;\\r\\n    margin: 0.5rem 0rem;\\r\\n    width: 80%;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n  .box p {\\r\\n    line-height: 2rem;\\r\\n    padding: 0;\\r\\n    font-size: 1.3rem;\\r\\n  }\\r\\n  .box h3 {\\r\\n    margin: 0;\\r\\n    font-size: 1.4rem;\\r\\n  }\\r\\n\\r\\n  .todo-section form {\\r\\n    display: grid;\\r\\n\\r\\n    grid-template-rows: 1fr;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n  input[type='submit'],\\r\\n  input[type='text'],\\r\\n  button[type='button'],\\r\\n  input[type='color'],\\r\\n  select {\\r\\n    width: 100%;\\r\\n  }\\r\\n  .saveBtn {\\r\\n    margin: 1.5rem 0;\\r\\n  }\\r\\n  .btns {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    margin: 0 0.5rem;\\r\\n    gap: 0.25rem;\\r\\n  }\\r\\n  label[for='todoTask'] {\\r\\n    margin: 2rem 0;\\r\\n  }\\r\\n  .cab {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rstate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rstate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rstate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rstate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rstate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rstate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rstate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rstate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rstate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rstate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _createTaskItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskItem */ \"./src/createTaskItem.js\");\n/* harmony import */ var _createDeleteTaskButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDeleteTaskButton */ \"./src/createDeleteTaskButton.js\");\n\r\n\r\n\r\nfunction addTask(createID, text) {\r\n  // Create a task\r\n  const task = (0,_createTaskItem__WEBPACK_IMPORTED_MODULE_0__.createTaskItem)(createID);\r\n  // Create the remove button\r\n  const span = (0,_createDeleteTaskButton__WEBPACK_IMPORTED_MODULE_1__.createDeleteTaskButton)(createID);\r\n\r\n  // Add to DOM\r\n  task.textContent = text;\r\n  task.appendChild(span);\r\n\r\n  if (text) return task;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/addTask.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskSection\": () => (/* binding */ taskSection),\n/* harmony export */   \"selectList\": () => (/* binding */ selectList),\n/* harmony export */   \"selectSort\": () => (/* binding */ selectSort)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getElsAndAppend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElsAndAppend */ \"./src/getElsAndAppend.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n/* harmony import */ var _getLS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLS */ \"./src/getLS.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createList */ \"./src/createList.js\");\n/* harmony import */ var _recordEditID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordEditID */ \"./src/recordEditID.js\");\n/* harmony import */ var _sortByNewest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortByNewest */ \"./src/sortByNewest.js\");\n/* harmony import */ var _sortByOldest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sortByOldest */ \"./src/sortByOldest.js\");\n/* harmony import */ var _sortByChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sortByChange */ \"./src/sortByChange.js\");\n/* harmony import */ var _refreshDOM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refreshDOM */ \"./src/refreshDOM.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskSection = document.querySelector('.task-section');\r\nconst selectList = document.getElementById('select-list');\r\nconst selectSort = document.getElementById('sort');\r\n\r\nconst submitBtn = document.getElementById('submitBtn');\r\nconst createListBtn = document.querySelector('.newListBtn');\r\n\r\nconst input = document.querySelector('#todoTask');\r\ndocument.addEventListener('DOMContentLoaded', _getLS__WEBPACK_IMPORTED_MODULE_3__.getLS);\r\n\r\nsubmitBtn.onclick = function (e) {\r\n  e.preventDefault();\r\n  const elNum = document.querySelectorAll('.task-container').length;\r\n  const sortValue = selectSort.value;\r\n  let createID = dayjs().valueOf();\r\n\r\n  if (elNum > 0) {\r\n    const selectedValue = selectList.value;\r\n\r\n    const element = (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_1__.getElsAndAppend)(selectedValue, createID, input.value);\r\n    const editEl = (0,_recordEditID__WEBPACK_IMPORTED_MODULE_5__.recordEditID)(element);\r\n    if (sortValue == 'Newest updates') {\r\n      (0,_sortByNewest__WEBPACK_IMPORTED_MODULE_6__.sortByNewest)(editEl);\r\n    } else if (sortValue == 'Oldest updates') {\r\n      (0,_sortByOldest__WEBPACK_IMPORTED_MODULE_7__.sortByOldest)(editEl);\r\n    }\r\n    (0,_saveLS__WEBPACK_IMPORTED_MODULE_2__.saveLS)();\r\n  } else {\r\n    if (input.value) {\r\n      const listPrompt = prompt('Please name your list!', 'New List');\r\n      if (!listPrompt) {\r\n        input.value = '';\r\n        return;\r\n      } else {\r\n        const element = (0,_createList__WEBPACK_IMPORTED_MODULE_4__.createList)(createID, listPrompt);\r\n        (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_1__.getElsAndAppend)(createID, createID + 1, input.value);\r\n        const editEl = (0,_recordEditID__WEBPACK_IMPORTED_MODULE_5__.recordEditID)(element);\r\n        if (sortValue == 'Newest updates') {\r\n          (0,_sortByNewest__WEBPACK_IMPORTED_MODULE_6__.sortByNewest)(editEl);\r\n        } else if (sortValue == 'Oldest updates') {\r\n          (0,_sortByOldest__WEBPACK_IMPORTED_MODULE_7__.sortByOldest)(editEl);\r\n        }\r\n        (0,_saveLS__WEBPACK_IMPORTED_MODULE_2__.saveLS)();\r\n      }\r\n    }\r\n  }\r\n  input.value = '';\r\n};\r\n\r\ncreateListBtn.onclick = function () {\r\n  let createID = dayjs().valueOf();\r\n\r\n  const listPrompt = prompt('Please name your list!', 'New List');\r\n  if (!listPrompt) {\r\n    input.value = '';\r\n    return;\r\n  } else {\r\n    (0,_createList__WEBPACK_IMPORTED_MODULE_4__.createList)(createID, listPrompt);\r\n    (0,_saveLS__WEBPACK_IMPORTED_MODULE_2__.saveLS)();\r\n  }\r\n};\r\n\r\nfunction compareAsc(a, b) {\r\n  return b.dataset.edit - a.dataset.edit;\r\n}\r\n\r\nfunction compareDesc(a, b) {\r\n  return a.dataset.edit - b.dataset.edit;\r\n}\r\nselectSort.onchange = function () {\r\n  const lists = document.querySelectorAll('.task-container');\r\n  const liste = [...lists];\r\n  if (selectSort.value === 'Newest updates') {\r\n    const sorted = liste.sort(compareAsc);\r\n    console.log(sorted);\r\n    (0,_refreshDOM__WEBPACK_IMPORTED_MODULE_9__.refreshDOM)(sorted);\r\n  } else {\r\n    const sorted = liste.sort(compareDesc);\r\n    console.log(sorted);\r\n    (0,_refreshDOM__WEBPACK_IMPORTED_MODULE_9__.refreshDOM)(sorted);\r\n    console.log('Staro');\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://rstate/./src/app.js?");

/***/ }),

/***/ "./src/createDeleteListButton.js":
/*!***************************************!*\
  !*** ./src/createDeleteListButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDeleteListButton\": () => (/* binding */ createDeleteListButton)\n/* harmony export */ });\n/* harmony import */ var _getListIdAndRemove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getListIdAndRemove */ \"./src/getListIdAndRemove.js\");\n\r\n\r\nfunction createDeleteListButton(listID) {\r\n  const removeBtn = document.createElement('i');\r\n  removeBtn.setAttribute('class', 'fas fa-times-circle removeList');\r\n  removeBtn.setAttribute('data-id', listID);\r\n  removeBtn.addEventListener('click', _getListIdAndRemove__WEBPACK_IMPORTED_MODULE_0__.getListIdAndRemove);\r\n  return removeBtn;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createDeleteListButton.js?");

/***/ }),

/***/ "./src/createDeleteTaskButton.js":
/*!***************************************!*\
  !*** ./src/createDeleteTaskButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDeleteTaskButton\": () => (/* binding */ createDeleteTaskButton)\n/* harmony export */ });\n/* harmony import */ var _getIdAndRemove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIdAndRemove */ \"./src/getIdAndRemove.js\");\n\r\n\r\nfunction createDeleteTaskButton(itemID) {\r\n  const span = document.createElement('span');\r\n  span.setAttribute('class', 'btns');\r\n\r\n  const removeBtn = document.createElement('i');\r\n  removeBtn.setAttribute('class', 'fas fa-times-circle removeBtn');\r\n  removeBtn.setAttribute('data-id', itemID);\r\n\r\n  removeBtn.addEventListener('click', _getIdAndRemove__WEBPACK_IMPORTED_MODULE_0__.getIdAndRemove);\r\n\r\n  span.appendChild(removeBtn);\r\n  return span;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createDeleteTaskButton.js?");

/***/ }),

/***/ "./src/createList.js":
/*!***************************!*\
  !*** ./src/createList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList)\n/* harmony export */ });\n/* harmony import */ var _createListElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createListElement */ \"./src/createListElement.js\");\n/* harmony import */ var _createDeleteListButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDeleteListButton */ \"./src/createDeleteListButton.js\");\n/* harmony import */ var _createTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskList */ \"./src/createTaskList.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _createOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createOption */ \"./src/createOption.js\");\n/* harmony import */ var _createListTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createListTitle */ \"./src/createListTitle.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createList(createID, text, editID = '') {\r\n  // Create a task container\r\n\r\n  const taskContainer = (0,_createListElement__WEBPACK_IMPORTED_MODULE_0__.createListElement)(createID, editID);\r\n  const removeBtn = (0,_createDeleteListButton__WEBPACK_IMPORTED_MODULE_1__.createDeleteListButton)(createID);\r\n  const title = (0,_createListTitle__WEBPACK_IMPORTED_MODULE_5__.createListTitle)(createID, text);\r\n  const ul = (0,_createTaskList__WEBPACK_IMPORTED_MODULE_2__.createTaskList)(createID);\r\n\r\n  // Add elements to DOM\r\n  taskContainer.appendChild(removeBtn);\r\n  taskContainer.appendChild(title);\r\n  taskContainer.appendChild(ul);\r\n  _app__WEBPACK_IMPORTED_MODULE_3__.taskSection.appendChild(taskContainer);\r\n\r\n  // Create the select item\r\n  const option = (0,_createOption__WEBPACK_IMPORTED_MODULE_4__.createOption)(createID, title.textContent);\r\n  // Add option to DOM\r\n  _app__WEBPACK_IMPORTED_MODULE_3__.selectList.appendChild(option);\r\n\r\n  return taskContainer;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createList.js?");

/***/ }),

/***/ "./src/createListElement.js":
/*!**********************************!*\
  !*** ./src/createListElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement)\n/* harmony export */ });\nfunction createListElement(listID, editID) {\r\n  const taskContainer = document.createElement('div');\r\n  taskContainer.setAttribute('class', 'task-container');\r\n  taskContainer.setAttribute('data-id', listID);\r\n  taskContainer.setAttribute('data-edit', editID);\r\n  return taskContainer;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createListElement.js?");

/***/ }),

/***/ "./src/createListTitle.js":
/*!********************************!*\
  !*** ./src/createListTitle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListTitle\": () => (/* binding */ createListTitle)\n/* harmony export */ });\nfunction createListTitle(listID, text) {\r\n  const title = document.createElement('h3');\r\n  title.setAttribute('data-id', listID);\r\n  title.setAttribute('class', 'title');\r\n  title.textContent = text;\r\n  return title;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createListTitle.js?");

/***/ }),

/***/ "./src/createOption.js":
/*!*****************************!*\
  !*** ./src/createOption.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createOption\": () => (/* binding */ createOption)\n/* harmony export */ });\nfunction createOption(listID, text) {\r\n  const option = document.createElement('option');\r\n  option.setAttribute('data-id', listID);\r\n  option.setAttribute('value', listID);\r\n  option.innerText = text;\r\n  return option;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createOption.js?");

/***/ }),

/***/ "./src/createTaskItem.js":
/*!*******************************!*\
  !*** ./src/createTaskItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskItem\": () => (/* binding */ createTaskItem)\n/* harmony export */ });\nfunction createTaskItem(id) {\r\n  const task = document.createElement('li');\r\n  task.setAttribute('data-id', id);\r\n  task.setAttribute('class', 'task-item');\r\n  return task;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createTaskItem.js?");

/***/ }),

/***/ "./src/createTaskList.js":
/*!*******************************!*\
  !*** ./src/createTaskList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskList\": () => (/* binding */ createTaskList)\n/* harmony export */ });\nfunction createTaskList(listID) {\r\n  const ul = document.createElement('ul');\r\n  ul.setAttribute('class', 'task-list');\r\n  ul.setAttribute('data-id', listID);\r\n  return ul;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createTaskList.js?");

/***/ }),

/***/ "./src/deleteList.js":
/*!***************************!*\
  !*** ./src/deleteList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteList\": () => (/* binding */ deleteList)\n/* harmony export */ });\nfunction deleteList(listID) {\r\n  const listsArr = [];\r\n  const lists = document.querySelectorAll('.task-container');\r\n  listsArr.push(...lists);\r\n\r\n  const listToDel = listsArr.find(list => list.dataset.id === listID);\r\n\r\n  listToDel.remove();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/deleteList.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _recordEditID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recordEditID */ \"./src/recordEditID.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _sortByNewest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortByNewest */ \"./src/sortByNewest.js\");\n/* harmony import */ var _sortByOldest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortByOldest */ \"./src/sortByOldest.js\");\n\r\n\r\n\r\n\r\nfunction deleteTask(itemID) {\r\n  const items = [];\r\n  const tasks = document.querySelectorAll('.task-item');\r\n  items.push(...tasks);\r\n  const sortValue = _app__WEBPACK_IMPORTED_MODULE_1__.selectSort.value;\r\n  const task = items.find(item => item.dataset.id === itemID);\r\n  const taskContainer = task.parentElement.parentElement;\r\n\r\n  task.remove();\r\n\r\n  const editEl = (0,_recordEditID__WEBPACK_IMPORTED_MODULE_0__.recordEditID)(taskContainer);\r\n  if (sortValue == 'Newest updates') {\r\n    (0,_sortByNewest__WEBPACK_IMPORTED_MODULE_2__.sortByNewest)(editEl);\r\n  } else if (sortValue == 'Oldest updates') {\r\n    (0,_sortByOldest__WEBPACK_IMPORTED_MODULE_3__.sortByOldest)(editEl);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/deleteTask.js?");

/***/ }),

/***/ "./src/getElsAndAppend.js":
/*!********************************!*\
  !*** ./src/getElsAndAppend.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElsAndAppend\": () => (/* binding */ getElsAndAppend)\n/* harmony export */ });\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n\r\n\r\nfunction getElsAndAppend(selectValue, id, inputValue) {\r\n  const liste = [];\r\n  const lists = document.querySelectorAll('.task-container');\r\n  liste.push(...lists);\r\n\r\n  const element = liste.find(list => list.dataset.id === `${selectValue}`);\r\n  const task = (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)(id, inputValue);\r\n\r\n  if (task && element) {\r\n    element.children[2].appendChild(task);\r\n    return element;\r\n  } else {\r\n    return;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getElsAndAppend.js?");

/***/ }),

/***/ "./src/getIdAndRemove.js":
/*!*******************************!*\
  !*** ./src/getIdAndRemove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getIdAndRemove\": () => (/* binding */ getIdAndRemove)\n/* harmony export */ });\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n\r\n\r\n\r\nfunction getIdAndRemove(e) {\r\n  const elementID = e.target.dataset.id;\r\n  (0,_deleteTask__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(elementID);\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_1__.saveLS)();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getIdAndRemove.js?");

/***/ }),

/***/ "./src/getLS.js":
/*!**********************!*\
  !*** ./src/getLS.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLS\": () => (/* binding */ getLS)\n/* harmony export */ });\n/* harmony import */ var _getElsAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElsAndAppend */ \"./src/getElsAndAppend.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ \"./src/createList.js\");\n\r\n\r\n\r\nfunction getLS() {\r\n  const lists = JSON.parse(localStorage.getItem('TodoLists'));\r\n  if (lists)\r\n    lists.forEach(function (listLS) {\r\n      (0,_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(listLS.listID, listLS.title, listLS.editID);\r\n\r\n      listLS.items.forEach(function (taskItem) {\r\n        (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_0__.getElsAndAppend)(listLS.listID, taskItem.itemID, taskItem.text);\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getLS.js?");

/***/ }),

/***/ "./src/getListIdAndRemove.js":
/*!***********************************!*\
  !*** ./src/getListIdAndRemove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListIdAndRemove\": () => (/* binding */ getListIdAndRemove)\n/* harmony export */ });\n/* harmony import */ var _deleteList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteList */ \"./src/deleteList.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n/* harmony import */ var _refreshDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshDOM */ \"./src/refreshDOM.js\");\n\r\n\r\n\r\n\r\n\r\nfunction getListIdAndRemove(e) {\r\n  const elementID = e.target.dataset.id;\r\n\r\n  (0,_deleteList__WEBPACK_IMPORTED_MODULE_0__.deleteList)(elementID);\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_1__.saveLS)();\r\n  (0,_refreshDOM__WEBPACK_IMPORTED_MODULE_2__.refreshDOM)();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getListIdAndRemove.js?");

/***/ }),

/***/ "./src/recordEditID.js":
/*!*****************************!*\
  !*** ./src/recordEditID.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recordEditID\": () => (/* binding */ recordEditID)\n/* harmony export */ });\nfunction recordEditID(element) {\r\n  const editID = dayjs().valueOf();\r\n  element.setAttribute('data-edit', editID);\r\n\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/recordEditID.js?");

/***/ }),

/***/ "./src/refreshDOM.js":
/*!***************************!*\
  !*** ./src/refreshDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshDOM\": () => (/* binding */ refreshDOM)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ \"./src/createList.js\");\n/* harmony import */ var _getElsAndAppend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getElsAndAppend */ \"./src/getElsAndAppend.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n\r\n\r\n\r\n\r\n\r\nfunction refreshDOM(element = null) {\r\n  const lists = document.querySelectorAll('.task-container');\r\n\r\n  _app__WEBPACK_IMPORTED_MODULE_0__.taskSection.replaceChildren();\r\n  _app__WEBPACK_IMPORTED_MODULE_0__.selectList.replaceChildren();\r\n  if (element) {\r\n    element.forEach(function (list) {\r\n      (0,_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(\r\n        list.dataset.id,\r\n        list.children[1].textContent,\r\n        list.dataset.edit\r\n      );\r\n\r\n      const tasks = list.childNodes[2].childNodes;\r\n      tasks.forEach(function (task) {\r\n        (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_2__.getElsAndAppend)(list.dataset.id, task.dataset.id, task.textContent);\r\n      });\r\n    });\r\n  } else {\r\n    lists.forEach(function (list) {\r\n      (0,_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(\r\n        list.dataset.id,\r\n        list.children[1].textContent,\r\n        list.dataset.edit\r\n      );\r\n\r\n      const tasks = list.childNodes[2].childNodes;\r\n      tasks.forEach(function (task) {\r\n        (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_2__.getElsAndAppend)(list.dataset.id, task.dataset.id, task.textContent);\r\n      });\r\n    });\r\n  }\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_3__.saveLS)();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/refreshDOM.js?");

/***/ }),

/***/ "./src/saveLS.js":
/*!***********************!*\
  !*** ./src/saveLS.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveLS\": () => (/* binding */ saveLS)\n/* harmony export */ });\nfunction saveLS() {\r\n  const lists = document.querySelectorAll('.task-container');\r\n  let todoList = [];\r\n\r\n  lists.forEach(function (list) {\r\n    const tasks = list.childNodes[2].childNodes;\r\n    let data = { listID: '', items: [], title: '', editID: '' };\r\n    data.listID = list.dataset.id;\r\n    data.title = list.children[1].textContent;\r\n    data.editID = list.dataset.edit ? list.dataset.edit : '';\r\n    tasks.forEach(function (t) {\r\n      let taskData = { itemID: '', text: '' };\r\n      // Add item ID to task data\r\n      taskData.itemID = t.dataset.id;\r\n      // Add item text to task data\r\n      taskData.text = t.innerText;\r\n      // Push taskData object to data object\r\n      data.items.push(taskData);\r\n      taskData = { itemID: '', text: '' };\r\n    });\r\n    todoList.push(data);\r\n\r\n    data = { listID: '', items: [], title: '', editID: '' };\r\n  });\r\n\r\n  localStorage.setItem('TodoLists', JSON.stringify(todoList));\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/saveLS.js?");

/***/ }),

/***/ "./src/sortByChange.js":
/*!*****************************!*\
  !*** ./src/sortByChange.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByChange\": () => (/* binding */ sortByChange)\n/* harmony export */ });\nfunction sortByChange(value) {\r\n  if (value === 'Newest updates') {\r\n    console.log('Novi');\r\n  } else if (value === 'Oldest updates') {\r\n    console.log('Starina');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/sortByChange.js?");

/***/ }),

/***/ "./src/sortByNewest.js":
/*!*****************************!*\
  !*** ./src/sortByNewest.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByNewest\": () => (/* binding */ sortByNewest)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n/* harmony import */ var _refreshDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshDOM */ \"./src/refreshDOM.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction sortByNewest(element) {\r\n  // When something is being added or removed\r\n  const lists = document.querySelectorAll('.task-container');\r\n  const liste = [];\r\n  liste.push(...lists);\r\n  const item = liste.find(list => list.dataset.edit == element.dataset.edit);\r\n\r\n  _app__WEBPACK_IMPORTED_MODULE_0__.taskSection.prepend(item);\r\n\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_1__.saveLS)();\r\n  (0,_refreshDOM__WEBPACK_IMPORTED_MODULE_2__.refreshDOM)();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/sortByNewest.js?");

/***/ }),

/***/ "./src/sortByOldest.js":
/*!*****************************!*\
  !*** ./src/sortByOldest.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByOldest\": () => (/* binding */ sortByOldest)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _refreshDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refreshDOM */ \"./src/refreshDOM.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n\r\n\r\n\r\n\r\n\r\nfunction sortByOldest(element) {\r\n  const lists = document.querySelectorAll('.task-container');\r\n  const liste = [];\r\n  liste.push(...lists);\r\n  const item = liste.find(list => list.dataset.edit == element.dataset.edit);\r\n\r\n  _app__WEBPACK_IMPORTED_MODULE_0__.taskSection.append(item);\r\n\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_2__.saveLS)();\r\n  (0,_refreshDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDOM)();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/sortByOldest.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});