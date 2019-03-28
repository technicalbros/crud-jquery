"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
function ajaxRequest(config) {
    var _this = this;
    var callbacks = config.callbacks;
    callbacks.sendRequest = function (options) { return __awaiter(_this, void 0, void 0, function () {
        var config, data, url, _a, method, _b, baseUrl, _c, prefix, _d, suffix, _e, extension, _f, redirectTo, _g, showProgress, _h, checkDataType, _j, notify, _k, reloadPage, callbacks, ajaxOptions, responseText, response, error_1;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    config = __assign({}, this.defaultConfig, options);
                    data = config.data, url = config.url, _a = config.method, method = _a === void 0 ? "get" : _a, _b = config.baseUrl, baseUrl = _b === void 0 ? "" : _b, _c = config.prefix, prefix = _c === void 0 ? "" : _c, _d = config.suffix, suffix = _d === void 0 ? "" : _d, _e = config.extension, extension = _e === void 0 ? "" : _e, _f = config.redirectTo, redirectTo = _f === void 0 ? false : _f, _g = config.showProgress, showProgress = _g === void 0 ? true : _g, _h = config.checkDataType, checkDataType = _h === void 0 ? true : _h, _j = config.notify, notify = _j === void 0 ? true : _j, _k = config.reload, reloadPage = _k === void 0 ? false : _k, callbacks = config.callbacks;
                    ajaxOptions = __assign({}, config.ajaxOptions);
                    if (!callbacks.transformParams) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.call("transformParams", [data])];
                case 1:
                    data = _l.sent();
                    _l.label = 2;
                case 2:
                    ajaxOptions.type = method;
                    ajaxOptions.url = baseUrl + prefix + url + suffix + extension;
                    if (method.toLowerCase() === 'post' && !(data instanceof FormData)) {
                        ajaxOptions.data = new FormData().merge(data);
                    }
                    else {
                        ajaxOptions.data = data;
                    }
                    if (ajaxOptions.data instanceof FormData) {
                        ajaxOptions.type = "post";
                        ajaxOptions.cache = false;
                        ajaxOptions.processData = false;
                        ajaxOptions.contentType = false;
                    }
                    _l.label = 3;
                case 3:
                    _l.trys.push([3, 7, , 8]);
                    showProgress && this.toggleLoading(true);
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            ajaxOptions.success = function (response) { return resolve(response); };
                            ajaxOptions.error = function (error) {
                                reject({
                                    error: error,
                                    message: error.status + ": " + (error.statusText || 'Server Error')
                                });
                            };
                            jquery_1.default.ajax(ajaxOptions);
                        })];
                case 4:
                    responseText = _l.sent();
                    showProgress && this.toggleLoading(false);
                    response = void 0;
                    try {
                        response = JSON.parse(responseText);
                    }
                    catch (e) {
                        response = responseText;
                    }
                    if (!callbacks.transformResponse) return [3 /*break*/, 6];
                    return [4 /*yield*/, this.call("transformResponse", [response])];
                case 5:
                    response = _l.sent();
                    _l.label = 6;
                case 6:
                    if (method.toLowerCase() === 'get') {
                        return [2 /*return*/, response];
                    }
                    else if (!checkDataType || this.call("checkSuccess", [response])) {
                        notify && this.notify({
                            type: "success",
                            message: response.message
                        });
                        if (redirectTo) {
                            this.redirect(redirectTo);
                        }
                        else if (reloadPage) {
                            this.reload();
                        }
                        return [2 /*return*/, response];
                    }
                    else {
                        throw response || { message: "Empty Response" };
                    }
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _l.sent();
                    showProgress && this.toggleLoading(false);
                    notify && this.notify({
                        type: "error",
                        message: error_1.message
                    });
                    throw error_1;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return config;
}
exports.default = ajaxRequest;
