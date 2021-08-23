import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Ingredients = () => {
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
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Click me <DownOutlined />
        </a>
      </Dropdown>
    </>
  );
};

export default Ingredients;
