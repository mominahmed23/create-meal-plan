import React, { useState } from 'react';
import { Button, Dropdown, Form, Input } from 'antd';
import { Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Radio, Space } from 'antd';

const { Title, Text } = Typography;

const menu = (
  <Menu>
    {/* onClick={handleMenuClick} */}
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
const Settings = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <h2 className="mt-5">Settings & SEO</h2>
      <Form layout="vertical">
        <Form.Item>
          <Title level={5} className=" my-2">
            Title{' '}
            <Text level={4} disabled>
              (Up to 10)
            </Text>
          </Title>

          <Input
            // value={title}
            // onChange={(e) => addTitle(e.target.value)}
            placeholder="Add tags with hashtags"
            // name={'title'}
          />
        </Form.Item>
      </Form>

      <Title level={5} className=" my-2">
        Liyestyles
      </Title>
      <Dropdown overlay={menu}>
        <Button
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Select <DownOutlined />
        </Button>
      </Dropdown>

      <div className="visibilityContainer mt-8">
        <h4>Visibility</h4>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Public - Anyone can see it</Radio>
            <Radio value={2}>Unlisted - Only visible with direct link</Radio>
            <Radio value={3}>Private - Only I can see it</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Settings;
