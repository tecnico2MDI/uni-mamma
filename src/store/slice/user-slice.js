import { createSlice } from "@reduxjs/toolkit";
import login from "./action/login";

const initialState = {
    identity: undefined,
    error: undefined,
    loading: false
};

export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, { payload }) => {
            state.identity = {
                ...state.identity,
                ...payload
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.identity = payload;
        });

        builder.addCase(login.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error.message;
        });
    }
});

export const selectIsLoading = (state) => state.user.loading;
export const selectUser = (state) => state.user.identity;

export const { updateUser } = usersSlice.actions;

export default usersSlice.reducer;
