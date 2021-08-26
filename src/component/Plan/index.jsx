import React, { useState, useEffect } from 'react';
import { Button, Divider, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import SelectPlan from './SelectPlan';
import { useDispatch, useSelector } from 'react-redux';
import WeekDays from './WeekDays';
import { Typography } from 'antd';
import { addPlanAction } from '../../redux/actions/categories';
import { addWeekAction, deleteWeekAction } from '../../redux/actions/weeks';
import Demoo from './Draggale';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const { Title, Text } = Typography;
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
    <h2
      onClick={() => {
        setWeekDaysVisible(true);
        setDefaultView(true);
        // setWeekNumber(item);
        setArrayIndex(index);
        console.log('item nedde', key);
        console.log('index nedde', index);
      }}
    >
      {value}
    </h2>
  )
);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const Plan = () => {
  const [weekChangeVisible, setWeekChangeVisible] = useState(false);
  const [weekDaysVisible, setWeekDaysVisible] = useState(false);
  const [defaultView, setDefaultView] = useState(false);
  const [row, setRow] = useState([]);
  const [weekNumber, setWeekNumber] = useState('');
  const [arrayIndex, setArrayIndex] = useState('');
  const [items, setItems] = useState();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  const { numOfWeeks } = useSelector((state) => state.mealPlan);
  useEffect(() => {
    setItems(numOfWeeks);
  }, [numOfWeeks]);
  const { weeks } = useSelector((state) => state);
  weeks && console.log('week', weeks);
  const dispatch = useDispatch();

  let rows = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    rows.push(i);
  }

  const onDelete = (item) => {
    console.log('item', item);

    var copyWeeks = { ...weeks };
    delete weeks[`week${item}`];
    console.log('dddd', weeks);
    // dispatch(addWeekAction("", item));
    message.success('Week Deleted Successfully');
    //const aa = weeks[item];

    // weeks && console.log("week index2", copyWeeks[item]);
    console.log('copy weks before delete', copyWeeks);
    delete copyWeeks[`week${item}`];

    console.log('copy weks after delete', copyWeeks);

    // const ff = numOfWeeks.filter((data) => data);
    const filtered = numOfWeeks.filter((data) => data != item);
    console.log('filtered adat', filtered);
    //  rows = filtered;
    //  console.log("filter row", rows.length);
    dispatch(addPlanAction(filtered));
    dispatch(deleteWeekAction(item));
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
          <Divider style={{ marginTop: '0' }} />
          {!weekChangeVisible && (
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
            //           console.log('item nedde', item, i);
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

            <div className="d-flex">
              <SortableContainer onSortEnd={onSortEnd} distance={1}>
                {items?.map((item, index) => (
                  <>
                    {/* {console.log(item, index)} */}
                    <SortableItem
                      key={item}
                      index={index}
                      value={`week ${item}`}
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
      {weekDaysVisible && <WeekDays weekIndex={weekNumber} />}
      {/* <SortableContainer onSortEnd={onSortEnd}>
        {numOfWeeks.map((item, index) => (
          <SortableItem
            key={`item-${item}`}
            index={index}
            value={`week ${item}`}
          />
        ))}
      </SortableContainer> */}
    </div>
  );
};

export default Plan;
