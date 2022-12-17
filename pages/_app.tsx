import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Provider } from "react-redux";
import store, { persistor } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LocalizationProvider from "../src/components/LocalizationProvider";
import "../styles/globals.css";
import Layout from "src/components/Common/Layout/Layout";
import { useAppSelector } from "src/redux/hooks";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }: AppProps) {
    const activeChainId = ChainId.Mumbai;

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThirdwebProvider desiredChainId={activeChainId}>
                    <LocalizationProvider messages={{ local: "en" }}>
                        <ThemeProvider enableSystem={true} attribute="class">
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </ThemeProvider>
                    </LocalizationProvider>
                </ThirdwebProvider>
            </PersistGate>
        </Provider>
    );
}
