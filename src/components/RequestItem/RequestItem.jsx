import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import Select from '../UI/SelectModule/SelectModule';
import { useSelector, useDispatch } from 'react-redux';
import classes from './RequestItem.module.scss';
import { selectRequests } from '../../redux/requests/selectors';
import { useRef } from 'react';
import { setCurrentPoint } from '../../redux/requests/slice';

const RequestItem = ({
  item,
  id,
  cities,
  path,
  handleStartPointChange,
  handleFinishPointChange,
  handleClick,
  value,
}) => {
  const [startValue, setStartValue] = useState(item.path.start);
  const [finishValue, setFinishValue] = useState(item.path.finish);
  const isMounted = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMounted.current) {
      const startPoint = cities.find((item) => item.value === startValue);
      const finishPoint = cities.find((item) => item.value === finishValue);
      dispatch(setCurrentPoint({ startPoint, finishPoint, item }));
    }
    isMounted.current = true;
  }, [startValue, finishValue]);

  const handleStartChange = (value) => {
    setStartValue(value);
    if (id === item.id) {
      handleStartPointChange(value);
    }
  };

  const handlefinishChange = (value) => {
    setFinishValue(value);
    if (id === item.id) {
      handleFinishPointChange(value);
    }
  };

  return (
    <List.Item
      className={`${classes['list-item']} ${id === item.id ? classes.active : ''}`}
      onClick={() => handleClick(item)}>
      <List.Item.Meta avatar={<CarOutlined />} title={item.title} />
      <div className={classes.actions}>
        <Select
          value={startValue}
          handleChange={handleStartChange}
          defaultValue={item.path.startPoint}
          options={cities}
        />
        <Select
          value={finishValue}
          handleChange={handlefinishChange}
          defaultValue={item.path.finishPoint}
          options={cities}
        />
      </div>
    </List.Item>
  );
};

export default RequestItem;
