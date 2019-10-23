/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data/coffees.json":
/*!**********************************!*\
  !*** ./assets/data/coffees.json ***!
  \**********************************/
/*! exports provided: coffees, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"coffees\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"Oat Latte\\\",\\\"plantbased\\\":true,\\\"description\\\":\\\"Latte coffee with oat plant milk.\\\",\\\"prices\\\":{\\\"small\\\":2.5,\\\"medium\\\":3.5,\\\"large\\\":4.5,\\\"extra_large\\\":5.5}},{\\\"id\\\":8,\\\"name\\\":\\\"Toasted Graham Latte \\\",\\\"plantbased\\\":false,\\\"description\\\":\\\"Graham and sweet cream meet steamed milk and our signature espresso, then are finished off with a sprinkling of cinnamon graham crumbles for a less sweet perfect treat.\\\",\\\"shop\\\":\\\"Starbucks\\\",\\\"prices\\\":{\\\"small\\\":4.25,\\\"medium\\\":4.95,\\\"large\\\":5.95,\\\"extra_large\\\":null}},{\\\"id\\\":2,\\\"name\\\":\\\"Soy Latte\\\",\\\"plantbased\\\":true,\\\"description\\\":\\\"Latte coffee with soy plant milk.\\\",\\\"prices\\\":{\\\"small\\\":1.5,\\\"medium\\\":2,\\\"large\\\":3.5,\\\"extra_large\\\":4.5}},{\\\"id\\\":3,\\\"name\\\":\\\"Rice Latte\\\",\\\"plantbased\\\":true,\\\"description\\\":\\\"Latte coffee with rice plant milk.\\\",\\\"prices\\\":{\\\"small\\\":2.5,\\\"medium\\\":3.5,\\\"large\\\":4.5,\\\"extra_large\\\":5.5}},{\\\"id\\\":4,\\\"name\\\":\\\"Koko Latte\\\",\\\"plantbased\\\":true,\\\"description\\\":\\\"Latte coffee with coconut milk.\\\",\\\"prices\\\":{\\\"small\\\":1.5,\\\"medium\\\":2,\\\"large\\\":3.5,\\\"extra_large\\\":4.5}},{\\\"id\\\":5,\\\"name\\\":\\\"Almond Latte\\\",\\\"plantbased\\\":true,\\\"description\\\":\\\"Latte coffee with almond milk.\\\",\\\"prices\\\":{\\\"small\\\":2.5,\\\"medium\\\":3.5,\\\"large\\\":4.5,\\\"extra_large\\\":5.5}},{\\\"id\\\":6,\\\"name\\\":\\\"Pumpkin Spice Latte\\\",\\\"plantbased\\\":false,\\\"description\\\":\\\"Our signature espresso and milk are highlighted by flavor notes of pumpkin, cinnamon, nutmeg and clove to create this incredible beverage that's a fall favorite. Enjoy it topped with whipped cream and real pumpkin pie spices.\\\",\\\"shop\\\":\\\"Starbucks\\\",\\\"prices\\\":{\\\"small\\\":4.25,\\\"medium\\\":4.95,\\\"large\\\":5.95,\\\"extra_large\\\":null}},{\\\"id\\\":7,\\\"name\\\":\\\"Salted Caramel Mocha\\\",\\\"plantbased\\\":false,\\\"description\\\":\\\"Our signature espresso and milk are highlighted by flavor notes of pumpkin, cinnamon, nutmeg and clove to create this incredible beverage that's a fall favorite. Enjoy it topped with whipped cream and real pumpkin pie spices.\\\",\\\"shop\\\":\\\"Starbucks\\\",\\\"prices\\\":{\\\"small\\\":4.25,\\\"medium\\\":4.95,\\\"large\\\":5.95,\\\"extra_large\\\":null}}]}\");\n\n//# sourceURL=webpack:///./assets/data/coffees.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_utility_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utility/helpers.js */ \"./src/js/utility/helpers.js\");\n/* harmony import */ var _assets_data_coffees_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/coffees.json */ \"./assets/data/coffees.json\");\nvar _assets_data_coffees_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/coffees.json */ \"./assets/data/coffees.json\", 1);\n\n\n{\n  var init = function init() {\n    document.querySelector(\"body\").addEventListener(\"click\", handleClickBody); // data from local json file\n\n    parseDataLocal(_assets_data_coffees_json__WEBPACK_IMPORTED_MODULE_1__); // data from online api\n    //GetDataFromUrl();\n  };\n  /*const GetDataFromUrl = async() => {\n    const $url = \"https://api.myjson.com/bins/tcmfq\";\n    threads = await fetch($url);\n    parse(await threads.json());\n   }\n  */\n\n  /*const parse = async (items) => {\n   const $ul = document.querySelector(\".prices__list\");\n  console.log($ul);\n  items.forEach(item => {\n    if (item.plantbased){\n      $ul.innerHTML += ` <li class='price'> <a class='price__button'><span class='price__button__wrapper'><span class='price__button__name'>${item.name}</span><br> <span class='price__button__amount'>&euro; ${item.prices.medium}</span></span><span class='price__button__plus'>+</span> </a></li>`\n    }\n  });\n  }\n  */\n\n\n  var parseDataLocal = function parseDataLocal(items) {\n    var $ul = document.querySelector(\".prices__list\");\n    console.log($ul);\n    items.coffees.forEach(function (item) {\n      if (item.plantbased) {\n        $ul.innerHTML += \" <li class='price'> <a class='price__button'><span class='price__button__wrapper'><span class='price__button__name'>\".concat(item.name, \"</span><br> <span class='price__button__amount'>&euro; \").concat(item.prices.medium, \"</span></span><span class='price__button__plus'>+</span> </a></li>\");\n      }\n    });\n  };\n\n  var handleClickBody = function handleClickBody(event) {\n    Object(_js_utility_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"devineLog\"])(event);\n    Object(_js_utility_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"devineLog\"])(event.clientX);\n    Object(_js_utility_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"devineLog\"])(event.clientX);\n  };\n\n  init();\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/utility/helpers.js":
/*!***********************************!*\
  !*** ./src/js/utility/helpers.js ***!
  \***********************************/
/*! exports provided: devineLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"devineLog\", function() { return devineLog; });\nvar devineLog = function devineLog(logThis) {\n  return console.log(\"Devine log: \".concat(logThis));\n};\n\n//# sourceURL=webpack:///./src/js/utility/helpers.js?");

/***/ })

/******/ });