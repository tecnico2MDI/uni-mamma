import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice/user-slice";

const store = configureStore({
    reducer: {
        user: usersReducer
    },
    devTools: true
});

export default store;
