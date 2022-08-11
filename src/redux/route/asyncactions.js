import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRoute = createAsyncThunk('request/fetchRoute', async (params) => {
  const { startPoint, finishPoint } = params;
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/routing?waypoints=${startPoint.position.join(
      ',',
    )}|${finishPoint.position.join(',')}&mode=drive&apiKey=${process.env.REACT_APP_API_KEY}`,
  );
  console.log(data);
  return data;
});
