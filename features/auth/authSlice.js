const { createSlice } = require("@reduxjs/toolkit");
import Cookies from "js-cookie";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: Cookies.get("userToken") || null,
  error: null,
  success: false,
  isAuthenticated: !!Cookies.get("userToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
      state.isAuthenticated = payload ? true : false;

      console.log('credentials set successfully')
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.success = false;
      state.error = null;
      Cookies.remove("userToken");
      Cookies.remove("refreshToken");
    },
  },
  extraReducers: (builder) => {},
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
