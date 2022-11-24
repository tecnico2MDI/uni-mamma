import { createSlice } from "@reduxjs/toolkit";
import getUsers from "./action/get-users";

const initialState = {
    identity: undefined,
    error: undefined,
    loading: false
};

export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.identity = payload;
        });

        builder.addCase(getUsers.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error.message;
        });
    }
});

export const selectIsLoading = (state) => state.user.loading;

export default usersSlice.reducer;
