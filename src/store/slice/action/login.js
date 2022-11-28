import { createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const mockApiRequest = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: "Marina",
                    surname: "Gherman",
                    weight: 0,
                    secondWeight: 0,
                    date: dayjs(new Date()),
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
