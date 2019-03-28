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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ajaxRequest.js":
/*!************************!*\
  !*** ./ajaxRequest.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar jquery_1 = __importDefault(__webpack_require__(/*! jquery */ \"jquery\"));\r\nfunction ajaxRequest(config) {\r\n    var _this = this;\r\n    var callbacks = config.callbacks;\r\n    callbacks.sendRequest = function (options) { return __awaiter(_this, void 0, void 0, function () {\r\n        var config, data, url, _a, method, _b, baseUrl, _c, prefix, _d, suffix, _e, extension, _f, redirectTo, _g, showProgress, _h, checkDataType, _j, notify, _k, reloadPage, callbacks, ajaxOptions, responseText, response, error_1;\r\n        return __generator(this, function (_l) {\r\n            switch (_l.label) {\r\n                case 0:\r\n                    config = __assign({}, this.defaultConfig, options);\r\n                    data = config.data, url = config.url, _a = config.method, method = _a === void 0 ? \"get\" : _a, _b = config.baseUrl, baseUrl = _b === void 0 ? \"\" : _b, _c = config.prefix, prefix = _c === void 0 ? \"\" : _c, _d = config.suffix, suffix = _d === void 0 ? \"\" : _d, _e = config.extension, extension = _e === void 0 ? \"\" : _e, _f = config.redirectTo, redirectTo = _f === void 0 ? false : _f, _g = config.showProgress, showProgress = _g === void 0 ? true : _g, _h = config.checkDataType, checkDataType = _h === void 0 ? true : _h, _j = config.notify, notify = _j === void 0 ? true : _j, _k = config.reload, reloadPage = _k === void 0 ? false : _k, callbacks = config.callbacks;\r\n                    ajaxOptions = __assign({}, config.ajaxOptions);\r\n                    if (!callbacks.transformParams) return [3 /*break*/, 2];\r\n                    return [4 /*yield*/, this.call(\"transformParams\", [data])];\r\n                case 1:\r\n                    data = _l.sent();\r\n                    _l.label = 2;\r\n                case 2:\r\n                    ajaxOptions.type = method;\r\n                    ajaxOptions.url = baseUrl + prefix + url + suffix + extension;\r\n                    if (method.toLowerCase() === 'post' && !(data instanceof FormData)) {\r\n                        ajaxOptions.data = new FormData().merge(data);\r\n                    }\r\n                    else {\r\n                        ajaxOptions.data = data;\r\n                    }\r\n                    if (ajaxOptions.data instanceof FormData) {\r\n                        ajaxOptions.type = \"post\";\r\n                        ajaxOptions.cache = false;\r\n                        ajaxOptions.processData = false;\r\n                        ajaxOptions.contentType = false;\r\n                    }\r\n                    _l.label = 3;\r\n                case 3:\r\n                    _l.trys.push([3, 7, , 8]);\r\n                    return [4 /*yield*/, new Promise(function (resolve, reject) {\r\n                            ajaxOptions.success = function (response) { return resolve(response); };\r\n                            ajaxOptions.error = function (error) {\r\n                                reject({\r\n                                    error: error,\r\n                                    message: error.status + \": \" + (error.statusText || 'Server Error')\r\n                                });\r\n                            };\r\n                            jquery_1.default.ajax(ajaxOptions);\r\n                        })];\r\n                case 4:\r\n                    responseText = _l.sent();\r\n                    showProgress && this.toggleLoading(true);\r\n                    response = void 0;\r\n                    try {\r\n                        response = JSON.parse(responseText);\r\n                    }\r\n                    catch (e) {\r\n                        response = responseText;\r\n                    }\r\n                    if (!callbacks.transformResponse) return [3 /*break*/, 6];\r\n                    return [4 /*yield*/, this.call(\"transformResponse\", [response])];\r\n                case 5:\r\n                    response = _l.sent();\r\n                    _l.label = 6;\r\n                case 6:\r\n                    if (method.toLowerCase() === 'get') {\r\n                        return [2 /*return*/, response];\r\n                    }\r\n                    else if (!checkDataType || this.call(\"checkSuccess\", [data])) {\r\n                        notify && this.notify({\r\n                            type: \"success\",\r\n                            message: response.message\r\n                        });\r\n                        if (redirectTo) {\r\n                            this.redirect(redirectTo);\r\n                        }\r\n                        else if (reloadPage) {\r\n                            this.reload();\r\n                        }\r\n                        return [2 /*return*/, response];\r\n                    }\r\n                    else {\r\n                        throw response || { message: \"Empty Response\" };\r\n                    }\r\n                    return [3 /*break*/, 8];\r\n                case 7:\r\n                    error_1 = _l.sent();\r\n                    showProgress && this.toggleLoading(false);\r\n                    notify && this.notify({\r\n                        type: \"error\",\r\n                        message: error_1.message\r\n                    });\r\n                    throw error_1;\r\n                case 8: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    return config;\r\n}\r\nexports.default = ajaxRequest;\r\n\n\n//# sourceURL=webpack:///./ajaxRequest.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _ = __importStar(__webpack_require__(/*! lodash */ \"lodash\"));\r\nvar mergeData = function (formData, data, key) {\r\n    if (_.isObject(data) && !(data instanceof File) && !(data instanceof Blob)) {\r\n        _.each(data, function (value, _key) {\r\n            var name = key ? key + \"[\" + _key + \"]\" : _key;\r\n            mergeData(formData, value, name);\r\n        });\r\n    }\r\n    else if (key && data !== undefined) {\r\n        formData.append(key, data || '');\r\n    }\r\n};\r\nFormData.prototype.merge = function (data) {\r\n    mergeData(this, data);\r\n    return this;\r\n};\r\nvar ajaxRequest_1 = __webpack_require__(/*! ./ajaxRequest */ \"./ajaxRequest.js\");\r\nexports.ajaxRequest = ajaxRequest_1.default;\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = _;\n\n//# sourceURL=webpack:///external_%22_%22?");

/***/ })

/******/ });