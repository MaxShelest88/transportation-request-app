import React, { useEffect } from 'react';
import { List } from 'antd';
import { setFinishPoint, setRequest, setStartPoint } from '../../redux/request/slice';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import classes from './RequestsList.module.scss';
import { selectId, selectPath } from '../../redux/request/selectors';
import { fetchRoute } from '../../redux/route/asyncactions';
import RequestItem from '../RequestItem/RequestItem';

const RequestsList = ({ data, cities }) => {
  const path = useSelector(selectPath);
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPath = () => {
      dispatch(fetchRoute(path));
    };
    getPath();
  }, [path]);

  const handleStartPointChange = (value) => {
    const selectedPoint = cities.find((item) => item.value === value);
    dispatch(setStartPoint(selectedPoint));
  };

  const handleFinishPointChange = (value) => {
    const selectedPoint = cities.find((item) => item.value === value);
    dispatch(setFinishPoint(selectedPoint));
  };

  const handleClick = (item) => {
    dispatch(setRequest(item));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <RequestItem
          item={item}
          id={id}
          path={path}
          handleFinishPointChange={handleFinishPointChange}
          handleClick={handleClick}
          handleStartPointChange={handleStartPointChange}
          cities={cities}
        />
      )}
    />
  );
};

export default RequestsList;
