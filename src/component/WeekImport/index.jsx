import { Alert, Button, Input, message, Row, Select, Space } from 'antd';
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
  const [errorMessage, setErrorMessage] = useState(false);
  const { weeks } = useSelector((state) => state);
  const { numOfWeeks } = useSelector((state) => state.mealPlan);

  const dispatch = useDispatch();

  const addPlan = () => {
    setErrorMessage(true);
  };

  const importFinalize = () => {
    // IF THE WEEK TO IMPORT MATCHES KEYS IN REDUX
    if (Object.keys(weeks).includes(`week${weekCount}`)) {
      // DELETING THE CONTENTS OF CURRENT WEEK
      // COPYING THE CONTENTS OF SELECTED WEEKK INTO CURRENT WEEK
      weeks[`week${weekIndex}`] = weeks[`week${weekCount}`];
      dispatch(addWeekAction(weeks[`week${weekCount}`], weekIndex));
    } else {
      message.error('No data found in selected week');
    }
    setErrorMessage(false);
  };

  return (
    <div>
      <Modal
        visible={isWeekImportModalVisible}
        title={'Import week'}
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
              defaultValue={'week 1'}
              onChange={(e) => setWeekCount(e)}
              style={{ width: 200 }}
            >
              {numOfWeeks.map((item) => {
                return (
                  <Select.Option value={item}>{`week ${item}`}</Select.Option>
                );
              })}
            </Select>
          </Item>
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
      </Modal>
    </div>
  );
};

export default WeekImport;
