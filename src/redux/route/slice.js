import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  features: [],
  status: 'loading',
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    getRouteFetch(state) {
      state.features = [];
      state.status = 'loading';
    },
    getRouteSuccess(state, action) {
      state.features = action.payload;
      state.status = 'success';
    },
    getRouteError(state) {
      state.features = [];
      state.status = 'error';
    },
  },
});

export const { getRouteFetch, getRouteSuccess, getRouteError } = routeSlice.actions;

export default routeSlice.reducer;
