import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type GameState = {
  imageId: string;
  userGuess: { lat: number; lng: number } | null;
};

const initialState: GameState = {
  imageId: '',
  userGuess: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setImageId(state, action: PayloadAction<string>) {
      state.imageId = action.payload;
    },
    setUserGuess(state, action: PayloadAction<{ lat: number; lng: number }>) {
      state.userGuess = action.payload;
    },
  },
});

export const { setImageId, setUserGuess } = gameSlice.actions;
export default gameSlice.reducer;
