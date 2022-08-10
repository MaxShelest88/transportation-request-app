import React from 'react';
import { List } from 'antd';
import { useState } from 'react';
import Select from '../UI/SelectModule/SelectModule';
import {setFinishPoint, setRequest, setStartPoint} from '../../redux/request/slice';
import {useDispatch, useSelector} from 'react-redux';
import { CarOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from './RequestsList.module.scss';
import {selectId, selectPath} from "../../redux/request/selectors";

const RequestsList = ({ data, cities }) => {

    const path = useSelector(selectPath)
    const id = useSelector(selectId)
	const dispatch = useDispatch();


  const handleStartPointChange = (value) => {
      const selectedPoint = cities.find(item=> item.value === value)
      // console.log(selectedPoint)
    dispatch(setStartPoint(selectedPoint))
  };

    const handleFinishPointChange = (value) => {
        const selectedPoint = cities.find(item=> item.value === value)
        // console.log(selectedPoint)
        dispatch(setFinishPoint(selectedPoint))
    };

  const handleClick = (item) => {
    dispatch(setRequest(item));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className={id === item.id ? classes.active : ''} onClick={() => handleClick(item)}>
          <List.Item.Meta
            avatar={<CarOutlined />}
            title={item.title}
          />
          <div className={classes.actions}>
            <Select value={id !== item.id ? item.path.startPoint:path.startPoint}
              handleChange={handleStartPointChange}
              defaultValue={item.path.startPoint}
              options={cities}
            />
            <Select value={id !== item.id ? item.path.finishPoint: path.finishPoint}
              handleChange={handleFinishPointChange}
              defaultValue={item.path.finishPoint}
              options={cities}
            />
          </div>
        </List.Item>
      )}
    />
  );
};

export default RequestsList;
