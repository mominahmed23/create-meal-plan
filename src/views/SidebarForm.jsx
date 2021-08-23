import { Button } from "antd";
import React, { useState } from "react";
import Description from "../component/Description";
import Title from "./../component/Title/index";

const SidebarForm = () => {
  const [view, setView] = useState(null);

  const viewHelper = [];
  if (view === "description") {
    viewHelper.push(
      <>
        <Button onClick={() => setView(null)}>back</Button>
        <Description />
      </>
    );
  }
  if (view === null) {
    viewHelper.push(
      <>
        <Title />

        <p onClick={() => setView("description")}>Description</p>
      </>
    );
  }
  return (
    <div
      className="custom-sidebar pt-4 px-3 pb-2"
      style={{
        width: 275,
        flexShrink: 0,
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "fixed",
      }}
    >
      {viewHelper}
    </div>
  );
};

export default SidebarForm;
