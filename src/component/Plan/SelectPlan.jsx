import React from "react";
import { Form, Button, Row, Col } from "antd";
import { Input, Select, InputNumber } from "antd";
import { addPlanAction } from "../../redux/actions/categories";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;

const SelectPlan = ({ importWeekForm, weekChangeVisible }) => {
  const dispatch = useDispatch();
  const [weekCount, setWeekCount] = useState(null);
  const [weekCountErrorMsg, setWeekCountErrorMsg] = useState("");

  const addPlan = () => {
    if (weekCount) {
      let rows = [];
      for (let i = 1; i <= weekCount; i++) {
        rows.push(i);
      }
      console.log("rrrrr", rows);
      dispatch(addPlanAction(rows));
      weekChangeVisible();
    } else {
      setWeekCountErrorMsg("Select something First");
    }
  };
  return (
    <Row>
      <Form name="" initialValues={{ remember: true }} layout="vertical">
        <Form.Item
          label={importWeekForm ? "Plan length:" : ""}
          name="plan-length"
        >
          <Select
            defaultValue={"Select number of week (s)"}
            onChange={(e) => {
              setWeekCount(e);
              setWeekCountErrorMsg("");
            }}
            //style={{ width: "120%" }}
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
        </Form.Item>

        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" onClick={addPlan}>
            Select
          </Button>
        </Form.Item>
        {weekCountErrorMsg && (
          <div style={{ color: "red" }}>{weekCountErrorMsg}</div>
        )}
      </Form>
    </Row>
  );
};

export default SelectPlan;
