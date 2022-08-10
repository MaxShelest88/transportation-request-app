import React from 'react';
import { List } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from './RequestsList.module.scss';
import Select from '../UI/SelectModule/SelectModule';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const RequestsList = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<CarOutlined />}
            title={<a href="https://ant.design">{item.title}</a>}
          />
          <div className={classes.actions}>
            <Select
              handleChange={handleChange}
              defaultValue={item.title}
              options={[
                { name: '12', value: '12' },
                { name: '24', value: '24' },
              ]}
            />
            <Select
              handleChange={handleChange}
              defaultValue={item.title}
              options={[
                { name: '12', value: '12' },
                { name: '24', value: '24' },
              ]}
            />
          </div>
        </List.Item>
      )}
    />
  );
};

export default RequestsList;
