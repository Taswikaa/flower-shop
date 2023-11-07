import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardInterface } from "../../models/Card";
import { fetchCards } from "./ActionCreator";

interface CardState {
  cards: Array<CardInterface>;
  isLoading: boolean;
  error: null | string;
}

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: null,
}
 
export const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchCards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCards.fulfilled.type]: (state, action: PayloadAction<CardInterface[]>) => {
      state.isLoading = false;
      state.error = null;
      state.cards = action.payload;
    },
    [fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default cardSlice.reducer;