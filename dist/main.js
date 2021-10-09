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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n\r\n    const contentContainer = document.querySelector('#tabs-content')\r\n\r\n    const contact = document.createElement('div');\r\n    contact.setAttribute('id', 'contact');\r\n    contact.setAttribute('data-tab-content', '')\r\n    contact.innerHTML = `\r\n                <h1>Contact-us</h1>\r\n                <div class=\"contact-content\">\r\n                    <ul>\r\n                        <li><p>189 Laconia Ave <br> Manhattan, NY 28942</p></li>\r\n                        <li><p>Mon-Thurs: 8am-8pm <br> Fri-Sun: 8am-6pm</p></li>\r\n                        <li><p>(222)-888 5555</p></li>\r\n                    </ul>\r\n                </div>\r\n            </div>`;\r\n    contentContainer.appendChild(contact)\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://Restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\r\n\r\n    const contentContainer = document.querySelector('#tabs-content')\r\n\r\n    const home = document.createElement('div');\r\n    home.setAttribute('id', 'home');\r\n    home.setAttribute('data-tab-content', '')\r\n    home.setAttribute('class', 'active')\r\n    home.innerHTML = `\r\n    <h1>Come on down for some delicious cuisine!</h1>\r\n        <div class=\"home-content\">\r\n            <ul>\r\n                <li class=\"address\">\r\n                    <h2>Address:</h2>\r\n                    <p>189 Laconia Ave <br> Manhattan, NY 28942</p>\r\n                 </li>\r\n                <li class=\"hours\">\r\n                    <h2>Opening hours:</h2>\r\n                    <p>Mon-Thurs: 8am-8pm <br> Fri-Sun: 8am-6pm</p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>`;\r\n    contentContainer.appendChild(home)\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://Restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst tabs = document.querySelectorAll('[data-tab-target]')\r\nconst tabContents = document.querySelectorAll('[data-tab-content]')\r\nconst pageContent = document.querySelector('#content')\r\n\r\ntabs.forEach(tab => {\r\n  tab.addEventListener('click', () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget)\r\n    tabContents.forEach(tabContent => {\r\n      tabContent.classList.remove('active')\r\n    })\r\n    tabs.forEach(tab => {\r\n      tab.classList.remove('active')\r\n    })\r\n    tab.classList.add('active')\r\n    target.classList.add('active')\r\n  })\r\n})  \n\n//# sourceURL=webpack://Restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\r\n\r\n    const contentContainer = document.querySelector(\"#tabs-content\");\r\n    const menu = document.createElement('div')\r\n    menu.setAttribute('id', 'menu')\r\n    menu.setAttribute('data-tab-content', '')\r\n    menu.innerHTML = `\r\n    <h1 class=\"menu-logo\">Menu</h1>\r\n    <div class=\"menu-content\">\r\n        <ul>\r\n            <li>\r\n                <div class=\"hamburger\">\r\n                    <img src=\"/src/img/double-cheeseburger.png\" alt=\"\" class=\"menu-imgs\">\r\n                    <p>Hamburger:____________________$2.49 <br>\r\n                       Buns, patty, tomato, onions, lettuce, and our secret family recipe.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"french-fries\">\r\n                    <img src=\"/src/img/french-fries.png\" alt=\"\" class=\"menu-imgs\">\r\n                    <p>French Fries:____________________$1.99 <br>\r\n                        Sometimes you don't want to eat your burger alone, why not add some french fries?\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"ceaser-salad\">\r\n                <img src=\"/src/img/caesar-salad.png\" alt=\"\" class=\"menu-imgs\">\r\n                <p>Caesar Salad:___________________$7.99 <br>\r\n                    Your typical caesar salad that comes with your choice of dressings.\r\n                </p>\r\n            </div></li>\r\n        </ul>\r\n    </div>\r\n    </div>`;\r\n    contentContainer.appendChild(home)\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://Restaurant/./src/menu.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;