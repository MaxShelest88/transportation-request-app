import React, { useState } from 'react';
import { List } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import Select from '../UI/SelectModule/SelectModule';

import classes from './RequestItem.module.scss';

const RequestItem = ({
  item,
  id,
  cities,
  path,
  handleStartPointChange,
  handleFinishPointChange,
  handleClick,
}) => {
  const [startValue, setStartValue] = useState(item.path.start);
  const [finishValue, setFinishValue] = useState(item.path.start);

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
