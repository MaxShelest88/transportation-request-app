import { PointType } from './point';

export type Path = {
  finishPoint: PointType;
  startPoint: PointType;
};

export type RequestType = {
  title: string;
  id: string;
  path: Path;
};
