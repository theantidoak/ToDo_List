/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! photos/edit.svg */ \"./src/photos/edit.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! photos/info.svg */ \"./src/photos/info.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! photos/list.svg */ \"./src/photos/list.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! photos/trash-2.svg */ \"./src/photos/trash-2.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n}\\n\\nhtml {\\n    width: 100%;\\n    height: 100%;\\n}\\n\\nbody {\\n    width: 100%;\\n    height: 100%;\\n    margin: 0;\\n}\\n\\n.content {\\n    height: 100%;\\n    display: flex;\\n\\n}\\n\\nbutton {\\n    border: none;\\n    background-color: transparent;\\n    text-align: start;\\n    margin-left: 1rem;\\n    cursor: pointer;\\n}\\n\\naside {\\n    background-color: #024942;\\n    width: fit-content;\\n    padding: 1.5rem 1.5rem;\\n    border-right: 2px solid #04b6aa;\\n    height: 100%;\\n}\\n\\n.home, .projects {\\n    display: flex;\\n    flex-direction: column;\\n    gap: .5rem;\\n    margin-bottom: 1.5rem;\\n}\\n\\n.home button, .projects button {\\n    color: #04b6aa;\\n}\\n\\n.home h3 {\\n    color: #fff;\\n}\\n\\n.projects h3 {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n    margin-bottom: .75rem;\\n    color: #fff;\\n}\\n\\n.projects h3 span button {\\n    margin: 0;\\n    font-size: 1.5rem;\\n    padding: 0 .5rem;\\n    background-color: #04b6aa;\\n    color: white;\\n}\\n\\nmain {\\n    padding: 3rem 2rem 3rem 4rem;\\n    position: relative;\\n    width: 100%;\\n}\\n\\n.todo-container {\\n    width: 12rem;\\n    height: 11rem;\\n    border: 2px solid #04b6aa;\\n    position: relative;\\n    overflow: hidden;\\n}\\n\\n.todo-container .top {\\n    padding: .25rem;\\n    margin-bottom: .5rem;\\n    display: flex;\\n    justify-content: space-between;\\n    background-color: #04b6aa;\\n    color: white;\\n}\\n\\n.todo-container .top p {\\n    margin: 0;\\n}\\n\\n.todo-container h4 {\\n    width: 11rem;\\n    text-decoration: underline;\\n    font-size: 1.25rem;\\n    margin: .75rem auto 0;\\n    text-align: center;\\n    overflow: auto;\\n    height: 3rem;\\n}\\n\\n.todo-container p {\\n    margin-bottom: 0;\\n    width: fit-content;\\n}\\n\\n.todo-container .check-list {\\n    width: fit-content;\\n}\\n\\n.todo-container .date {\\n    font-weight: 600;\\n    width: 100%;\\n    \\n    text-align: center;\\n    padding: 0 0 .5rem;\\n}\\n\\n.todo-container .editables {\\n    position: absolute;\\n    bottom: 0;\\n    outline: 2px solid #04b6aa;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 100%;\\n    height: 2rem;\\n    padding: .25rem 0;\\n}\\n\\n.todo-container .editables button {\\n    width: 1.25rem;\\n    height: 1.25rem;\\n    margin: 0 .5rem;\\n    padding: 0;\\n}\\n\\n.edit  {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: contain;\\n}\\n\\n.description {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: contain;\\n}\\n\\n.checklist {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: contain;\\n}\\n\\n.remove {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: contain;\\n}\\n\\n\\n\\n/*---Form---*/\\n\\n.todo-form {\\n    width: clamp(14rem, 100%, 35rem);\\n    height: auto;\\n    padding: .5rem 2rem 1rem;\\n    margin: 0 auto;\\n    border: 2px solid #024942;\\n    position: absolute;\\n    left: 0;\\n    right: 0;\\n    /* filter: blur(5px); */\\n    \\n}\\n\\n.todo-form h1 {\\n    width: 100%;\\n    margin: 0;\\n    margin-bottom: 2.5rem;\\n    text-align: center;\\n    border-bottom: 2px solid #024942;\\n    color: #024942;\\n}\\n\\n.todo-form h1 span {\\n    position: absolute;\\n    top: .5rem;\\n    right: .5rem;\\n    font-size: 1rem;\\n    color: #024942;\\n    padding: 0 .25rem;\\n    cursor: pointer;\\n}\\n\\n.todo-form form {\\n    width: clamp(14rem, 100%, 35rem);\\n    height: 100%;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));;\\n    gap: 1rem;\\n}\\n\\n.todo-form form input, select {\\n    width: clamp(14rem, 100%, 40rem);\\n    height: 2rem;\\n}\\n\\nselect {\\n    cursor: pointer;\\n}\\n\\nlabel {\\n    display: flex;\\n}\\n\\nlabel[for='task'], label[for=\\\"time-label\\\"], label[for=\\\"priority-label\\\"], label[for=\\\"project-label\\\"], label[for=\\\"task-info\\\"], .checklist-inputs {\\n    position: relative;\\n    margin: 0 auto 1rem;\\n}\\n\\nlabel[for='task']::before, label[for=\\\"time-label\\\"]::before, label[for=\\\"priority-label\\\"]::before, label[for=\\\"project-label\\\"]::before, label[for=\\\"task-info\\\"]::before, .checklist-inputs::before {\\n    content: 'Title:';\\n    position: absolute;\\n    left: 0;\\n    top: -1.5rem;\\n    color:#024942;\\n}\\n\\nlabel[for=\\\"time-label\\\"]::before {\\n    content: 'Due Date:'\\n}\\n\\nlabel[for=\\\"priority-label\\\"]::before {\\n    content: 'Priority:';\\n} \\n\\nlabel[for=\\\"project-label\\\"]::before {\\n    content: 'Project:'\\n}\\n\\n.checklist-inputs::before {\\n    content: 'Add to Checklist';\\n}\\n\\nlabel[for=\\\"task-info\\\"]::before {\\n    content: 'Description:';\\n}\\n\\n.todo-form input, .todo-form select {\\n    appearance: none;\\n    border: 1px solid #024942;\\n    padding: 0 1rem;\\n    background-color: #04b6aa20;\\n}\\n\\n.todo-form input:focus, .todo-form select:focus {\\n    background-color: #fff;\\n}\\n\\n.checklist-inputs label {\\n    flex-direction: column;\\n    gap: 0rem;\\n}\\n\\n#task-info-label {\\n    height: 10rem;\\n    width: clamp(14rem, 100%, 40rem);\\n\\n}\\n\\n.checklist-inputs p {\\n    margin: 0;\\n}\\n\\n.checklist-inputs .addList {\\n    background-color: #04b6aa;\\n    font-size: 1rem;\\n    position: absolute;\\n}\\n\\n\\ntextarea, .checklist-inputs {\\n    border-radius: 6px;\\n    border-style: none solid solid none;\\n    border-width: medium 1px 1px medium;\\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;\\n    height: 10rem;\\n    width: clamp(14rem, 100%, 40rem);\\n}\\n\\ntextarea {\\n    background: none repeat scroll 0 0 #04b6aa20;\\n    padding: .75rem;\\n}\\n\\n\\n.checklist-inputs input {\\n    position: absolute;\\n    border: none;\\n    width: 100%;\\n    height: 100%;\\n    background: none repeat scroll 0 0 #04b6aa20;\\n    padding: 0 .5rem 0 1.75rem;   \\n}\\n\\ntextarea:focus, .checklist-inputs input:focus {\\n    background: none repeat scroll 0 0 transparent;\\n    outline-width: 0;\\n}\\n\\n.checklist-inputs label {\\n    height: 2rem;\\n    display: flex;\\n    justify-content: center;\\n    position: relative;\\n}\\n\\n.checklist-inputs label[for='firstchecklist'] input {\\n    border-top-left-radius: 6px;\\n    border-top-right-radius: 6px;\\n}\\n\\n.checklist-inputs label[for='fifthchecklist'] input {\\n    border-bottom-left-radius: 6px;\\n    border-bottom-right-radius: 6px;\\n}\\n\\n.checklist-inputs label::before {\\n    margin-left: .5rem;\\n    color:#024942;\\n}\\n\\n.checklist-inputs label[for='firstchecklist']::before {\\n    content: '1.';\\n    width: fit-content;\\n}\\n\\n.checklist-inputs label[for='secondchecklist']::before {\\n    content: '2.';\\n    width: fit-content;\\n}\\n\\n.checklist-inputs label[for='thirdchecklist']::before {\\n    content: '3.';\\n    width: fit-content;\\n}\\n.checklist-inputs label[for='fourthchecklist']::before {\\n    content: '4.';\\n    width: fit-content;\\n}\\n.checklist-inputs label[for='fifthchecklist']::before {\\n    content: '5.';\\n    width: fit-content;\\n}\\n\\n.addTask-button {\\n    border: 2px solid #024942;\\n    color:white;\\n    font-size: 1rem;\\n    background-color: #04b6aa;\\n    text-align: center;\\n    margin: 0 auto;\\n    width: 6rem;\\n    padding: .25rem 0;\\n    cursor: pointer;\\n    grid-column: 1/-1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _toDoBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoBlock */ \"./src/toDoBlock.js\");\n/* harmony import */ var _toDoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoForm */ \"./src/toDoForm.js\");\n\n\n\n\n\n// makeToDoBlock();\n\n(0,_toDoForm__WEBPACK_IMPORTED_MODULE_2__.createForm)();\n\nconsole.log('hi');\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/toDoBlock.js":
/*!**************************!*\
  !*** ./src/toDoBlock.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeToDoBlock\": () => (/* binding */ makeToDoBlock)\n/* harmony export */ });\nfunction makeToDoBlock() {\n    const main = document.querySelector('main');\n    const toDoContainer = document.createElement('div');\n    toDoContainer.classList.add('todo-container');\n    const topDiv = document.createElement('div');\n    topDiv.classList.add('top');\n    const priority = document.createElement('p');\n    priority.classList.add('priority');\n    const project = document.createElement('p');\n    project.classList.add('project');\n    const task = document.createElement('h4');\n    const date = document.createElement('p');\n    date.classList.add('date');\n    const editables = document.createElement('div');\n    editables.classList.add('editables');\n    const editButton = document.createElement('button');\n    editButton.classList.add('edit');\n    const descriptionButton = document.createElement('button');\n    descriptionButton.classList.add('description');\n    const checklistButton = document.createElement('button');\n    checklistButton.classList.add('checklist');\n    const removeButton = document.createElement('button');\n    removeButton.classList.add('remove');\n\n\n    //Example \n    const priorityContent = document.createTextNode('1');\n    const projectContent = document.createTextNode('Project 1');\n    const taskContent = document.createTextNode('Do this example');\n    const dateContent = document.createTextNode('12:30 14/09/22');\n    priority.appendChild(priorityContent);\n    project.appendChild(projectContent);\n    task.appendChild(taskContent);\n    date.appendChild(dateContent);\n\n\n\n    topDiv.appendChild(priority);\n    topDiv.appendChild(project);\n\n    editables.appendChild(editButton);\n    editables.appendChild(descriptionButton);\n    editables.appendChild(checklistButton);\n    editables.appendChild(removeButton);\n\n    toDoContainer.appendChild(topDiv);\n    toDoContainer.appendChild(task);\n    toDoContainer.appendChild(date);\n    toDoContainer.appendChild(editables);\n\n    main.appendChild(toDoContainer);\n\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/toDoBlock.js?");

/***/ }),

