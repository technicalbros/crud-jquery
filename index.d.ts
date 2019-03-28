declare global {
    interface FormData {
        merge(data: any): this;
    }
    interface File {
        url: string;
    }
}
export { default as ajaxRequest } from "./ajaxRequest";
