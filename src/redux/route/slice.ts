import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PathType, Status } from '../../types';

const initialState = {
  features: [] as GeoJSON.Feature[],
  status: Status.LOADING,
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    getRouteFetch(state, action: PayloadAction<PathType>) {
      state.features = [];
      state.status = Status.LOADING;
    },
    getRouteSuccess(state, action: PayloadAction<GeoJSON.Feature[]>) {
      state.features = action.payload;
      state.status = Status.SUCCESS;
    },
    getRouteError(state) {
      state.features = [];
      state.status = Status.ERROR;
    },
  },
});

export const { getRouteFetch, getRouteSuccess, getRouteError } = routeSlice.actions;

export default routeSlice.reducer;
