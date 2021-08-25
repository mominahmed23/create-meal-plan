import { Button, Row, Select } from 'antd';
import Form from 'antd/lib/form/Form';
import Item from 'antd/lib/list/Item';
import { Option } from 'antd/lib/mentions';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
// import { addPlanAction } from '../../redux/actions/categories';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWeekAction } from '../../redux/actions/weeks';

const WeekImport = ({
  isWeekImportModalVisible,
  setIsWeekImportModalVisible,
  handleWeekImportOk,
  weekIndex,
  dayIndex,
}) => {
  const [weekCount, setWeekCount] = useState(null);
  const { weeks } = useSelector((state) => state);
  const { numOfWeeks } = useSelector((state) => state.mealPlan);

  //   console.log('weekIndex', `week${weekIndex}`);
  //   console.log('===33333333333333333', weeks.hasOwnProperty(`week${weekIndex}`));
  const dispatch = useDispatch();
  //   console.log(weekCount);
  const addPlan = () => {
    // if (weeks.hasOwnProperty(`week${weekCount}`)) {
    let copyWeek = weeks[`week${weekCount}`];
    console.log('copyWeek', copyWeek);
    // if (weeks.hasOwnProperty(`week${weekIndex}`)) {
    let emptyWeek = weeks[`week${weekIndex}`];
    // console.log('empty current Week', emptyWeek);
    // }
    // DELETING THE CONTENTS OF CURRENT WEEK
    // COPYING THE CONTENTS OF SELECTED WEEKK INTO CURRENT WEEK
    weeks[`week${weekIndex}`] = weeks[`week${weekCount}`];
    dispatch(addWeekAction(weeks[`week${weekCount}`], weekIndex));

    console.log('TESTTT', weeks[`week${weekIndex}`]);
    // THIS IS FOR LOOPING OVER DAYS AND FOODS
    // console.log(Object.entries(copyWeek));

    // copyWeek.map((item, i) => console.log('thissssss', item));
    // }
    // dispatch(addPlanAction(weekCount));
    // weekChangeVisible();
  };
  // Copy content by reference
  // console.log((weeks[`week${weekIndex}`] = ''));

  //Empty contents of that week
  // console.log((weeks[`week${weekIndex}`] = ''));
  return (
    <div>
      <Modal
        visible={isWeekImportModalVisible}
        title={'Import week'}
        onCancel={setIsWeekImportModalVisible}
        onOk={handleWeekImportOk}
        mask={false}
      >
        <Row>
          <Form name="" initialValues={{ remember: true }} layout="vertical">
            {/* <Col span={24}> */}
            <Item name="plan-length">
              {/* <Input.Group compact> */}
              <Select
                defaultValue={weekCount || `${numOfWeeks} week`}
                onChange={(e) => setWeekCount(e)}
                style={{ width: '315%' }}
              >
                <Option value={1}>1 week</Option>
                <Option value={2}>2 week</Option>
                <Option value={3}>3 week</Option>
                <Option value={4}>4 week</Option>
                <Option value={5}>5 week</Option>
                <Option value={6}>6 week</Option>
                <Option value={7}>7 week</Option>
                <Option value={8}>8 week</Option>
                <Option value={9}>9 week</Option>
                <Option value={10}>10 week</Option>
                <Option value={11}>11 week</Option>
                <Option value={12}>12 week</Option>
              </Select>
              {/* </Input.Group> */}
            </Item>
            {/* </Col> */}

            <Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => addPlan()}
              >
                Select
              </Button>
            </Item>
          </Form>
        </Row>
      </Modal>
    </div>
  );
};

export default WeekImport;
