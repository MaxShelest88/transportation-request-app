import React from 'react';
import { Select } from 'antd';
import './SelectModule.scss';
const { Option } = Select;

const SelectModule = ({ options, value, defaultValue, handleChange, item }) => {

  const optionValues = options.map((option, index) => (
    <Option
      value={option.value}
      key={option.id}
      disabled={
        option.id === item.path.finishPoint.id || option.id === item.path.startPoint.id
          ? true
          : false
      }
    >
      {option.name}
    </Option>
  ));

  return (
    <Select
      onClick={(e) => e.stopPropagation()}
      defaultValue={defaultValue}
      value={value}
      style={{
			width: 120,
      }}
      onChange={handleChange}
    >
      {optionValues}
    </Select>
  );
};

export default SelectModule;
