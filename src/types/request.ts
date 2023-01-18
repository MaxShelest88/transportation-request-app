import { PointType } from './point';

export type PathType = {
  finishPoint: PointType;
  startPoint: PointType;
};

export type RequestType = {
  title: string;
  id: number;
  path: PathType;
};
