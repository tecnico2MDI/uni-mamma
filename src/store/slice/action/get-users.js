import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";

const getUsers = createAsyncThunk("data/getUsers", async (_, thunkAPI) => {
    try {
        const response = await api.get("/user");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: "Impossible get data"
        });
    }
});

export default getUsers;
