import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "./axios";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export const signUpAsync = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/register/`, user);
    await saveToAsyncStorage("token", data.token);
    dispatch(signIn(data));
  } catch (error) {
    throw error;
  }
};

export const signInAsync = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/login/`, user);
    await saveToAsyncStorage("token", data.token);
    dispatch(signIn(data));
  } catch (error) {
    throw error;
  }
};

export const autoLoginAsync = (token) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/user/auto-login/`, {
      headers: { "auth-token": token },
    });
    dispatch(signIn(data));
  } catch (error) {
    throw error;
  }
};

export const signOutAsync = () => async (dispatch) => {
  try {
    await removeFromAsyncStorage("token");
    dispatch(signOut());
  } catch (error) {
    throw error;
  }
};

export const getFromAsyncStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    throw error;
  }
};

export const saveToAsyncStorage = async (key, value) => {
  try {
    const data = await AsyncStorage.setItem(key, JSON.stringify(value));
    return data;
  } catch (error) {
    throw error;
  }
};

export const removeFromAsyncStorage = async (key) => {
  try {
    const data = await AsyncStorage.removeItem(key);
    return data;
  } catch (error) {
    throw error;
  }
};

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
