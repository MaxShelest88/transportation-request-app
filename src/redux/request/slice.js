import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  id: '',
  path: {
    startPoint: {},
    finishPoint: {},
  },
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequset(state, action) {
      state.title = action.payload.title;
      state.id = action.payload.id;
      state.path.startPoint = action.payload.path.startPoint;
      state.path.finishPoint = action.payload.path.finishPoint;
    },
  },
});

export const { setRequset } = requestSlice.actions;
export default requestSlice.reducer;
