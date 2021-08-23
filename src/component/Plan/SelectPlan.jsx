import React from 'react';
import { Form, Button } from 'antd';
import { Input, Select, InputNumber } from 'antd';
import { addPlanAction } from '../../redux/actions/categories';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;

const SelectPlan = ({ getWeeks }) => {
  const dispatch = useDispatch();
  const { plan } = useSelector((state) => state.mealPlan);

  const addPlan = (plan) => {
    dispatch(addPlanAction(plan));
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      className="select-plan-form pt-16 "
    >
      <Form.Item label="plan-length" name="plan-length">
        <Input.Group compact>
          <Select
            defaultValue={'1 week' || `${plan} week`}
            onChange={(e) => addPlan(e)}
          >
            <Option value="1">1 week</Option>
            <Option value="2">2 week</Option>
            <Option value="3">3 week</Option>
            <Option value="4">4 week</Option>
            <Option value="5">5 week</Option>
            <Option value="6">6 week</Option>
            <Option value="7">7 week</Option>
            <Option value="8">8 week</Option>
            <Option value="9">9 week</Option>
            <Option value="10">10 week</Option>
            <Option value="11">11 week</Option>
            <Option value="12">12 week</Option>
          </Select>
        </Input.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={() => getWeeks(plan)}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SelectPlan;
