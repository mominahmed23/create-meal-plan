import { Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitleAction } from "./../../redux/actions/categories/index";

const Title = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.mealPlan);

  const addTitle = (title) => {
    dispatch(addTitleAction(title));
  };
  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Title">
          <Input
            value={title}
            onChange={(e) => addTitle(e.target.value)}
            placeholder="Name of the meal plan"
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default Title;
