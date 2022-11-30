import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "src/redux/rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiMiddleware } from "src/api/apiMiddleware";
import logger from "redux-logger";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    //@ts-ignore
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false, //TODO CHECK THIS
        }).concat(apiMiddleware),
});
setupListeners(store.dispatch);

//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
