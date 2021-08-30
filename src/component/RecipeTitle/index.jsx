import { Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitleAction } from "../../redux/actions/categories/index";
import { Typography } from "antd";
import { RightOutlined, UnorderedListOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const RecipeTitle = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.mealPlan);

  const addTitle = (title) => {
    dispatch(addTitleAction(title));
  };
  return (
    <>
      <Form layout="vertical">
        <Form.Item>
          {/* <Title level={5} className=" my-2">
            Title{" "}
            <Text level={6} disabled>
              (required)
            </Text> 
          </Title>*/}
          <div className="d-flex align-center mb-3">
            <h4 className="default-title text-center" strong>
              Title{" "}
            </h4>
            <h4 className="default-subtitle text-center" strong>
              {" "}
              (required)
            </h4>
          </div>
          <Input
            maxLength={100}
            minLength={1}
            value={title}
            onChange={(e) => addTitle(e.target.value)}
            placeholder="Name of the meal plan"
            name={"title"}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default RecipeTitle;
