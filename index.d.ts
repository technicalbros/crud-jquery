import { CrudRequest } from "@crud/core";
declare global {
    interface FormData {
        merge(data: any): this;
    }
    interface File {
        url: string;
    }
    interface JQueryStatic {
        crud: CrudRequest;
    }
}
export { default as ajaxRequest } from "./ajaxRequest";
