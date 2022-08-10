import React from 'react';
import { List } from 'antd';
import { CarOutlined } from '@ant-design/icons';

const RequestItem = ({ item }) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<CarOutlined />}
        title={<a href="https://ant.design">{item.title}</a>}
      />
    </List.Item>
  );
};

export default RequestItem;
