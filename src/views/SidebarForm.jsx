import { Button } from "antd";
import React, { useState } from "react";
import Description from "../component/Description";
import Ingredients from "../component/Ingredients";
import Title from "./../component/Title/index";

const SidebarForm = () => {
  const [view, setView] = useState(null);

  const viewHelper = [];
  if (view === null) {
    viewHelper.push(
      <>
        <Title />

        <p onClick={() => setView("description")}>Description</p>
        <p onClick={() => setView("ingredients")}>Ingredients</p>
      </>
    );
  }
  if (view === "description") {
    viewHelper.push(
      <>
        <Button onClick={() => setView(null)}>back</Button>
        <Description />
      </>
    );
  }
  if (view === "ingredients") {
    viewHelper.push(
      <>
        <Button onClick={() => setView(null)}>back</Button>
        <Ingredients />
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
