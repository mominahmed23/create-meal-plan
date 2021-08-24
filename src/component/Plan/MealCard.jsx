import { Card } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMealPlanAction } from "../../redux/actions/categories";
const mealItems = ["Biryani", "Burger"];
var reduxMealItem = [];
var SingleMealPlan = {};

const addReduxItems = (meal) => {
  reduxMealItem.push(meal);
  console.log("redux meal item", reduxMealItem);
};

console.log("redux meal item", reduxMealItem);
const MealCard = ({
  isModalVisible,
  handleOk,
  handleCancel,
  selectedRecipe,
  weakIndex,
  dayIndex,
}) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const finalMealPlanofDay = () => {
    console.log("=======\nday", dayIndex);
    console.log(`weak${weakIndex}`, weakIndex);
    console.log("redux meal item", reduxMealItem);
  };
  const onOkModal = () => {
    const weekplan = { [dayIndex]: reduxMealItem };
    console.log(weekplan);
    SingleMealPlan[`weak${weakIndex}`] = weekplan;
    console.log("finalll", SingleMealPlan);
    dispatch(addMealPlanAction(SingleMealPlan));
    //reduxMealItem.length = 0;
    handleOk();
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={onOkModal}
        onCancel={handleCancel}
      >
        <Card style={{ width: 300 }}>
          <h3>Add Meal</h3>
          {/* Get id,name,img of food on click */}

          {mealItems.map((item, i) => (
            <div
              key={i}
              className="mealInfoContainer"
              style={{ background: "#ecececec" }}
              onClick={() => {
                addReduxItems(item);
                console.log(item);
                // finalMealPlanofDay();
              }}
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
