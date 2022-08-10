import React from 'react';
import { List } from 'antd';
import { useState } from 'react';
import Select from '../UI/SelectModule/SelectModule';
import { setRequset } from '../../redux/request/slice';
import { useDispatch } from 'react-redux';
import { CarOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from './RequestsList.module.scss';


const RequestsList = ({ data, cities }) => {

	const dispatch = useDispatch();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleClick = (item) => {
    dispatch(setRequset(item));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className={classes.active} onClick={() => handleClick(item)}>
          <List.Item.Meta
            avatar={<CarOutlined />}
            title={item.title}
          />
          <div className={classes.actions}>
            <Select
              handleChange={handleChange}
              defaultValue={item.path.startPoint}
              options={cities}
            />
            <Select
              handleChange={handleChange}
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
