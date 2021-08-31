import React, { useState, useEffect } from "react";
import WeekDays from "./WeekDays";
import { Typography } from "antd";
import { Button, Divider, message } from "antd";
import {
  DeleteOutlined,
  BorderOuterOutlined,
  RightOutlined,
} from "@ant-design/icons";
import SelectPlan from "./SelectPlan";
import { useDispatch, useSelector } from "react-redux";
import { addPlanAction } from "../../redux/actions/categories";
import { addWeekAction, deleteWeekAction } from "../../redux/actions/weeks";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import Modal from "antd/lib/modal/Modal";

const { Title, Text } = Typography;

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [row, setRow] = useState([]);

  const [items, setItems] = useState();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };
  const [weekNumber, setWeekNumber] = useState("");
  const [arrayIndex, setArrayIndex] = useState("");
  const [deleteWeek, setDeleteWeek] = useState(null);

  const { numOfWeeks } = useSelector((state) => state.mealPlan);
  useEffect(() => {
    //console"number of weeks", numOfWeeks);
    setItems(numOfWeeks);
  }, [numOfWeeks]);
  const { weeks } = useSelector((state) => state);
  const dispatch = useDispatch();

  let rows = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    rows.push(i);
  }

  // const onDelete = () => {
  //   //console"iiii", deleteWeek.slice(-1));

  //   const filtered = numOfWeeks.filter((data) => data != deleteWeek.slice(-1));

  //   dispatch(addPlanAction(filtered));
  //   dispatch(deleteWeekAction(deleteWeek));
  //   message.success("Week Deleted Successfully");
  //   setDeleteWeek(null);
  // };

  const SortableItem = sortableElement(
    ({
      key,
      index,
      value,
      setWeekDaysVisible,
      setDefaultView,
      setWeekNumber,
      setArrayIndex,
    }) => (
      <>
        <div
          className="d-flex align-center app-hover-cursor"
          onClick={() => {
            setWeekDaysVisible(true);
            setDefaultView(true);
            setWeekNumber(value.slice(-1));
            setArrayIndex(index);
          }}
        >
          <div className="d-flex ">
            <span className="week-name">{value}</span>
          </div>
          <div>
            <RightOutlined/>
          </div>
        </div>
        <Divider />
      </>
    )
  );
  const DragHandle = sortableHandle(() => <span> </span>);
  return (
    <div className="px-3">
      {!defaultView && (
        <>
          <span className="default-component-heading">Plan</span>
          <div className="d-flex justify-space-between align-center mr-9 mt-5">
            <div>
              {" "}
              <span className="week-sub-comp">Weeks </span>
            </div>
            <span className="week-sub-comp-num">1 </span>
          </div>
          <div className="d-flex justify-space-between align-center">
            <div className="week-subtitle">
              <span>How many weeks in plan?</span> <Text disabled></Text>
            </div>
            <div>
              {" "}
              <Button
                type="link"
                onClick={() => setWeekChangeVisible(!weekChangeVisible)}
              >
                Change
              </Button>
            </div>
          </div>
          <Divider style={{ marginTop: "5px" }} />
          <div className="week-sub-comp">
            <span>Manage</span>
          </div>
          <Divider style={{ marginTop: "15px" }} />
          {!weekChangeVisible && (
            <div className="d-flex">
              <SortableContainer onSortEnd={onSortEnd} distance={1}>
                {items?.map((item, index) => (
                  <>
                    <SortableItem
                      key={item}
                      index={index}
                      value={`Week ${item}`}
                      setWeekDaysVisible={setWeekDaysVisible}
                      setDefaultView={setDefaultView}
                      setWeekNumber={setWeekNumber}
                      setArrayIndex={setArrayIndex}
                    ></SortableItem>
                  </>
                ))}
              </SortableContainer>
            </div>
          )}

          {weekChangeVisible && (
            <SelectPlan
              weekChangeVisible={() => setWeekChangeVisible(!weekChangeVisible)}
            />
          )}
        </>
      )}
      {weekDaysVisible && (
        <WeekDays
          weekIndex={weekNumber}
          setWeekDaysVisibleFalse={() => setWeekDaysVisible(false)}
        />
      )}
      {/* {deleteWeek && (
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
      )} */}
    </div>
  );
};

export default Plan;
