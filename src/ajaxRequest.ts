import {CrudRequest, RequestOptions} from "@crud/core";
import $ from "jquery";
import AjaxSettings = JQuery.AjaxSettings;

export default function ajaxRequest(this: CrudRequest, config: RequestOptions) {

    const {callbacks} = config;

    callbacks.sendRequest = async (options: RequestOptions) => {

        const config = {
            ...this.defaultConfig,
            ...options,
        }

        let {
            data,
            url,
            method = "get",
            baseUrl = "",
            prefix = "",
            suffix = "",
            extension = "",
            redirectTo = false,
            showProgress = true,
            checkDataType = true,
            notify = true,
            reload: reloadPage = false,
            callbacks
        } = config;


        const ajaxOptions: AjaxSettings = {
            ...config.ajaxOptions,
        }

        if (callbacks.transformParams) {
            data = await this.call("transformParams", [data])
        }

        ajaxOptions.type = method;
        ajaxOptions.url = baseUrl + prefix + url + suffix + extension;

        if (method.toLowerCase() === 'post' && !(data instanceof FormData)) {
            ajaxOptions.data = new FormData().merge(data);
        } else {
            ajaxOptions.data = data;
        }

        if (ajaxOptions.data instanceof FormData) {
            ajaxOptions.type = "post";
            ajaxOptions.cache = false;
            ajaxOptions.processData = false;
            ajaxOptions.contentType = false;
        }

        let responseText;

        try {

            showProgress && this.toggleLoading(true);

            responseText = await new Promise((resolve, reject) => {
                ajaxOptions.success = response => resolve(response)
                ajaxOptions.error = (error) => {
                    reject({
                        error: error,
                        message: `${error.status}: ${error.statusText || 'Server Error'}`
                    })
                }
                $.ajax(ajaxOptions)
            });

            showProgress && this.toggleLoading(false);

            let response: { type: "success" | "error", message: string }

            try {
                response = JSON.parse(responseText);
            } catch (e) {
                response = responseText;
            }

            if (callbacks.transformResponse) {
                response = await this.call("transformResponse", [response])
            }

            if (method.toLowerCase() === 'get') {
                return response;
            } else if (!checkDataType || this.call("checkSuccess", [data])) {

                notify && this.notify({
                    type: "success",
                    message: response.message
                });

                if (redirectTo) {
                    this.redirect(redirectTo);
                } else if (reloadPage) {
                    this.reload();
                }

                return response
            } else {
                throw response || {message: "Empty Response"};
            }

        } catch (error) {
            showProgress && this.toggleLoading(false);

            notify && this.notify({
                type: "error",
                message: error.message
            });

            throw error;
        }
    }

    return config;
}
