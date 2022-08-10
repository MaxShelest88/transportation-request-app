import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Заявка 1',
  id: 0,
  path: {
    startPoint: {name: 'Москва',
      value: 'Moscow',
      position: [55.75396, 37.620393],},
    finishPoint: { name: 'Рязань',
      value: 'Ryazan',
      position: [54.60954, 39.71259],},
  },
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequest(state, action) {
      state.title = action.payload.title;
      state.id = action.payload.id;
      state.path.startPoint = action.payload.path.startPoint;
      state.path.finishPoint = action.payload.path.finishPoint;
    },
    setStartPoint(state, action) {
      state.path.startPoint = action.payload
    },
    setFinishPoint(state, action) {
      state.path.finishPoint = action.payload
    }
  },
});

export const { setRequest, setStartPoint,setFinishPoint } = requestSlice.actions;
export default requestSlice.reducer;
