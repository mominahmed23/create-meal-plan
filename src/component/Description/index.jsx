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
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  let text = description;
  const error = "Max limit reached";
  const addDescription = (desc) => {
    if (desc.length > 5000) {
      setMaxLengthError(true);
    } else {
      dispatch(addDescriptionAction(desc));
      setMaxLengthError(false);
    }
  };
  //consoledescription);
  return (
    <div className="px-3">
      <Form layout="vertical">
        <Form.Item>
          <span className="default-component-heading">Description</span>
          <div className="mt-5">
            <TextArea
              showCount
              maxLength={5000}
              autoSize={{ minRows: 4 }}
              placeholder="Describe your recipe"
              onChange={(e) => addDescription(e.target.value)}
            />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Description;
