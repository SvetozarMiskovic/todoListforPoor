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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskSection\": () => (/* binding */ taskSection),\n/* harmony export */   \"selectMenu\": () => (/* binding */ selectMenu)\n/* harmony export */ });\n/* harmony import */ var _getElsAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElsAndAppend */ \"./src/getElsAndAppend.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n/* harmony import */ var _getLS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLS */ \"./src/getLS.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createList */ \"./src/createList.js\");\n\r\n\r\n\r\n\r\nconst taskSection = document.querySelector('.task-section');\r\nconst selectMenu = document.querySelector('select');\r\n\r\nconst submitBtn = document.getElementById('submitBtn');\r\nconst createListBtn = document.querySelector('.newListBtn');\r\n\r\nconst input = document.querySelector('#todoTask');\r\ndocument.addEventListener('DOMContentLoaded', _getLS__WEBPACK_IMPORTED_MODULE_2__.getLS);\r\n\r\nsubmitBtn.onclick = function (e) {\r\n  e.preventDefault();\r\n  let createID = dayjs().valueOf();\r\n  const selectedValue = selectMenu.value;\r\n\r\n  (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_0__.getElsAndAppend)(selectedValue, createID, input.value);\r\n\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_1__.saveLS)();\r\n  input.value = '';\r\n};\r\n\r\ncreateListBtn.onclick = function () {\r\n  let createID = dayjs().valueOf();\r\n  (0,_createList__WEBPACK_IMPORTED_MODULE_3__.createList)(createID);\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_1__.saveLS)();\r\n};\r\n\n\n//# sourceURL=webpack://rstate/./src/app.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList)\n/* harmony export */ });\n/* harmony import */ var _createListElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createListElement */ \"./src/createListElement.js\");\n/* harmony import */ var _createDeleteListButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDeleteListButton */ \"./src/createDeleteListButton.js\");\n/* harmony import */ var _createTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskList */ \"./src/createTaskList.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _createOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createOption */ \"./src/createOption.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createList(createID) {\r\n  // Create a task container\r\n\r\n  const taskContainer = (0,_createListElement__WEBPACK_IMPORTED_MODULE_0__.createListElement)(createID);\r\n  const removeBtn = (0,_createDeleteListButton__WEBPACK_IMPORTED_MODULE_1__.createDeleteListButton)(createID);\r\n  const ul = (0,_createTaskList__WEBPACK_IMPORTED_MODULE_2__.createTaskList)(createID);\r\n\r\n  // Add elements to DOM\r\n  taskContainer.appendChild(removeBtn);\r\n  taskContainer.appendChild(ul);\r\n  _app__WEBPACK_IMPORTED_MODULE_3__.taskSection.appendChild(taskContainer);\r\n\r\n  // Create the select item\r\n  const option = (0,_createOption__WEBPACK_IMPORTED_MODULE_4__.createOption)(createID);\r\n  // Add option to DOM\r\n  _app__WEBPACK_IMPORTED_MODULE_3__.selectMenu.appendChild(option);\r\n  return;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createList.js?");

/***/ }),

/***/ "./src/createListElement.js":
/*!**********************************!*\
  !*** ./src/createListElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement)\n/* harmony export */ });\nfunction createListElement(listID) {\r\n  const taskContainer = document.createElement('div');\r\n  taskContainer.setAttribute('class', 'task-container');\r\n  taskContainer.setAttribute('data-id', listID);\r\n  return taskContainer;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createListElement.js?");

/***/ }),

/***/ "./src/createOption.js":
/*!*****************************!*\
  !*** ./src/createOption.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createOption\": () => (/* binding */ createOption)\n/* harmony export */ });\nfunction createOption(listID) {\r\n  const option = document.createElement('option');\r\n  option.setAttribute('data-id', listID);\r\n  option.setAttribute('value', listID);\r\n  option.innerText = 'New list';\r\n  return option;\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/createOption.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nfunction deleteTask(itemID) {\r\n  const items = [];\r\n  const tasks = document.querySelectorAll('.task-item');\r\n  items.push(...tasks);\r\n\r\n  const task = items.find(item => item.dataset.id === itemID);\r\n\r\n  task.remove();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/deleteTask.js?");

/***/ }),

/***/ "./src/getElsAndAppend.js":
/*!********************************!*\
  !*** ./src/getElsAndAppend.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElsAndAppend\": () => (/* binding */ getElsAndAppend)\n/* harmony export */ });\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n\r\n\r\nfunction getElsAndAppend(selectValue, id, inputValue) {\r\n  const liste = [];\r\n  const lists = document.querySelectorAll('.task-container');\r\n  liste.push(...lists);\r\n  const element = liste.find(list => list.dataset.id === selectValue);\r\n  const task = (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)(id, inputValue);\r\n\r\n  if ((task, element)) element.children[1].appendChild(task);\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getElsAndAppend.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLS\": () => (/* binding */ getLS)\n/* harmony export */ });\n/* harmony import */ var _getElsAndAppend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElsAndAppend */ \"./src/getElsAndAppend.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ \"./src/createList.js\");\n\r\n\r\n\r\nfunction getLS() {\r\n  const lists = JSON.parse(localStorage.getItem('TodoLists'));\r\n  if (lists)\r\n    lists.forEach(function (listLS) {\r\n      (0,_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(listLS.listID);\r\n\r\n      listLS.items.forEach(function (taskItem) {\r\n        (0,_getElsAndAppend__WEBPACK_IMPORTED_MODULE_0__.getElsAndAppend)(listLS.listID, taskItem.itemID, taskItem.text);\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getLS.js?");

/***/ }),

/***/ "./src/getListIdAndRemove.js":
/*!***********************************!*\
  !*** ./src/getListIdAndRemove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListIdAndRemove\": () => (/* binding */ getListIdAndRemove)\n/* harmony export */ });\n/* harmony import */ var _deleteList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteList */ \"./src/deleteList.js\");\n/* harmony import */ var _saveLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLS */ \"./src/saveLS.js\");\n\r\n\r\nfunction getListIdAndRemove(e) {\r\n  const elementID = e.target.dataset.id;\r\n\r\n  (0,_deleteList__WEBPACK_IMPORTED_MODULE_0__.deleteList)(elementID);\r\n  (0,_saveLS__WEBPACK_IMPORTED_MODULE_1__.saveLS)();\r\n  location.reload();\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/getListIdAndRemove.js?");

/***/ }),

/***/ "./src/saveLS.js":
/*!***********************!*\
  !*** ./src/saveLS.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveLS\": () => (/* binding */ saveLS)\n/* harmony export */ });\nfunction saveLS() {\r\n  const lists = document.querySelectorAll('.task-container');\r\n  let todoList = [];\r\n\r\n  lists.forEach(function (list) {\r\n    const tasks = list.childNodes[1].childNodes;\r\n    let data = { listID: '', items: [] };\r\n    data.listID = list.dataset.id;\r\n\r\n    tasks.forEach(function (t) {\r\n      let taskData = { itemID: '', text: '' };\r\n      // Add item ID to task data\r\n      taskData.itemID = t.dataset.id;\r\n      // Add item text to task data\r\n      taskData.text = t.innerText;\r\n      // Push taskData object to data object\r\n      data.items.push(taskData);\r\n      taskData = { itemID: '', text: '' };\r\n    });\r\n    todoList.push(data);\r\n\r\n    data = { listID: '', items: [] };\r\n  });\r\n\r\n  localStorage.setItem('TodoLists', JSON.stringify(todoList));\r\n}\r\n\n\n//# sourceURL=webpack://rstate/./src/saveLS.js?");

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
/******/ 			// no module.id needed
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