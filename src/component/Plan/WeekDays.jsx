import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MealCard from './MealCard';
import {
  PlusOutlined,
  DashOutlined,
  DeleteOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Divider, Dropdown, Menu, Typography } from 'antd';
import { addWeekAction } from '../../redux/actions/weeks';
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

  const dispatch = useDispatch();

  weeks && console.log('week index', weeks);

  const singleDay = weeks[`week${weekIndex}`];

  const showModal = () => {
    setIsMealModalVisible(true);
  };
  const handleOk = () => {
    setIsMealModalVisible(false);
  };

  const handleCancel = () => {
    setIsMealModalVisible(false);
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
    </Menu>
  );

  const deleteItem = (item, mealItem) => {
    console.log('remove item', mealItem);
    const allData = singleDay[item];

    const filtered = allData.filter((item) => item != mealItem);

    const weekplan = { [item]: filtered };

    dispatch(addWeekAction(weekplan, weekIndex));
  };
  return (
    <div>
      <Title level={3} className="mb-8">{`week ${weekIndex}`}</Title>

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
          <Divider style={{ marginTop: '0' }} />
          <div className="mb-5" style={{ backgroundColor: 'rgb(224 221 221)' }}>
            {singleDay !== undefined
              ? singleDay.hasOwnProperty(item) &&
                singleDay[item].map((mealItem) => (
                  <div className="d-flex justify-space-around">
                    <div>
                      <Text strong>{mealItem}</Text>
                    </div>
                    <div>
                      <DeleteOutlined
                        className="mx-4"
                        onClick={() => deleteItem(item, mealItem)}
                      />
                    </div>
                  </div>
                ))
              : null}
          </div>

          <WeekImport
            isWeekImportModalVisible={isWeekImportModalVisible}
            setIsWeekImportModalVisible={() =>
              setIsWeekImportModalVisible(false)
            }
            handleWeekImportOk={() => setIsWeekImportModalVisible(false)}
            weekIndex={weekIndex}
            dayIndex={dayIndex}
          />
        </>
      ))}

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