/***/ "./src/toDoForm.js":
/*!*************************!*\
  !*** ./src/toDoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createForm\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createForm() {\n    const main = document.querySelector('main');\n    const toDoForm = document.createElement('div');\n    toDoForm.classList.add('todo-form');\n    const newTask = document.createElement('h1');\n    const exit = document.createElement('span');\n    const newTaskContent = document.createTextNode('New Task');\n    const exitContent = document.createTextNode('X');\n\n    exit.appendChild(exitContent);\n    newTask.appendChild(newTaskContent);\n    newTask.appendChild(exit);\n    toDoForm.appendChild(newTask);\n\n\n    const form = document.createElement('form');\n    \n    const taskDiv = document.createElement('div');\n    taskDiv.classList.add('task-div');\n    const taskLabel = document.createElement('label');\n    taskLabel.setAttribute('for', 'task');\n    const taskInput = document.createElement('input');\n    taskInput.setAttribute('type', 'text');\n    taskInput.id = 'task';\n\n    taskLabel.appendChild(taskInput);\n    taskDiv.appendChild(taskLabel);\n    form.appendChild(taskDiv);\n\n    const dateDiv = document.createElement('div');\n    dateDiv.classList.add('date-div');\n    const dateLabel = document.createElement('label');\n    dateLabel.setAttribute('for', 'time-label');\n    const dateInput = document.createElement('input');\n    dateInput.setAttribute('type', 'datetime-local');\n    dateInput.id = 'time-label';\n\n    dateLabel.appendChild(dateInput);\n    dateDiv.appendChild(dateLabel);\n    form.appendChild(dateDiv);\n\n    const descriptionLabel = document.createElement('label');\n    descriptionLabel.setAttribute('for', 'task-info');\n    descriptionLabel.id = 'task-info-label';\n    const textArea = document.createElement('textarea');\n    textArea.setAttribute('type', 'text');\n    textArea.id = 'task-info';\n\n    descriptionLabel.appendChild(textArea);\n    form.appendChild(descriptionLabel);\n\n    const checkListInputs = document.createElement('div');\n    checkListInputs.classList.add('checklist-inputs');\n    \n    const firstChecklist = document.createElement('label');\n    firstChecklist.setAttribute('for', 'firstchecklist');\n    const firstChecklistInput = document.createElement('input');\n    firstChecklistInput.setAttribute('type', 'text');\n    firstChecklistInput.classList.add('check-list');\n    firstChecklistInput.id = 'firstchecklist';\n\n    firstChecklist.appendChild(firstChecklistInput);\n    checkListInputs.appendChild(firstChecklist);\n\n    const secondChecklist = document.createElement('label');\n    secondChecklist.setAttribute('for', 'secondchecklist');\n    const secondChecklistInput = document.createElement('input');\n    secondChecklistInput.setAttribute('type', 'text');\n    secondChecklistInput.classList.add('check-list');\n    secondChecklistInput.id = 'secondchecklist';\n\n    secondChecklist.appendChild(secondChecklistInput);\n    checkListInputs.appendChild(secondChecklist);\n\n    const thirdChecklist = document.createElement('label');\n    thirdChecklist.setAttribute('for', 'thirdchecklist');\n    const thirdChecklistInput = document.createElement('input');\n    thirdChecklistInput.setAttribute('type', 'text');\n    thirdChecklistInput.classList.add('check-list');\n    thirdChecklistInput.id = 'thirdchecklist';\n\n    thirdChecklist.appendChild(thirdChecklistInput);\n    checkListInputs.appendChild(thirdChecklist);\n\n    const fourthChecklist = document.createElement('label');\n    fourthChecklist.setAttribute('for', 'fourthchecklist');\n    const fourthChecklistInput = document.createElement('input');\n    fourthChecklistInput.setAttribute('type', 'text');\n    fourthChecklistInput.classList.add('check-list');\n    fourthChecklistInput.id = 'fourthchecklist';\n\n    fourthChecklist.appendChild(fourthChecklistInput);\n    checkListInputs.appendChild(fourthChecklist);\n\n    const fifthChecklist = document.createElement('label');\n    fifthChecklist.setAttribute('for', 'fifthchecklist');\n    const fifthChecklistInput = document.createElement('input');\n    fifthChecklistInput.setAttribute('type', 'text');\n    fifthChecklistInput.classList.add('check-list');\n    fifthChecklistInput.id = 'fifthchecklist';\n\n    fifthChecklist.appendChild(fifthChecklistInput);\n    checkListInputs.appendChild(fifthChecklist);\n\n    form.appendChild(checkListInputs);\n\n    const priorityDiv = document.createElement('div');\n    priorityDiv.classList.add('priority-div');\n    const priorityLabel = document.createElement('label');\n    priorityLabel.setAttribute('for', 'priority-label');\n    const prioritySelect = document.createElement('select');\n    const high = document.createElement('option');\n    high.value = '1';\n    const highContent = document.createTextNode('High');\n    const medium = document.createElement('option');\n    medium.value = '2';\n    const mediumContent = document.createTextNode('Medium');\n    const low = document.createElement('option');\n    low.value = '3';\n    const lowContent = document.createTextNode('Low');\n\n    high.appendChild(highContent);\n    medium.appendChild(mediumContent);\n    low.appendChild(lowContent);\n    prioritySelect.appendChild(high);\n    prioritySelect.appendChild(medium);\n    prioritySelect.appendChild(low);\n    priorityLabel.appendChild(prioritySelect);\n    priorityDiv.appendChild(priorityLabel);\n    form.appendChild(priorityDiv);\n\n    const projectDiv = document.createElement('div');\n    projectDiv.classList.add('project-div');\n    const projectLabel = document.createElement('label');\n    projectLabel.setAttribute('for', 'project-label');\n    const projectSelect = document.createElement('select');\n    const defaultValue = document.createElement('option');\n    defaultValue.value = 'default';\n    const defaultContent = document.createTextNode('Default');\n\n    defaultValue.appendChild(defaultContent);\n    projectSelect.appendChild(defaultValue);\n    projectLabel.appendChild(projectSelect);\n    projectDiv.appendChild(projectLabel);\n    form.appendChild(projectDiv);\n\n    const addTaskButton = document.createElement('button');\n    addTaskButton.setAttribute('type', 'button');\n    addTaskButton.classList.add('addTask-button');\n    const taskButtonContent = document.createTextNode('Add Task');\n\n    addTaskButton.appendChild(taskButtonContent);\n    form.appendChild(addTaskButton);\n\n    toDoForm.appendChild(form);\n    main.appendChild(toDoForm);\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/toDoForm.js?");

/***/ }),

/***/ "./src/photos/edit.svg":
/*!*****************************!*\
  !*** ./src/photos/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"216f7d539b98c1ddd790.svg\";\n\n//# sourceURL=webpack://todo_list/./src/photos/edit.svg?");

/***/ }),

/***/ "./src/photos/info.svg":
/*!*****************************!*\
  !*** ./src/photos/info.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1eb4d0a71b852490ebe.svg\";\n\n//# sourceURL=webpack://todo_list/./src/photos/info.svg?");

/***/ }),

/***/ "./src/photos/list.svg":
/*!*****************************!*\
  !*** ./src/photos/list.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0015901c89e7cc1f733.svg\";\n\n//# sourceURL=webpack://todo_list/./src/photos/list.svg?");

/***/ }),

/***/ "./src/photos/trash-2.svg":
/*!********************************!*\
  !*** ./src/photos/trash-2.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8505b1ace174eb089b9c.svg\";\n\n//# sourceURL=webpack://todo_list/./src/photos/trash-2.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;