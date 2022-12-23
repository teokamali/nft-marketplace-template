import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Provider } from "react-redux";
import store, { persistor } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LocalizationProvider from "../src/components/LocalizationProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const activeChainId = ChainId.Mumbai;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* <ThirdwebProvider desiredChainId={activeChainId}> */}
                <LocalizationProvider messages={{ local: "en" }}>
                    <Component {...pageProps} />
                </LocalizationProvider>
                {/* </ThirdwebProvider> */}
            </PersistGate>
        </Provider>
    );
}
