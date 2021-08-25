import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MealCard from './MealCard';
import { PlusOutlined, DashOutlined } from '@ant-design/icons';
import { Divider, Dropdown, Typography } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';

import { Menu, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import WeekImport from '../WeekImport';

const { Title, Text } = Typography;
const weekItems = [
  'Monday',
  'Tueday',
  'Wenesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const WeekDays = ({ weekIndex }) => {
  const [dayIndex, setDayIndex] = useState('');
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);
  const [isWeekImportModalVisible, setIsWeekImportModalVisible] =
    useState(false);

  const { weeks } = useSelector((state) => state);

  const showModal = () => {
    setIsMealModalVisible(true);
  };
  const handleOk = () => {
    setIsMealModalVisible(false);
    console.log('ok');
  };

  const handleCancel = () => {
    setIsMealModalVisible(false);
    console.log('cencel');
  };
  const handleWeekImportOk = () => {
    console.log('wweeeekkk', weeks);
  };
  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        onClick={() => setIsWeekImportModalVisible(true)}
      >
        Import week
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Title level={3} className="mb-8">{`week ${weekIndex}`}</Title>
      {/* {currentWeak && currentWeak["Monday"].map((item) => <div>{item}</div>)} */}
      {weekItems.map((item, i) => (
        <>
          <div className="d-flex align-center justify-space-between">
            <div>
              <Text strong>{item}</Text>
            </div>
            <div>
              <Dropdown overlay={menu} trigger={'click'}>
                <DashOutlined className="mx-4" overlay={menu} />
              </Dropdown>
              <PlusOutlined
                onClick={() => {
                  setIsMealModalVisible(true);
                  showModal();
                  setDayIndex(item);
                }}
              />
            </div>
          </div>
          <h4>
            {/* {currentWeak !== undefined
                ? currentWeak.hasOwnProperty(item) &&
                  currentWeak[item].map((mealItem) => <div>{mealItem}</div>)
                : null} */}
          </h4>
          <Divider style={{ marginTop: '0' }} />
          <WeekImport
            isWeekImportModalVisible={isWeekImportModalVisible}
            setIsWeekImportModalVisible={() =>
              setIsWeekImportModalVisible(false)
            }
            handleWeekImportOk={handleWeekImportOk}
            weekIndex={weekIndex}
            dayIndex={dayIndex}
          />
        </>
      ))}

      {/* <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}

      <MealCard
        isModalVisible={isMealModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        weekIndex={weekIndex}
        dayIndex={dayIndex}
      />
    </div>
  );
};

export default WeekDays;
{
  /* <PrimaryModal 
      title="Meal Card"
      hanldeOk={handleMealOk}
      handelCancel={()=>setIsMealModalVisible(false)}
      isModalVisisble={isMealModalVisible}
      >
        {"hello"}
      </PrimaryModal> */
}
