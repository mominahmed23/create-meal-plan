import TextArea from "antd/lib/input/TextArea";
import React from "react";

const Description = () => {
  return (
    <>
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
