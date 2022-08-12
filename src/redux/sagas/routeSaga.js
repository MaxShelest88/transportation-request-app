import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getRouteSuccess } from '../route/slice';

function* getRouteFetchWorker(action) {
  const { startPoint, finishPoint } = action.payload;
  const { data } = yield call(() =>
    axios.get(
      `https://api.geoapify.com/v1/routing?waypoints=${startPoint.position.join(
        ',',
      )}|${finishPoint.position.join(',')}&mode=drive&apiKey=${process.env.REACT_APP_API_KEY}`,
    ),
  );
  yield put(getRouteSuccess(data.features));
}

function* routeSaga() {
  yield takeEvery('route/getRouteFetch', getRouteFetchWorker);
}

export default routeSaga;
