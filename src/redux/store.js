import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './request/slice';
import routeReducer from './route/slice'
import requestsReducer from './requests/slice';

export const store = configureStore({
  reducer: {
    request: requestReducer,
    route: routeReducer,
    requests: requestsReducer,
  },
});
