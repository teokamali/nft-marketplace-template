import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type Modals = {
    wallet: boolean;
    menu: boolean;
    showsearch: boolean;
    TradingCategoriesd: boolean;
    showFilter: boolean;
    addProperty: boolean;
    addLevel: boolean;
    addStat: boolean;
};

const initialState: Modals = {
    wallet: false,
    menu: false,
    showsearch: false,
    TradingCategoriesd: false,
    showFilter: false,
    addProperty: false,
    addLevel: false,
    addStat: false,
};

const modalsSlice = createSlice({
    name: "modals",
    initialState: initialState,
    reducers: {
        openWalletDropDown(state, action: PayloadAction<boolean>) {
            state.wallet = action.payload;
        },
        openMenuDropDown(state, action: PayloadAction<boolean>) {
            state.menu = action.payload;
        },
        openSearchInput(state, action: PayloadAction<boolean>) {
            state.showsearch = action.payload;
        },
        openTradingCategories(state, action: PayloadAction<boolean>) {
            state.TradingCategoriesd = action.payload;
        },
        openShowFilter(state, action: PayloadAction<boolean>) {
            state.showFilter = action.payload;
        },
        openAddProperty(state, action: PayloadAction<boolean>) {
            state.addProperty = action.payload;
        },
        openAddLevel(state, action: PayloadAction<boolean>) {
            state.addLevel = action.payload;
        },
        openAddStat(state, action: PayloadAction<boolean>) {
            state.addStat = action.payload;
        },
    },
});

export const {
    openWalletDropDown,
    openMenuDropDown,
    openSearchInput,
    openTradingCategories,
    openShowFilter,
    openAddProperty,
    openAddLevel,
    openAddStat,
} = modalsSlice.actions;
export const selectModal = (state: RootState) => state.modals;

export default modalsSlice.reducer;
