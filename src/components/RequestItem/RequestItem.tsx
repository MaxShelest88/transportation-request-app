import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import Select from '../UI/SelectModule/SelectModule';
import classes from './RequestItem.module.scss';
import { useRef } from 'react';
import { setCurrentPoint } from '../../redux/requests/slice';
import { PointType, RequestType } from '../../types';
import { useAppDispatch } from '../../redux/store';

type RequestItemProps = {
  item: RequestType;
  id: number;
  cities: PointType[];
  handleStartPointChange: (value: string) => void;
  handleFinishPointChange: (value: string) => void;
  handleClick: (item: RequestType) => void;
};

const RequestItem: React.FC<RequestItemProps> = ({
  item,
  id,
  cities,
  handleStartPointChange,
  handleFinishPointChange,
  handleClick,
}) => {
  const [startValue, setStartValue] = useState(item.path.startPoint.value);
  const [finishValue, setFinishValue] = useState(item.path.finishPoint.value);
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMounted.current) {
      const startPoint = cities.find((item) => item.value === startValue);
      const finishPoint = cities.find((item) => item.value === finishValue);
      if (startPoint && finishPoint) dispatch(setCurrentPoint({ startPoint, finishPoint, item }));
    }
    isMounted.current = true;
  }, [startValue, finishValue]);

  const handleStartChange = (value: string) => {
    setStartValue(value);
    if (id === item.id) {
      handleStartPointChange(value);
    }
  };

  const handlefinishChange = (value: string) => {
    setFinishValue(value);
    if (id === item.id) {
      handleFinishPointChange(value);
    }
	};
	

  return (
    <List.Item
      className={`${classes['list-item']} ${id === item.id ? classes.active : ''}`}
      onClick={() => handleClick(item)}
    >
      <List.Item.Meta
        avatar={<CarOutlined />}
        title={item.title}
      />
      <div className={classes.actions}>
        <div className={classes.action}>
          <span className={classes.title}>Точка погрузки:</span>
          <Select
            value={startValue}
            handleChange={handleStartChange}
            defaultValue={item.path.startPoint.value}
            options={cities}
            item={item}
          />
        </div>
        <div className={classes.action}>
          <span className={classes.title}>Точка разгрузки:</span>
          <Select
            value={finishValue}
            handleChange={handlefinishChange}
            defaultValue={item.path.finishPoint.value}
            options={cities}
            item={item}
          />
        </div>
      </div>
    </List.Item>
  );
};

export default RequestItem;
