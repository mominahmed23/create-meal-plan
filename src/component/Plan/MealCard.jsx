import { Card, Input, message, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMealPlanAction } from "../../redux/actions/categories";
import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
import SnackPopup from "./SnackPopup";
import { addWeekAction } from "./../../redux/actions/weeks/index";
import "./MealInfo.css";
import { Button } from "antd";
import "../../App.css";
import addSnack from "../../assets/add_snack.png";
import addMeal from "../../assets/add_meal.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
// const mealItems = ['Biryani', 'Burger'];
const data = [
  { name: "A recipe title can span one line or two", img: img1 },
  { name: "Content title", img: img2 },
];

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

  //console"day index", dayIndex);
  // const [mealArray, setMealArray] = useState([]);
  const { weeks } = useSelector((state) => state);
  var mealArray = [];
  var abc = [];
  const dispatch = useDispatch();
  //console"sss", weeks);
  const sDay = weeks[`week${weekIndex}`];

  const onModalOk = () => {
    handleOk();
    mealArray = [...selectedMealName];
    const weekplan = { [dayIndex]: mealArray };
    //console"YOOOOOOOO ===========>>>>", weekplan);
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
    //consoleselectedMealName);
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
        closeIcon={false}
        width={"380px"}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={onModalOk}>
            Add
          </Button>,
        ]}
      >
        <Input
          placeholder="Search your recipes"
          prefix={<SearchOutlined style={{ fontSize: "20px" }} />}
          size={"medium"}
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
        {/* <Card style={{ width: '100%' }} className="mt-5 px-0"> */}
        <div
          className="d-flex align-center mt-4"
          onClick={() => {
            setIsSnackModalVisible(true);
            handleCancel();
            //console"clicked");
          }}
        >
          <div className="imageBackground">
            <img
              className="snack_add_meal"
              src={addSnack}
              width="40"
              height="40"
              alt=""
              onClick={() => {
                setIsSnackModalVisible(true);
                //console"clicked");
              }}
            />
          </div>
          <div className="mealDesc">
            <h3 className="ml-5">{"Add a snack"}</h3>
            <h4 className="mealDetail ml-5 ">
              {"Just ingredients - e.g., one cup blueberries"}
            </h4>
          </div>
        </div>
        <div className="d-flex align-center mt-4">
          <div className="imageBackground">
            <img
              className="snack_add_meal"
              src={addMeal}
              width="60"
              height="60"
              alt=""
              onClick={() => {
                //console"clicked");
              }}
            />
          </div>
          <div className="mealDesc">
            <h3 className="ml-5">{"Create new recipe"}</h3>
            <h4 className="mealDetail ml-5 ">A new recipe with video</h4>
          </div>
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
                    src={item.img}
                    width="70"
                    height="70"
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
        {/* </Card> */}
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
//   //console'wronggg');
// } else {
//   setIsMealArr(item);
// }
