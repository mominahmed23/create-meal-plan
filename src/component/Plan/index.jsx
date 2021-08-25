import React, { useState } from "react";
import { Button, Divider, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SelectPlan from "./SelectPlan";
import { useDispatch, useSelector } from "react-redux";
import WeekDays from "./WeekDays";
import { Typography } from "antd";
import { addPlanAction } from "../../redux/actions/categories";
import { addWeekAction } from "../../redux/actions/weeks";
const { Title, Text } = Typography;

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [row, setRow] = useState([]);
  const [weekNumber, setWeekNumber] = useState("");
  const [arrayIndex, setArrayIndex] = useState("");

  const { numOfWeeks } = useSelector((state) => state.mealPlan);
  const { weeks } = useSelector((state) => state);
  //weeks && console.log("week index", weeks);
  const dispatch = useDispatch();
  let rows = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    rows.push(i);
  }

  console.log("Row Week Data", rows);
  console.log("Row Week Data state", numOfWeeks);

  const onDelete = (item) => {
    console.log("item", item);
    var copyWeeks = { ...weeks };
    delete weeks[`week${item}`];
    console.log("dddd", weeks);
    dispatch(addWeekAction("", item));
    message.success("Week Deleted Successfully");
  };
  return (
    <div>
      {!defaultView && (
        <>
          <Title level={3} className=" my-2">
            Plan
          </Title>
          <div className="d-flex align-centerx mb-3">
            <Text strong>How many weeks in plan?</Text>

            <Button
              type="link"
              onClick={() => setWeekChangeVisible(!weekChangeVisible)}
            >
              Change
            </Button>
          </div>
          <Title level={4}>Manage</Title>
          <Divider style={{ marginTop: "0" }} />
          {!weekChangeVisible &&
            rows.map((item, i) => (
              <>
                <h4
                  className="app-hover-cursor"
                  key={item}
                  onClick={() => {
                    setWeekDaysVisible(true);
                    setDefaultView(true);
                    setWeekNumber(item);
                    setArrayIndex(i);
                    console.log("item nedde", item, i);
                  }}
                >
                  {`week ${item}`}
                </h4>
                <DeleteOutlined
                  className="ml-5"
                  onClick={() => onDelete(item)}
                />
                <Divider style={{ marginTop: "0" }} />
              </>
            ))}
          {weekChangeVisible && (
            <SelectPlan
              weekChangeVisible={() => setWeekChangeVisible(!weekChangeVisible)}
            />
          )}
        </>
      )}
      {weekDaysVisible && <WeekDays weekIndex={weekNumber} />}
    </div>
  );
};

export default Plan;
