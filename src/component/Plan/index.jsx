import React, { useState } from "react";
import { Button } from "antd";
import SelectPlan from "./SelectPlan";
import { useSelector } from "react-redux";
import WeekDays from "./WeekDays";

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [weekNumber, setWeekNumber] = useState("");
  const [arrayIndex, setArrayIndex] = useState("");

  {
    arrayIndex && console.log("array index", arrayIndex);
  }
  const { plan } = useSelector((state) => state.mealPlan);

  let rows = [];
  for (let i = 1; i <= plan; i++) {
    rows.push(
      <div>
        {`week ${i}`}
        <hr />
      </div>
    );
  }
  return (
    <div>
      {!defaultView && (
        <>
          <h2>Plan</h2>
          <p>How many weeks in plan?</p>
          <Button
            type="primary"
            onClick={() => setWeekChangeVisible(!weekChangeVisible)}
          >
            Change
          </Button>
          <h3 className="pt-6">Manage</h3>
          <hr />
          {rows.map((item, i) => (
            <h4
              key={i}
              onClick={() => {
                setWeekDaysVisible(true);
                setDefaultView(true);
                setWeekNumber(item);
                setArrayIndex(i);
                console.log(item, i);
              }}
            >
              {item}
            </h4>
          ))}
          {weekChangeVisible && <SelectPlan />}
        </>
      )}
      {weekDaysVisible && <WeekDays plan={arrayIndex + 1} />}
    </div>
  );
};

export default Plan;
