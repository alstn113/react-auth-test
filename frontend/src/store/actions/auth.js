import axios from "../../lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("/api/auth/login", data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("/api/auth/register", data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const check = createAsyncThunk("auth/check", async () => {
  const response = await axios.post("/api/auth/logout");
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axios.post("/api/auth/logout");
  return response.data;
});
