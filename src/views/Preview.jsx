import React from "react";
import { Card } from "antd";

const Preview = () => {
  return (
    <div
      className="preview"
      style={{
        flexGrow: 1,
        height: "100vh",
        marginLeft: 330,
        padding: "70px 50px 20px 50px",
      }}
    >
      <h1 className="title-preview">Preview</h1>
      <div className="preview-card"></div>
    </div>
  );
};

export default Preview;
