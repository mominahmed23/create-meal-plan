import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./MealCard";
import { PlusOutlined, DashOutlined, DeleteOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import SnackCard from "./SnackCard";
import PrimaryModal from "../PopupModals/PrimaryModal";
import { compose } from "redux";
import { addWeekAction } from "../../redux/actions/weeks";

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
  const [dayIndex, setDayIndex] = useState("");
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);
  const { weeks } = useSelector((state) => state);
  const dispatch = useDispatch();

  weeks && console.log("week index", weeks);
  console.log("weekindex", weekIndex);

  console.log("aaaa", weeks[`week${weekIndex}`]);
  const singleDay = weeks[`week${weekIndex}`];

  console.log("ddd", singleDay);
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

  const deleteItem = (item, mealItem) => {
    //console.log("ali", item);
    console.log("remove item", mealItem);
    const allData = singleDay[item];
    //console.log("redux data", allData);
    const filtered = allData.filter((item) => item != mealItem);
    //console.log("filtered array", filtered);
    const weekplan = { [item]: filtered };
    //console.log("weekplan", weekplan);
    // const weekplan = { [`week${weekIndex}`]: mealArray };
    //console.log("YOOOOOOOO ===========>>>>", weekplan);
    dispatch(addWeekAction(weekplan, weekIndex));
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
            {singleDay !== undefined
              ? singleDay.hasOwnProperty(item) &&
                singleDay[item].map((mealItem) => (
                  <div>
                    {mealItem}
                    <DeleteOutlined
                      className="mx-4"
                      onClick={() => deleteItem(item, mealItem)}
                    />
                  </div>
                ))
              : null}
          </h4>
          <Divider style={{ marginTop: "0" }} />
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
