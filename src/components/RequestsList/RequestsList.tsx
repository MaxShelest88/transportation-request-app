import React, { useEffect } from 'react';
import { List } from 'antd';
import { setFinishPoint, setRequest, setStartPoint } from '../../redux/request/slice';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import classes from './RequestsList.module.scss';
import { selectId, selectPath } from '../../redux/request/selectors';
import RequestItem from '../RequestItem/RequestItem';
import { getRouteFetch } from '../../redux/route/slice';
import { PointType, RequestType } from '../../types';
import { useAppDispatch } from '../../redux/store';

type RequestsListProps = {
  data: RequestType[];
  cities: PointType[];
};

const RequestsList: React.FC<RequestsListProps> = ({ data, cities }) => {
  const path = useSelector(selectPath);
  const id = useSelector(selectId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRouteFetch(path));
  }, [path, dispatch]);

  const handleStartPointChange = (value: string) => {
    const selectedPoint = cities.find((item) => item.value === value);
    if (selectedPoint) dispatch(setStartPoint(selectedPoint));
  };

  const handleFinishPointChange = (value: string) => {
    const selectedPoint = cities.find((item) => item.value === value);
    if (selectedPoint) dispatch(setFinishPoint(selectedPoint));
  };

  const handleClick = (item: RequestType) => {
    dispatch(setRequest(item));
  };

  return (
    <div className={classes.root}>
      <div className={classes.child}>
        <h2 className={classes.title}>Список заявок</h2>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <RequestItem
              item={item}
              id={id}
              handleFinishPointChange={handleFinishPointChange}
              handleClick={handleClick}
              handleStartPointChange={handleStartPointChange}
              cities={cities}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RequestsList;
