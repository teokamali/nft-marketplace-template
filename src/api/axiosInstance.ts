import axios, { AxiosInstance } from "axios";
import axiosConfig from "./axiosConfig";

class BaseApi {
    readonly _apiCore;
    readonly _basePath: string;
    private static instance: BaseApi;

    private constructor(apiCore: AxiosInstance, basePath: string | undefined) {
        this._apiCore = apiCore;
        // 👇️ ts-ignore ignores any ts errors on the next line
        // @ts-ignore
        this._basePath = basePath;
    }

    static getInstance() {
        const apiCore = axios.create(axiosConfig);
        const basePath = axiosConfig.baseURL;
        if (this.instance) {
            return this.instance;
        }

        this.instance = new BaseApi(apiCore, basePath);
        return this.instance;
    }
}

const baseApi = BaseApi.getInstance();

export default baseApi;
