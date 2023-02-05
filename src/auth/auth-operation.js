import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setUserToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearUserToken = token => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk('user/register', async (credentials, thunkApi) => {
    try {
        const response = await axios.post('users/signup', credentials)
        setUserToken(response.data.token)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('user/login', async (credentials, thunkApi) => {
    try {
        const response = await axios.post('users/login', credentials)
        setUserToken(response.data.token)
        return response.data
    } catch (error) {
         return thunkApi.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk('users/logout', async (_, thunkApi) => {
    try {
        await axios.post('users/logout');
        clearUserToken();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
  'user/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.authentification.token;

    if (persistToken === null) {
      return thunkApi.rejectWithValue('unable to fetch user');
    } else {
      try {
        setUserToken(persistToken);
        const response = await axios.get('/users/current');
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkApi.rejectWithValue(e.message);
      }
    }
  }
);