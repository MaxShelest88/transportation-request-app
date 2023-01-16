import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PointType, RequestType, Waypoint } from '../../types';

const initialState: RequestType = {
  title: 'Заявка 1',
  id: 0,
  path: {
    startPoint: { id: 'city-01', name: 'Москва', value: 'Moscow', position: [55.75396, 37.620393] },
    finishPoint: { id: 'city-04', name: 'Рязань', value: 'Ryazan', position: [54.60954, 39.71259] },
  },
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequest(state, action: PayloadAction<RequestType>) {
      state.title = action.payload.title;
      state.id = action.payload.id;
      state.path.startPoint = action.payload.path.startPoint;
      state.path.finishPoint = action.payload.path.finishPoint;
    },
    setStartPoint(state, action: PayloadAction<PointType>) {
      state.path.startPoint = action.payload;
    },
    setFinishPoint(state, action: PayloadAction<PointType>) {
      state.path.finishPoint = action.payload;
    },
  },
});

export const { setRequest, setStartPoint, setFinishPoint } = requestSlice.actions;
export default requestSlice.reducer;
