import React from "react";
import { Card } from "antd";

const Preview = () => {
  return (
    <div
      className="preview"
      style={{
        flexGrow: 1,
        backgroundColor: "grey",
        height: "100vh",
        marginLeft: 300,
        padding: "100px 50px 20px 50px",
      }}
    >
      <Card
        title="Preview"
        bordered={false}
        style={{ minHeight: "500px" }}
      ></Card>
    </div>
  );
};

export default Preview;
