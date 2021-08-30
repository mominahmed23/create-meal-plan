import React, { useState, useEffect } from "react";
import { Button, Divider, message } from "antd";
import { DeleteOutlined, BorderOuterOutlined } from "@ant-design/icons";
import SelectPlan from "./SelectPlan";
import { useDispatch, useSelector } from "react-redux";
import WeekDays from "./WeekDays";
import { Typography } from "antd";
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

  const onDelete = () => {
    //console"iiii", deleteWeek.slice(-1));

    const filtered = numOfWeeks.filter((data) => data != deleteWeek.slice(-1));

    dispatch(addPlanAction(filtered));
    dispatch(deleteWeekAction(deleteWeek));
    message.success("Week Deleted Successfully");
    setDeleteWeek(null);
  };

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
      <div className="d-flex align-center my-0 app-hover-cursor">
        <DragHandle />
        <h3
          className="mx-4 mb-0"
          onClick={() => {
            setWeekDaysVisible(true);
            setDefaultView(true);
            setWeekNumber(value.slice(-1));
            setArrayIndex(index);
            //console"item nedde", key);
            //console"index nedde", index);
          }}
        >
          {value}
        </h3>
        <DeleteOutlined className="ml-5" onClick={() => setDeleteWeek(value)} />
      </div>
    )
  );
  const DragHandle = sortableHandle(() => <BorderOuterOutlined />);
  return (
    <div>
      {!defaultView && (
        <>
          <span className="page-heading">Plan</span>
          <div className="d-flex justify-space-between">
            <div>
              {" "}
              <Title level={4}>Weeks</Title>
            </div>
            <div>
              <Text strong>1</Text>
            </div>
          </div>
          <div className="d-flex justify-space-between">
            <div>
              {" "}
              <Text disabled>How many weeks in plan?</Text>
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

          <Title level={4}>Manage</Title>
          <Divider style={{ marginTop: "0" }} />
          {!weekChangeVisible && (
            <div className="d-flex">
              <SortableContainer
                onSortEnd={onSortEnd}
                distance={1}
                useDragHandle
              >
                {items?.map((item, index) => (
                  <>
                    <SortableItem
                      key={item}
                      index={index}
                      value={`week${item}`}
                      setWeekDaysVisible={setWeekDaysVisible}
                      setDefaultView={setDefaultView}
                      setWeekNumber={setWeekNumber}
                      setArrayIndex={setArrayIndex}
                    ></SortableItem>
                  </>
                ))}
              </SortableContainer>
            </div>

            // numOfWeeks.map((item, i) => (
            // <>
            //   <div className="d-flex">
            //     <div>
            //       <h4
            //         className="app-hover-cursor"
            //         key={item}
            //         onClick={() => {
            //           setWeekDaysVisible(true);
            //           setDefaultView(true);
            //           setWeekNumber(item);
            //           setArrayIndex(i);
            //           //console'item nedde', item, i);
            //         }}
            //       >
            //         {`Week ${item}`}
            //       </h4>
            //     </div>
            //     <div>
            //       <DeleteOutlined
            //         className="ml-5"
            //         onClick={() => onDelete(item)}
            //       />
            //     </div>
            //   </div>
            //   <Divider style={{ marginTop: '0' }} />
            // </>

            // <div className="d-flex">
            //   <SortableContainer onSortEnd={onSortEnd} distance={1}>
            //     {items?.map((item, index) => (
            //       <>
            //         {/* {//consoleitem, index)} */}
            //         <SortableItem
            //           key={item}
            //           index={index}
            //           value={`week ${item}`}
            //           setWeekDaysVisible={setWeekDaysVisible}
            //           setDefaultView={setDefaultView}
            //           setWeekNumber={setWeekNumber}
            //           setArrayIndex={setArrayIndex}
            //         >

            //         </SortableItem>
            //       </>
            //     ))}
            //   </SortableContainer>
            // </div>
          )}

          <div></div>
          <Divider style={{ marginTop: "0" }} />
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
