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
    <>
      <Form layout="vertical">
        <Form.Item>
          <span className="page-heading">Description</span>

          <TextArea
            showCount
            value={isReadMore ? text.slice(0, 120) : text}
            maxLength={5000}
            minLength={3}
            rows={4}
            placeholder="Describe your recipe"
            onChange={(e) => addDescription(e.target.value)}
          />
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore && text.length > 1200 ? "...read more" : ""}
          </span>

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
