// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LogIn, LogOut, Register } from "../../services/AuthService";
import { LoginModel, RegisterModel } from "../../models/RequestModels";
import { StateModel } from "../../models/StateModel";
import sessionStorage from "redux-persist/es/storage/session";

const initialState: StateModel = {
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  isError: false,
  errorMessage: null,
  userData: null,
  token: null,
  admin: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginModel) => {
    return await LogIn(data);
  }
);

export const signup = createAsyncThunk(
  "auth/register",
  async (data: RegisterModel) => {
    return await Register(data);
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  return await LogOut();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.admin = action.payload.admin
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Login failed";
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = null;
        state.isAuthenticated = false;
        state.token = null;
        state.admin = false;
        sessionStorage.removeItem("persist:root");
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Logout failed";
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Register failed";
      });
  },
});

export default authSlice.reducer;
