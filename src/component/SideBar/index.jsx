import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

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
        style={{ marginTop: "20px" }}
      >
        {" "}
        <SubMenu key="sub1" title="Title">
          <Menu.Item key="1">Option 1</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <Link to="ingredients">Ingredients </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="preparation">Preparation</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="description">Description</Link>
        </Menu.Item>
      </Menu>{" "}
    </div>
  );
};

export default SideBar;
