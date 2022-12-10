import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { persistor } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LocalizationProvider from "../src/components/LocalizationProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LocalizationProvider messages={{ local: "en" }}>
                    <Component {...pageProps} />
                </LocalizationProvider>
            </PersistGate>
        </Provider>
    );
}
