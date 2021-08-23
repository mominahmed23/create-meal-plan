import React, { useState } from 'react';
import MealCard from './MealCard';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h2>{plan}</h2>
      <ul style={{ listStyle: 'none' }}>
        {weekItems.map((item, i) => (
          <>
            <h3 key={i}>{item}</h3>{' '}
            <button onClick={() => showModal()}>Add</button>
          </>
        ))}
        <MealCard
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </ul>
    </div>
  );
};

export default WeekDays;
