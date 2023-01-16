import { createSlice } from '@reduxjs/toolkit';
import { requests } from '../../data/data';

const initialState = {
  items: requests,
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setCurrentPoint(state, action) {
      const currentItem = state.items.find((item) => item.id === action.payload.item.id);
      currentItem.path = {
        startPoint: action.payload.startPoint
          ? action.payload.startPoint
          : currentItem.path.startPoint,
        finishPoint: action.payload.finishPoint
          ? action.payload.finishPoint
          : currentItem.path.finishPoint,
      };
    },
  },
});

export const { setCurrentPoint } = requestsSlice.actions;
export default requestsSlice.reducer;
