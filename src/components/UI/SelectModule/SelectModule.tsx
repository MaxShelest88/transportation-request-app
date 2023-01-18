import React from 'react';
import { Select } from 'antd';
import './SelectModule.scss';
import { PointType, RequestType } from '../../../types';
const { Option } = Select;

type SelectModuleProps = {
  options: PointType[];
  value: string;
  defaultValue: string;
  handleChange: (value: string) => void;
  item: RequestType;
};

const SelectModule: React.FC<SelectModuleProps> = ({
  options,
  value,
  defaultValue,
  handleChange,
  item,
}) => {
  const optionValues = options.map((option) => (
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
