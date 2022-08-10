import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './request/slice';

export const store = configureStore({
  reducer: {
    request: requestReducer,
  },
});
