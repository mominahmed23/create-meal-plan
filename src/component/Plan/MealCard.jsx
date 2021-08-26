import { Card, Input, message, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMealPlanAction } from "../../redux/actions/categories";
import { CheckOutlined } from "@ant-design/icons";

import SnackPopup from "./SnackPopup";
import { addWeekAction } from "./../../redux/actions/weeks/index";
import "./MealInfo.css";
// const mealItems = ['Biryani', 'Burger'];
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
  const [selectedMealName, setSelectedMealName] = useState([]);

  console.log("day index", dayIndex);
  // const [mealArray, setMealArray] = useState([]);
  const { weeks } = useSelector((state) => state);
  var mealArray = [];
  var abc = [];
  const dispatch = useDispatch();
  console.log("sss", weeks);
  const sDay = weeks[`week${weekIndex}`];

  const onModalOk = () => {
    handleOk();
    mealArray = [...selectedMealName];
    const weekplan = { [dayIndex]: mealArray };
    console.log("YOOOOOOOO ===========>>>>", weekplan);
    dispatch(addWeekAction(weekplan, weekIndex));
    setSelectedMealName("");
  };

  const onMealClick = (item) => {
    const temp = [...selectedMealName];
    if (selectedMealName.length <= 10) {
      if (temp.includes(item)) {
        const filterd = temp.filter((value) => value !== item);
        setSelectedMealName(filterd);
      } else {
        temp.push(item);
        setSelectedMealName(temp);
      }
    } else {
      message.warning("Can't upload more than 10");
    }
    console.log(selectedMealName);
  };

  useEffect(() => {
    if (Object.keys(weeks) && sDay && sDay.hasOwnProperty(dayIndex)) {
      abc = [...sDay[dayIndex]];
      setSelectedMealName(abc);
    }
  }, []);
  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={onModalOk}
        onCancel={handleCancel}
        title={"Add Meal"}
        destroyOnClose={true}
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
              src="data:image/jpeg;base64,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"
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
                    sDay[dayIndex].includes(item.name) && (
                      <div>
                        {" "}
                        <CheckOutlined
                          style={{
                            fontSize: "10px",
                            color: "black",
                            marginLeft: "5px",
                          }}
                        />
                      </div>
                    )}
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
// FOR AVOIDING REPLACING ITEMS
// if (isMealArr.length > 0) {
//   setIsMealArr((prev) => [prev, item]);
//   console.log('wronggg');
// } else {
//   setIsMealArr(item);
// }
