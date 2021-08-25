import React, { useState } from "react";
import { Button, Divider } from "antd";
import SelectPlan from "./SelectPlan";
import { useSelector } from "react-redux";
import WeekDays from "./WeekDays";
import { Typography } from "antd";
const { Title, Text } = Typography;

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [weekNumber, setWeekNumber] = useState("");
  const [arrayIndex, setArrayIndex] = useState("");

  const { numOfWeeks } = useSelector((state) => state.mealPlan);

  let rows = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    rows.push(i);
  }
  console.log("Row Week Data", rows);
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
                    console.log(item, i);
                  }}
                >
                  {`week ${item}`}
                </h4>
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
