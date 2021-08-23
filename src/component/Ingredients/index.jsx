import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
} from "antd";

const Ingredients = () => {
  const { Option } = Select;
  const onClick = ({ key }) => {
    console.log(`Click on item ${key}`);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="0">1</Menu.Item>
      <Menu.Item key="1">2</Menu.Item>
      <Menu.Item key="3">3</Menu.Item>
    </Menu>
  );
  return (
    <>
      <h2>How many servings</h2>
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">1</Option>
        </Select>
      </Input.Group>
    </>
  );
};

export default Ingredients;
