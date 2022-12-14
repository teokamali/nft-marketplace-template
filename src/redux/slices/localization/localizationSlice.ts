import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE } from "../../../translations/locales";

interface LocalizationProviderState {
    readonly locale: string;
    readonly isRtl: boolean;
}

type ContainerState = LocalizationProviderState;
const initialState: LocalizationProviderState = {
    locale: DEFAULT_LOCALE,
    isRtl: false,
};

const LocalizationProvider = createSlice({
    name: "Localization",
    initialState,
    reducers: {
        changeLocale(state, action: PayloadAction<string>) {
            state.locale = action.payload;
            state.isRtl = action.payload === "fa";
        },
    },
});

const { changeLocale } = LocalizationProvider.actions;
export { changeLocale, initialState };

export type { ContainerState };
export default LocalizationProvider.reducer;
