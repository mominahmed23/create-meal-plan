import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const Description = () => {
  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Title">
          <TextArea
            showCount
            maxLength={100}
            minLength={3}
            placeholder="Describe your recipe"
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default Description;
