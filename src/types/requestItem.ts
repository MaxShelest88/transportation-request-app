import { PointType } from './point';
import { RequestType } from './request';

export type RequestItemType = {
  item: RequestType;
  id: string;
  cities: PointType[];
  handleStartPointChange: (value: string) => void;
  handleFinishPointChange: (value: string) => void;
  handleClick: (item: RequestType) => void;
};
