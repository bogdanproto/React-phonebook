import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteAuthToken, herokuApi, setAuthToken } from 'utils/apiSetting';

export const signInUser = createAsyncThunk(
  'userAuth/signInUser',
  async (obj, thunkAPI) => {
    try {
      const { data } = await herokuApi.post('/users/signup', obj);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'userAuth/logInUser',
  async (obj, thunkAPI) => {
    try {
      const { data } = await herokuApi.post('/users/login', obj);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'userAuth/logOutUser',
  async (_, thunkAPI) => {
    try {
      await herokuApi.post('/users/logout');
      deleteAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'userAuth/refreshUser',
  async (_, thunkAPI) => {
    const {
      userAuth: { token },
    } = thunkAPI.getState();

    if (!token) {
      return thunkAPI.rejectWithValue('Please logIn');
    }

    try {
      setAuthToken(token);
      const { data } = await herokuApi.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
