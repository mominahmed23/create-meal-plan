import { Card } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

const mealItems = ['Biryani', 'Burger'];

const MealCard = ({
  isModalVisible,
  handleOk,
  handleCancel,
  selectedRecipe,
}) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card style={{ width: 300 }}>
          <h3>Add Meal</h3>
          {/* Get id,name,img of food on click */}

          {mealItems.map((item, i) => (
            <div
              key={i}
              className="mealInfoContainer"
              style={{ background: '#ecececec' }}
              onClick={() => console.log(item)}
              //   onCancel={handleFoodClick}
            >
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                width="60"
                height="60"
                alt=""
              />
              <p>{item}</p>
            </div>
          ))}
        </Card>
      </Modal>
    </div>
  );
};

export default MealCard;
