import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getRouteSuccess, getRouteError } from '../route/slice';
import { PathType } from '../../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { FeatureCollection } from 'geojson';

const routeFetch = async (action: PayloadAction<PathType>) => {
  const { startPoint, finishPoint } = action.payload;
  const { data } = await axios.get<FeatureCollection>(
    `https://api.geoapify.com/v1/routing?waypoints=${startPoint.position.join(
      ',',
    )}|${finishPoint.position.join(',')}&mode=drive&apiKey=${process.env.REACT_APP_API_KEY}`,
  );
  return data;
};

function* getRouteFetchWorker(action: any): any {
  try {
    const response = yield call(() => routeFetch(action));
    yield put(getRouteSuccess(response.features));
  } catch (err: any) {
    put(getRouteError());
  }
}

function* routeSaga() {
  yield takeEvery('route/getRouteFetch', getRouteFetchWorker);
}

export default routeSaga;
