import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/types/types";

type AuthState = {
    user: User | null;
    accessToken: string | null;
    onboard: boolean;
};

const initialState: AuthState = {
    user: null,
    accessToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzNzQ4NDg2YmY4ZTBhMjJlODMxNWU4NGQyNjRhMGZjYmY0NmVmMzUzYmM1NDkzMzk5YzdhYWJhZWU5ZGM0NzhkNmJjMGZlZTQ1ZjRjOGYzIn0.eyJhdWQiOiIxIiwianRpIjoiNDM3NDg0ODZiZjhlMGEyMmU4MzE1ZTg0ZDI2NGEwZmNiZjQ2ZWYzNTNiYzU0OTMzOTljN2FhYmFlZTlkYzQ3OGQ2YmMwZmVlNDVmNGM4ZjMiLCJpYXQiOjE2NjY0MjEyNjYsIm5iZiI6MTY2NjQyMTI2NiwiZXhwIjoxNjk3OTU3MjY1LCJzdWIiOiIzMyIsInNjb3BlcyI6W119.Y7MBv7kNoXS444F8EBnhDG5YrKrHGppTw6Y81yD8AgtZRqJ8CR7g6JEikVCLts1ckGTE6vjeCd-Pb7FVtaYAIYqc9w1ZpXzNv_ifJALlQjd8xpPeGdvfJAz_XyFcGzO8Ju5RVbV0IZbQteJc0SsZCLXmUbfMvq96ywjpCghy_mMgahjg9LtbgeQlooHfh2103fhH0QJ_zUga6Z2r9tDuctIfEa1baFKjNgvWd4emdr7JPGTAzijRX4Sl3b47CnbBckB78h2gBWwpbVa4THk_hzpXh511HzqUcTdvHQAxqBZDGP_FmoJSYD6zxkNlNIlplyesIUWET6PKu1UgnF5Nv8m9wWCdLutyHFVoRBC8Wlq5gG5rX35IqPrifrOka7sVGg-KlAC0wOIB2f5mdk3DTwm_YXLUsKwE95lAIyutEZw3DXkVI5yf411zkWdO1T_jgJoJqfmm-j-JyB5nQZf6xR1KPflEm1PTdHvCvKBSRJ-jIxe_Sx8e-X9Dvedl8Nro6GIR-0JUq_rTqGkO_dycFtZFd1tkEv-vx9oRDTq1EtDmSeVPG-BA0Y7N2pRoqnaMWEA-cpldq7Kk2U1D6CaTu5gkx89FCD9tOJMBLWubSfOMzpZG8BdDjaauuU64Z-6IFwZmGVZnTAnOgWE-h6pY0EZ7epGwMYVvhJpeA6AR4BE",
    onboard: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        updateAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
        showOnBoarding(state, action: PayloadAction<boolean>) {
            state.onboard = action.payload;
        },
    },
});

export const { updateAccessToken, showOnBoarding } = authSlice.actions;

export default authSlice.reducer;
