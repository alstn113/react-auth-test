import axios from "../../lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSample = createAsyncThunk("sample/getSample", async (data, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
