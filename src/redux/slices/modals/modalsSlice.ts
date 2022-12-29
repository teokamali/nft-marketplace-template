import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type Modals = {
    wallet: boolean;
};

const initialState: Modals = {
    wallet: false,
};

const modalsSlice = createSlice({
    name: "modals",
    initialState: initialState,
    reducers: {
        openWalletDropDown(state, action: PayloadAction<boolean>) {
            state.wallet = action.payload;
        },
    },
});

export const { openWalletDropDown } = modalsSlice.actions;
export const selectModal = (state: RootState) => state.modals;

export default modalsSlice.reducer;
