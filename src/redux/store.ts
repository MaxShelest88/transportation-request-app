import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './request/slice';
import routeReducer from './route/slice';
import requestsReducer from './requests/slice';
import createSagaMiddleware from '@redux-saga/core';
import routeSaga from './sagas/routeSaga';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    request: requestReducer,
    route: routeReducer,
    requests: requestsReducer,
  },
  middleware: [saga],
});

saga.run(routeSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch