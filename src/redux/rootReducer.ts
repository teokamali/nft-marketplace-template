import athenticationReducer from "./slices/authentication/authentication";
import LocalizationReducer from "./slices/localization/localizationSlice";
import ModalsReducer from "./slices/modals/modalsSlice";

import { combineReducers } from "redux";
import { apiReducers } from "./apiReducer";

const rootReducer = combineReducers({
    auth: athenticationReducer,
    localization: LocalizationReducer,
    modals: ModalsReducer,
    ...apiReducers,
});

export default rootReducer;
