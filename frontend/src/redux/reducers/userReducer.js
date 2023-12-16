import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  message: null,
  isAuthenticated: false,
  error: null,
  otpHash: "",
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loadUserRequest", (state) => {
      state.loading = true;
    })

    .addCase("loadUserSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })

    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase("loginRequest", (state) => {
      state.loading = true;
    })

    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    })

    .addCase("loginFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase("optSendSuccess", (state, action) => {
      state.loading = false;
      state.otpHash = action.payload.hash;
      state.otp = action.payload.otp;
      state.isAuthenticated = false;
    })

    .addCase("optSendFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase("registerRequest", (state) => {
      state.loading = true;
    })

    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    })

    .addCase("registerFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase("logoutRequest", (state) => {
      state.loading = true;
    })

    .addCase("logoutSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.isAuthenticated = false;
    })

    .addCase("logoutFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    })

    .addCase("changeNameRequest", (state) => {
      state.loading = true;
    })

    .addCase("changeNameSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    })

    .addCase("changeNameFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("changePasswordRequest", (state) => {
      state.loading = true;
    })

    .addCase("changePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    })

    .addCase("changePasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("changeAddressRequest", (state) => {
      state.loading = true;
    })

    .addCase("changeAddressSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    })

    .addCase("changeAddressFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("clearError", (state) => {
      state.error = null;
    })

    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});
