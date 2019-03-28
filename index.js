"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var core_1 = require("@crud/core");
var ajaxRequest_1 = __importDefault(require("./ajaxRequest"));
var mergeData = function (formData, data, key) {
    if (_.isObject(data) && !(data instanceof File) && !(data instanceof Blob)) {
        _.each(data, function (value, _key) {
            var name = key ? key + "[" + _key + "]" : _key;
            mergeData(formData, value, name);
        });
    }
    else if (key && data !== undefined) {
        formData.append(key, data || '');
    }
};
FormData.prototype.merge = function (data) {
    mergeData(this, data);
    return this;
};
var ajaxRequest_2 = require("./ajaxRequest");
exports.ajaxRequest = ajaxRequest_2.default;
$.crud = new core_1.CrudRequest();
$.crud.config(ajaxRequest_1.default);
