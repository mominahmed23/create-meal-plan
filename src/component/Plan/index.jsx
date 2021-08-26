import React, { useState } from "react";
import { Button, Divider, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SelectPlan from "./SelectPlan";
import { useDispatch, useSelector } from "react-redux";
import WeekDays from "./WeekDays";
import { Typography } from "antd";
import { addPlanAction } from "../../redux/actions/categories";
import { addWeekAction, deleteWeekAction } from "../../redux/actions/weeks";
import Modal from "antd/lib/modal/Modal";
const { Title, Text } = Typography;

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [row, setRow] = useState([]);
  const [weekNumber, setWeekNumber] = useState("");
  const [arrayIndex, setArrayIndex] = useState("");
  const [deleteWeek, setDeleteWeek] = useState(null);

  const { numOfWeeks } = useSelector((state) => state.mealPlan);
  const { weeks } = useSelector((state) => state);
  weeks && console.log("week", weeks);
  const dispatch = useDispatch();
  let rows = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    rows.push(i);
  }

  const onDelete = () => {
    const filtered = numOfWeeks.filter((data) => data != deleteWeek);

    dispatch(addPlanAction(filtered));
    dispatch(deleteWeekAction(deleteWeek));
    message.success("Week Deleted Successfully");
    setDeleteWeek(null);
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
            numOfWeeks.map((item, i) => (
              <>
                <div className="d-flex">
                  <div>
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
                      {`Week ${item}`}
                    </h4>
                  </div>
                  <div>
                    <DeleteOutlined
                      className="ml-5"
                      onClick={() => setDeleteWeek(item)}
                    />
                  </div>
                </div>
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
      {deleteWeek && (
        <Modal
          title="Delete Week"
          visible={deleteWeek}
          footer={null}
          onCancel={() => setDeleteWeek(null)}
        >
          <Text strong>
            This will delete all the content of the week {deleteWeek}
          </Text>
          <div className="d-flex justify-end">
            <Button
              type="primary"
              onClick={() => setDeleteWeek(null)}
              className="mr-4"
            >
              Go Back
            </Button>
            <Button danger onClick={onDelete}>
              Ok
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Plan;
