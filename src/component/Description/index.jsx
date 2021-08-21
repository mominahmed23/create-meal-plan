import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Description = () => {
  return (
    <>
      <div className="mb-5">
        <ArrowLeftOutlined />
      </div>
      <h2>Description</h2>
      <TextArea
        showCount
        maxLength={100}
        minLength={3}
        placeholder="Describe your recipe"
        style={{ margin: "3px" }}
      />
    </>
  );
};

export default Description;
