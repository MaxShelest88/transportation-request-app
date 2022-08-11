import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './request/slice';
import routeReducer from './route/slice'

export const store = configureStore({
  reducer: {
    request: requestReducer,
    route: routeReducer,
  },
});
