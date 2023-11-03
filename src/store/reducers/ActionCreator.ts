import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk(
  'fetchCards',
  async (_, thunkApi) => {
    try {
      return fetch('./data/data.json')
      .then(res => res.json())
      .then(data => data.flowers)
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
)