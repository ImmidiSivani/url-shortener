import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode';

// Initial state
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    avatar: null,
    token: null,
    email: null,
    id: null,           // ✅ add this
    createdAt: null,    // ✅ add this
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.id = action.payload.id;           // ✅ add this
      state.createdAt = action.payload.createdAt; // ✅ add this
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

// Actions
export const { setUser, removeUser } = userSlice.actions;

// Selectors
export const getUserAvatar = (state) => state.user.avatar;
export const getName = (state) => state.user.name;
export const getToken = (state) => state.user.token;
export const getRole = (state) => {
  if (state.user.token) {
    const userData = jwtDecode(state.user.token);
    return userData.role;
  }
  return "";
};

export const getIsLoggedIn = (state) => state.user.isLoggedIn;
export const getUser = (state) => state.user;
export default userSlice.reducer;