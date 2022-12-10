import { ContainerState as LocalizationProviderState } from "../redux/slices/localization/localizationSlice";

export interface ApplicationRootState {
    readonly localization: LocalizationProviderState;
}
export interface Response {
    data: string;
    message: string;
    status: boolean;
}

export interface User {
    first_name?: string;
    last_name?: string;
    user_balance?: number;
    national_code?: string;
    avatar_url?: string;
}

export interface Todo {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export interface UserInfo {
    email: string;
    first_name: string;
    is_male: number;
    last_name: string;
    mobile: string;
    national_code: string;
    sheba_number: string;
}

export interface ITodosListData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
