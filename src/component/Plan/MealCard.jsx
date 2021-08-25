import { Card, Input, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMealPlanAction } from "../../redux/actions/categories";
import { CheckOutlined } from "@ant-design/icons";

import SnackPopup from "./SnackPopup";
import { addWeekAction } from "./../../redux/actions/weeks/index";
import "./MealInfo.css";

const data = [{ name: "Biryani" }, { name: "Burger" }];

const MealCard = ({
  isModalVisible,
  handleOk,
  handleCancel,
  weekIndex,
  dayIndex,
}) => {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");
  const [isRecipeVisible, setIsRecipeVisible] = useState(true);
  const [IsSnackModalVisible, setIsSnackModalVisible] = useState(false);
  const [isMealSelected, setIsMealSelected] = useState(false);
  const [selectedMealName, setSelectedMealName] = useState([]);

  // const [mealArray, setMealArray] = useState([]);
  const { weeks } = useSelector((state) => state);
  var mealArray = [];
  var abc = [];
  const dispatch = useDispatch();
  console.log("sss", weeks);
  const sDay = weeks[`week${weekIndex}`];
  // if (sDay) {
  //   // setSelectedMealName(...sDay[dayIndex]);
  //   abc = [...sDay[dayIndex]];
  //   console.log("aaa", abc);
  // }

  const onModalOk = () => {
    handleOk();
    mealArray = [...selectedMealName];
    const weekplan = { [dayIndex]: mealArray };
    console.log("YOOOOOOOO ===========>>>>", weekplan);
    dispatch(addWeekAction(weekplan, weekIndex));
  };

  const onMealClick = (item) => {
    const temp = [...selectedMealName];
    if (temp.includes(item)) {
      const filterd = temp.filter((value) => value !== item);
      setSelectedMealName(filterd);
    } else {
      temp.push(item);
      setSelectedMealName(temp);
    }
    console.log(selectedMealName);
  };

  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={onModalOk}
        onCancel={handleCancel}
        title={"Add Meal"}
      >
        <Input
          placeholder="Search a Meal"
          value={value}
          onChange={(e) => {
            const currValue = e.target.value.toLowerCase();
            setValue(currValue);
            const filteredData = data.filter((entry) =>
              entry.name.toLowerCase().includes(currValue)
            );
            setDataSource(filteredData);
          }}
        />
        <Card style={{ width: "100%" }} className="mt-5 px-0">
          <div
            className="d-flex align-center mt-4"
            onClick={() => {
              setIsSnackModalVisible(true);
              handleCancel();
              console.log("clicked");
            }}
          >
            <img
              src="https://image.shutterstock.com/image-vector/apple-vector-illustration-600w-562247050.jpg"
              width="60"
              height="60"
              alt=""
              onClick={() => {
                setIsSnackModalVisible(true);
                console.log("clicked");
              }}
            />
            <h3 className="ml-5">{"Add A sanck"}</h3>
          </div>
          <div className="d-flex align-center mt-4">
            <img
              src="error"
              width="60"
              height="60"
              alt=""
              onClick={() => {
                console.log("clicked");
              }}
            />
            <h3 className="ml-5">{"Create New"}</h3>
          </div>
          {isRecipeVisible &&
            dataSource.map((item, i) => (
              <div
                key={i}
                className={
                  selectedMealName.includes(item.name)
                    ? "mealSelected"
                    : "mealInfoContainer"
                }
                onClick={() => {
                  onMealClick(item.name);
                }}
              >
                <div className="d-flex align-center mt-4">
                  <div class="container">
                    {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
                    <img
                      className={
                        selectedMealName.includes(item.name)
                          ? "imageSelected"
                          : ""
                      }
                      src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                      width="60"
                      height="60"
                      alt=""
                    />
                    <div
                      className={
                        selectedMealName.includes(item.name)
                          ? "overlay"
                          : "noDisplay"
                      }
                    >
                      <a href="#" className="icon" title="User Profile">
                        {selectedMealName.includes(item.name) && (
                          <CheckOutlined
                            style={{
                              fontSize: "28px",
                              color: "#ffffff",
                            }}
                          />
                        )}
                      </a>
                    </div>
                  </div>

                  <h3 className="ml-5">{item.name}</h3>
                  {weeks &&
                    sDay &&
                    sDay.hasOwnProperty(dayIndex) &&
                    sDay[dayIndex].includes(item.name) && <div>hello</div>}
                </div>
              </div>
            ))}
        </Card>
      </Modal>
      <SnackPopup
        isModalVisible={IsSnackModalVisible}
        handleOk={() => setIsSnackModalVisible(false)}
        handleCancel={() => setIsSnackModalVisible(false)}
      />
    </div>
  );
};

export default MealCard;
