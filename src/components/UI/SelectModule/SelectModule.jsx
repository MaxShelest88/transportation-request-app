import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const SelectModule = ({ options, value, defaultValue, handleChange }) => {
  const optionValues = options.map((option, index) => (
    <Option value={option.value} key={index}>
      {option.name}
    </Option>
  ));

  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      style={{
        width: 120,
      }}
      onChange={handleChange}>
      {optionValues}
    </Select>
  );
};

export default SelectModule;
