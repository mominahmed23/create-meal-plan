import React, { useState } from 'react';
import { Button } from 'antd';
import SelectPlan from './SelectPlan';
import { useSelector } from 'react-redux';
import WeekDays from './WeekDays';

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [weekNumber, setWeekNumber] = useState('');
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
              }}
            >
              {item}
            </h4>
          ))}
          {weekChangeVisible && <SelectPlan />}
        </>
      )}
      {console.log(weekNumber.props?.children[0])}
      {weekDaysVisible && <WeekDays plan={weekNumber.props?.children[0]} />}
    </div>
  );
};

export default Plan;
