import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDescriptionAction } from "../../redux/actions/categories";
import { useState } from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;
const Description = () => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state.mealPlan);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const error = "Max limit reached";
  const addDescription = (desc) => {
    if (desc.length > 5000) {
      setMaxLengthError(true);
    } else {
      dispatch(addDescriptionAction(desc));
      setMaxLengthError(false);
    }
  };
  console.log(description);
  return (
    <>
      <Form layout="vertical">
        <Form.Item>
          <Title level={3} className="mx-2 mb-4">
            Description
          </Title>
          <TextArea
            showCount
            value={description}
            maxLength={5000}
            minLength={3}
            rows={4}
            placeholder="Describe your recipe"
            onChange={(e) => addDescription(e.target.value)}
          />

          {maxLengthError && (
            <div>
              <Text type="danger">{error}</Text>
            </div>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default Description;
