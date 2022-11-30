import { todoAPI } from "./todos/todos";
import { updateUserInfoAPI } from "./updateUserInfo/updateUserInfo";

export const apiMiddleware = [todoAPI.middleware, updateUserInfoAPI.middleware];
