import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./MealCard";
import {
  PlusOutlined,
  DashOutlined,
  DeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider, Dropdown, Menu, Typography } from "antd";
import { addWeekAction } from "../../redux/actions/weeks";
import WeekImport from "../WeekImport";
import "../../App.css";
import WeekDelete from "../WeekDelete";
import mealIcon from "../../icons/mealIcon.png";
import img1 from "../../assets/img1.png";
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

const WeekDays = ({ weekIndex, setWeekDaysVisibleFalse }) => {
  const [dayIndex, setDayIndex] = useState("");
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);
  const [deleteWeek, setDeleteWeek] = useState(false);
  const [itemState, setItemState] = useState("");
  const [mealItemState, setMealItemState] = useState("");
  const [isWeekImportModalVisible, setIsWeekImportModalVisible] =
    useState(false);

  const { weeks } = useSelector((state) => state);

  const dispatch = useDispatch();

  const singleDay = weeks[`week${weekIndex}`];

  const showModal = () => {
    setIsMealModalVisible(true);
  };
  const handleOk = () => {
    setIsMealModalVisible(false);
  };

  const handleCancel = () => {
    setIsMealModalVisible(false);
  };
  const deleteItem = () => {
    //console'remove item', mealItem);
    const allData = singleDay[itemState];

    const filtered = allData.filter((itemState) => itemState != mealItemState);

    const weekplan = { [itemState]: filtered };

    dispatch(addWeekAction(weekplan, weekIndex));
  };
  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        onClick={() => setIsWeekImportModalVisible(true)}
      >
        Import week
      </Menu.Item>
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        onClick={() => setDeleteWeek(true)}
      >
        Remove week
      </Menu.Item>
    </Menu>
  );

  const deleteMealMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />} onClick={deleteItem}>
        Delete Maal
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="d-flex align-center">
        <div className="default-component-heading">{`Week ${weekIndex}`}</div>
        <div style={{ margin: "2px 10px", color: "black" }}>
          <DashOutlined />
        </div>
      </div>
      <div className="mt-10">
        {weekItems.map((item, i) => (
          <>
            <div className="d-flex align-center justify-space-between">
              <div>
                <h2 className="day-name">{item}</h2>
              </div>
              <div>
                <Dropdown overlay={menu} trigger={"click"}>
                  <DashOutlined
                    className="mx-4"
                    overlay={menu}
                    style={{ color: "#black" }}
                  />
                </Dropdown>
                <PlusOutlined
                  style={{ color: "#1849CC" }}
                  onClick={() => {
                    setIsMealModalVisible(true);
                    showModal();
                    setDayIndex(item);
                  }}
                />
              </div>
            </div>
            <Divider style={{ marginTop: "0" }} />
            <div className="mb-5">
              {singleDay !== undefined
                ? singleDay.hasOwnProperty(item) &&
                  singleDay[item].map((mealItem) => (
                    <div className="d-flex align-center">
                      <div>
                        <img src={mealIcon}></img>
                      </div>
                      <div
                        className="d-flex align-center ml-3"
                        style={{
                          backgroundColor: "#F8F8F8",
                          minHeight: "44px",
                          minWidth: "190px",
                        }}
                      >
                        <div className="ml-2">
                          {" "}
                          <img src={img1} width={28} height={28}></img>
                        </div>
                        <div className="ml-2">
                          <div className="meal-item">
                            {"IP Mac and 7 Cheese"}
                          </div>
                          <div className="meal-sub-item">{"Breakfast"}</div>
                        </div>
                        <div>
                          <Dropdown overlay={deleteMealMenu} trigger={"click"}>
                            <DashOutlined
                              style={{ color: "#black" }}
                              className="mx-4"
                              overlay={deleteMealMenu}
                              onClick={() => {
                                setMealItemState(mealItem);
                                setItemState(item);
                              }}
                            />
                          </Dropdown>
                        </div>
                      </div>
                    </div>

                    // <div className="d-flex align-center">
                    //   <img src={mealIcon}></img>
                    //   {/* <div>{":::"}</div> */}
                    //   <div
                    //     className="d-flex justify-space-around ml-3"
                    //     style={{ backgroundColor: "#F8F8F8" }}
                    //   >
                    //     <div>
                    //       <div className="meal-item">{"IP Mac and 7 Cheese"}</div>
                    //       <div className="meal-sub-item">{"Breakfast"}</div>
                    //     </div>
                    //     <div className="d-flex align-center">
                    //       <DashOutlined
                    //         className="mx-4"
                    //         onClick={() => deleteItem(item, mealItem)}
                    //       />
                    //     </div>
                    //   </div>
                    // </div>
                  ))
                : null}
            </div>

            <WeekImport
              isWeekImportModalVisible={isWeekImportModalVisible}
              setIsWeekImportModalVisible={() =>
                setIsWeekImportModalVisible(false)
              }
              handleWeekImportOk={() => setIsWeekImportModalVisible(false)}
              weekIndex={weekIndex}
              dayIndex={dayIndex}
            />
            <WeekDelete
              isDeleteModalVisible={deleteWeek}
              setIsDeleteModalVisible={() => setDeleteWeek(false)}
              handleDeleteOk={() => setDeleteWeek(false)}
              weekIndex={weekIndex}
              setWeekDaysVisibleFalse={setWeekDaysVisibleFalse}
            />
          </>
        ))}
      </div>
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
