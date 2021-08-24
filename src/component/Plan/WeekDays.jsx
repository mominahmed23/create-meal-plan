import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MealCard from './MealCard';
import { PlusOutlined, DashOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import SnackCard from './SnackCard';

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

const WeekDays = ({ plan }) => {
  const { mealPlan } = useSelector((state) => state.mealPlan);
  console.log('mealPlan', mealPlan);
  //const { weak } = mealPlan;
  console.log('meal week', mealPlan[`weak${plan}`]);
  const currentWeak = mealPlan[`weak${plan}`];
  currentWeak && console.log('cuurent weak', currentWeak['Monday']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSnackModalVisible, setIsSnackModalVisible] = useState(false);
  const [dayIndex, setDayIndex] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log('ok');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log('cencel');
  };

  const handleCancelSnack = () => {
    setIsSnackModalVisible(false);
    console.log('cencel snack');
  };
  return (
    <div>
      <Title level={3} className="mb-8">{`week ${plan}`}</Title>
      {/* {currentWeak && currentWeak["Monday"].map((item) => <div>{item}</div>)} */}
      {weekItems.map((item, i) => (
        <>
          <div className="d-flex align-center justify-space-between">
            <div>
              <Text strong>{item}</Text>
            </div>
            <div>
              <DashOutlined className="mx-4" />
              <PlusOutlined
                onClick={() => {
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
        </>
      ))}
      <MealCard
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        weakIndex={plan}
        dayIndex={dayIndex}
      />
      \
      <SnackCard
        handleOk={handleOk}
        isSnackModalVisible={isSnackModalVisible}
        setIsSnackModalVisible={setIsSnackModalVisible}
        handleCancelSnack={handleCancelSnack}
        weakIndex={plan}
        dayIndex={dayIndex}
      />
    </div>
  );
};

export default WeekDays;
