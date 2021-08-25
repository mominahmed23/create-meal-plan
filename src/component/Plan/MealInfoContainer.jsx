import React from 'react';
import './MealInfo.css';
const MealInfoContainer = ({
  name,
  image,
  handleCancel,
  setIsSnackModalVisible,
}) => {
  return (
    <div
      className="mealSelected"
      onClick={() => {
        // console.log(item);
        name === 'Add a snack' && setIsSnackModalVisible(true);
        name === 'Add a snack' && handleCancel();
        // finalMealPlanofDay();
      }}
    >
      <div className="mealSelected mt-4">
        <img src={image} width="60" height="60" alt="" />
        <h3 className="ml-5">{name}</h3>
      </div>
    </div>
  );
};

export default MealInfoContainer;
