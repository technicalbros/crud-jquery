import * as _ from "lodash";
import {CrudRequest} from "@crud/core";
import ajaxRequest from "./ajaxRequest";

declare global {
    interface FormData {
        merge(data: any): this
    }

    interface File {
        url: string
    }


    interface JQueryStatic {
        crud: CrudRequest
    }
}

const mergeData = (formData: FormData, data: any, key?: string) => {
    if (_.isObject(data) && !(data instanceof File) && !(data instanceof Blob)) {
        _.each(data, (value, _key) => {
            const name = key ? `${key}[${_key}]` : _key;
            mergeData(formData, value, name);
        })
    } else if (key && data !== undefined) {
        formData.append(key, data || '');
    }
}

FormData.prototype.merge = function (data: Object) {
    mergeData(this, data);
    return this;
}

export {default as ajaxRequest} from "./ajaxRequest";

$.crud = new CrudRequest();
$.crud.config(ajaxRequest);
