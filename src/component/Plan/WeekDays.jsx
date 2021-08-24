import React, { useState } from "react";
import { useSelector } from "react-redux";
import MealCard from "./MealCard";
import { PlusOutlined, DashOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import SnackCard from "./SnackCard";
import PrimaryModal from "../PopupModals/PrimaryModal";

const { Title, Text } = Typography;
const weekItems = [
  "Monday",
  "Tueday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeekDays = ({ weekIndex }) => {
  const { mealPlan } = useSelector((state) => state.mealPlan);
  console.log("mealPlan", mealPlan);
  //const { weak } = mealPlan;
  console.log("meal week", mealPlan[`weak${weekIndex}`]);
  const currentWeak = mealPlan[`weak${weekIndex}`];
  currentWeak && console.log("cuurent weak", currentWeak["Monday"]);
  const [dayIndex, setDayIndex] = useState("");
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);

  const showModal = () => {
    setIsMealModalVisible(true);
  };
  const handleOk = () => {
    setIsMealModalVisible(false);
    console.log("ok");
  };

  const handleCancel = () => {
    setIsMealModalVisible(false);
    console.log("cencel");
  };

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
              <DashOutlined className="mx-4" />
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
          <Divider style={{ marginTop: "0" }} />
        </>
      ))}
      {/* <PrimaryModal 
      title="Meal Card"
      hanldeOk={handleMealOk}
      handelCancel={()=>setIsMealModalVisible(false)}
      isModalVisisble={isMealModalVisible}
      >
        {"hello"}
      </PrimaryModal> */}
      <MealCard
        isModalVisible={isMealModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        weakIndex={weekIndex}
        dayIndex={dayIndex}
      />
    </div>
  );
};

export default WeekDays;
