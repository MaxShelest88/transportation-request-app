import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRoute } from './asyncactions';

const initialState = {
  features: [],
  status: 'loading',
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoute.pending, (state) => {
      state.features = [];
      state.status = 'loading';
    });
    builder.addCase(fetchRoute.fulfilled, (state, action) => {
      state.features = action.payload.features;
      state.status = 'success';
    });
    builder.addCase(fetchRoute.rejected, (state, action) => {
      state.features = [];
      state.status = 'error';
    });
  },
});

export default routeSlice.reducer;
