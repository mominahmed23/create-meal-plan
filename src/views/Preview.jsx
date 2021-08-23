import React from "react";

const Preview = () => {
  return (
    <div
      className="preview"
      style={{
        flexGrow: 1,
        backgroundColor: "grey",
        height: "100vh",
        marginLeft: 275,
        padding: "10px 20px",
      }}
    >
      <h1 style={{ color: "red" }}>Preview</h1>
    </div>
  );
};

export default Preview;
