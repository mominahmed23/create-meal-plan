import React, { useState } from "react";
import { useSelector } from "react-redux";
import MealCard from "./MealCard";

const weekItems = [
  "Monday",
  "Tueday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeekDays = ({ plan }) => {
  const { mealPlan } = useSelector((state) => state.mealPlan);
  console.log("mealPlan", mealPlan);
  //const { weak } = mealPlan;
  console.log("meal week", mealPlan[`weak${plan}`]);
  const currentWeak = mealPlan[`weak${plan}`];
  currentWeak && console.log("cuurent weak", currentWeak["Monday"]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dayIndex, setDayIndex] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log("ok");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log("cencel");
  };
  return (
    <div>
      <h2>{plan}</h2>
      {/* {currentWeak && currentWeak["Monday"].map((item) => <div>{item}</div>)} */}
      <ul style={{ listStyle: "none" }}>
        {weekItems.map((item, i) => (
          <>
            <h3 key={i}>{item}</h3>{" "}
            <h4>
              {/* {currentWeak !== undefined
                ? currentWeak.hasOwnProperty(item) &&
                  currentWeak[item].map((mealItem) => <div>{mealItem}</div>)
                : null} */}
            </h4>
            <button
              onClick={() => {
                showModal();
                setDayIndex(item);
              }}
            >
              Add
            </button>
          </>
        ))}
        <MealCard
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          weakIndex={plan}
          dayIndex={dayIndex}
        />
      </ul>
    </div>
  );
};

export default WeekDays;
