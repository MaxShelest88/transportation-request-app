import { createSlice} from '@reduxjs/toolkit';
import { Status } from '../../types';

const initialState = {
  features: [],
  status: Status.LOADING,
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    getRouteFetch(state) {
      state.features = [];
      state.status = Status.LOADING;
    },
    getRouteSuccess(state, action) {
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
