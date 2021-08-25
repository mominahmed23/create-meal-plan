import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import { Input, Select, InputNumber } from 'antd';
import { addPlanAction } from '../../redux/actions/categories';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;

const SelectPlan = ({ importWeekForm, weekChangeVisible }) => {
  const dispatch = useDispatch();
  const { numOfWeeks } = useSelector((state) => state.mealPlan);
  const [weekCount, setWeekCount] = useState(null);

  const addPlan = () => {
    dispatch(addPlanAction(weekCount));
    weekChangeVisible();
  };
  return (
    <Row>
      <Form name="" initialValues={{ remember: true }} layout="vertical">
        {/* <Col span={24}> */}
        <Form.Item
          label={importWeekForm ? 'Plan length:' : ''}
          name="plan-length"
        >
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
        </Form.Item>
        {/* </Col> */}

        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" onClick={addPlan}>
            Select
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default SelectPlan;
