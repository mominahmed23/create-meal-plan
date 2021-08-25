import { Alert, Button, Input, message, Row, Select, Space } from "antd";
import Form from "antd/lib/form/Form";
import Item from "antd/lib/list/Item";
import { Option } from "antd/lib/mentions";
import Modal from "antd/lib/modal/Modal";
import React from "react";
// import { addPlanAction } from '../../redux/actions/categories';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeekAction } from "../../redux/actions/weeks";

const WeekImport = ({
  isWeekImportModalVisible,
  setIsWeekImportModalVisible,
  handleWeekImportOk,
  weekIndex,
  dayIndex,
}) => {
  const [weekCount, setWeekCount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const { weeks } = useSelector((state) => state);
  const { numOfWeeks } = useSelector((state) => state.mealPlan);
  //   console.log('weekIndex', `week${weekIndex}`);
  //   console.log('===33333333333333333', weeks.hasOwnProperty(`week${weekIndex}`));
  const dispatch = useDispatch();
  //   console.log(weekCount);
  const addPlan = () => {
    // if (weeks.hasOwnProperty(`week${weekCount}`)) {
    setErrorMessage(true);

    // THIS IS FOR LOOPING OVER DAYS AND FOODS
    // console.log(Object.entries(copyWeek));

    // copyWeek.map((item, i) => console.log('thissssss', item));
    // }
    // dispatch(addPlanAction(weekCount));
    // weekChangeVisible();
  };

  const importFinalize = () => {
    let copyWeek = weeks[`week${weekCount}`];
    console.log("copyWeek", copyWeek);

    // DELETING THE CONTENTS OF CURRENT WEEK
    // COPYING THE CONTENTS OF SELECTED WEEKK INTO CURRENT WEEK
    weeks[`week${weekIndex}`] = weeks[`week${weekCount}`];
    dispatch(addWeekAction(weeks[`week${weekCount}`], weekIndex));
    message.success("Weak imported Successfully");
    setErrorMessage(false);
    // console.log('TESTTT', weeks[`week${weekIndex}`]);
  };
  // Copy content by reference
  // console.log((weeks[`week${weekIndex}`] = ''));

  //Empty contents of that week
  // console.log((weeks[`week${weekIndex}`] = ''));
  return (
    <div>
      <Modal
        visible={isWeekImportModalVisible}
        title={"Import week"}
        onCancel={setIsWeekImportModalVisible}
        onOk={handleWeekImportOk}
        mask={false}
      >
        {/* <Row> */}
        <Form name="" initialValues={{ remember: true }} layout="vertical">
          {/* <Col span={24}> */}
          <Item name="plan-length">
            {/* <Input compact> */}
            <Select
              defaultValue={"1 week"}
              onChange={(e) => setWeekCount(e)}
              style={{ width: 200 }}
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
            {/* </Input> */}
          </Item>
          {/* </Col> */}

          <Item className="text-center">
            <Button type="primary" htmlType="submit" onClick={() => addPlan()}>
              Import
            </Button>
          </Item>
          {errorMessage && (
            <Alert
              message="Warning"
              description="This will delete data in current week"
              type="warning"
              showIcon
              closable
              wis
              action={
                <Space>
                  <Button
                    size="small"
                    type="ghost"
                    onClick={() => importFinalize()}
                  >
                    Continue
                  </Button>
                </Space>
              }
            />
          )}
        </Form>
        {/* </Row> */}
      </Modal>
    </div>
  );
};

export default WeekImport;
