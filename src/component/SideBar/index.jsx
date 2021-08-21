import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const SideBar = () => {
  return (
    <div>
      <Menu
        // onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        {" "}
        <SubMenu key="sub1" title="Title">
          <Menu.Item key="1">Option 1</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">Ingredients</Menu.Item>
        <Menu.Item key="4">Preparation</Menu.Item>
        <Menu.Item key="5">Description</Menu.Item>
      </Menu>{" "}
    </div>
  );
};

export default SideBar;
