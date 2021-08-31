import React, { useState } from "react";
import { Button, Dropdown, Form, Input, Tag } from "antd";
import { Menu } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Radio, Space } from "antd";

const { Title, Text } = Typography;

const menu = (
  <Menu>
    {/* onClick={handleMenuClick} */}
    <Menu.Item key="1" icon={<UserOutlined />}>
      LifeStyle 1
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      LifeStyle 2
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      LifeStyle 3
    </Menu.Item>
  </Menu>
);

const Settings = () => {
  const [value, setValue] = useState(1);
  const [tagValue, setTagValue] = useState(null);
  const onChange = (e) => {
    //console"radio checked", e.target.value);
    setValue(e.target.value);
  };
  const tagData = (e) => {
    setTagValue();
    //console"tag value", e.target.value);
  };
  return (
    <div className="p-10">
      <span className="default-component-heading">Settings & SEO</span>
      <Form layout="vertical">
        <Form.Item>
          <div className="d-flex align-center mb-3 mt-6">
            <h4 className="default-title text-center mr-1" strong>
              Tags{" "}
            </h4>
            <h4 className="default-subtitle text-center" strong>
              {" "}
              (up to 10)
            </h4>
          </div>

          <Input
            value={tagValue}
            onBlur={tagData}
            placeholder="Add tags with hashtags"
            name={"tags"}
          />
        </Form.Item>
      </Form>

      <h4 className="default-title text-center mb-3" strong>
        Lifestyles{" "}
      </h4>
      <Dropdown overlay={menu}>
        <Button
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Select <DownOutlined />
        </Button>
      </Dropdown>

      <div className="visibilityContainer mt-8">
        <h4 className="week-sub-comp-num mb-3" strong>
          Visibility
        </h4>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Public - Anyone can see it</Radio>
            <Radio value={2}>Unlisted - Only visible with direct link</Radio>
            <Radio value={3}>Private - Only I can see it</Radio>
          </Space>
        </Radio.Group>
      </div>
      <div className="mt-5">
        <h4 className="week-sub-comp-num " strong>
          SEO preview
        </h4>
        <div style={{ border: "1px solid #cecece", minHeight: "100px" }}>
          <a>New Meal Plan by Talha</a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
