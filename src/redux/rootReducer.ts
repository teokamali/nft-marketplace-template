import athenticationReducer from "./slices/authentication/authentication";
import LocalizationReducer from "./slices/localization/localizationSlice";

import { combineReducers } from "redux";
import { apiReducers } from "./apiReducer";

const rootReducer = combineReducers({
    auth: athenticationReducer,
    localization: LocalizationReducer,
    ...apiReducers,
});

export default rootReducer;
