import athenticationReducer from "./slices/authentication/authentication";
import { combineReducers } from "redux";
import { apiReducers } from "./apiReducer";

const rootReducer = combineReducers({
    auth: athenticationReducer,
    ...apiReducers,
});

export default rootReducer;
