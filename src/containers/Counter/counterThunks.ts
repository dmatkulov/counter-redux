import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {RootState} from '../../app/store';

export const fetchCounter = createAsyncThunk(
  'counter/fetch',
  async () => {
    const response = await axiosApi.get<number | null>('/counter.json');
    return response.data ?? 0;
  });

export const increaseCounter = createAsyncThunk<void, undefined, {state: RootState}>(
  'counter/increase',
  async (_, thunkAPI) => {
    const currentValue = thunkAPI.getState().counter.value;
    await axiosApi.put('/counter.json', currentValue + 1);
  }
);