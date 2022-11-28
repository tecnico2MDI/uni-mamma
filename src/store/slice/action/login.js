import { createAsyncThunk } from "@reduxjs/toolkit";

const mockApiRequest = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: "Marina",
                    surname: "Gherman",
                    initWeight: 0,
                    secondWeight: 0,
                    date: "2022-08-18T21:11:54",
                    weeks: 0
                }
            });
        }, 1000);
    });

const login = createAsyncThunk("user/login", async (_, thunkAPI) => {
    try {
        const response = await mockApiRequest();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: "Impossible get data"
        });
    }
});

export default login;
