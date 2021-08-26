import { Button, Menu } from "antd";
import React, { useState } from "react";
import Cover from "../component/Cover/Cover";
import Description from "../component/Description";
import RecipeTitle from "../component/RecipeTitle/index";
import Nutrition from "../component/Nutrition";
import Settings from "../component/Settings";
import Plan from "../component/Plan";
import { Typography } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";

const { Title } = Typography;
const SidebarForm = () => {
  const [view, setView] = useState(null);
  const { title } = useSelector((state) => state.mealPlan);

  const viewHelper = [];
  if (view === null) {
    viewHelper.push(
      <div style={{ position: "relative" }}>
        <RecipeTitle />
        <Cover />

        <div
          className="d-flex align-center justify-space-between app-hover-cursor mt-4"
          onClick={() => setView("description")}
        >
          <div className="d-flex align-center">
            <UnorderedListOutlined />
            <Title
              level={5}
              className="mx-4 my-2"
              onClick={() => setView("description")}
            >
              Description
            </Title>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div
          className="d-flex align-center justify-space-between app-hover-cursor"
          onClick={() => setView("plan")}
        >
          <div className="d-flex align-center">
            <UnorderedListOutlined />
            <Title
              level={5}
              className="mx-4 my-2"
              onClick={() => setView("plan")}
            >
              Plan
            </Title>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div
          className="d-flex align-center justify-space-between app-hover-cursor"
          onClick={() => setView("nutrition")}
        >
          <div className="d-flex align-center">
            <UnorderedListOutlined />
            <Title
              level={5}
              className="mx-4 my-2"
              onClick={() => setView("nutrition")}
            >
              Nutrition
            </Title>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div
          className="d-flex align-center justify-space-between app-hover-cursor"
          onClick={() => setView("settings")}
        >
          <div className="d-flex align-center">
            <UnorderedListOutlined />
            <Title
              level={5}
              className="mx-4 my-2"
              onClick={() => setView("settings")}
            >
              Settings
            </Title>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>

        <div
          className="d-flex mt-20 justify-space-between"
          //style={{ position: "absolute" }}
        >
          <Button style={{ width: "120px" }}>Post</Button>
          <Button type="primary">Save as Draft</Button>
        </div>
      </div>
    );
  }
  if (view === "description") {
    viewHelper.push(
      <>
        <div className="mt-0">
          <LeftOutlined />
          <Button onClick={() => setView(null)} type="text" size="large">
            Back
          </Button>
        </div>
        <Description />
      </>
    );
  }
  if (view === "plan") {
    viewHelper.push(
      <>
        <div>
          <LeftOutlined />
          <Button onClick={() => setView(null)} type="text" size="large">
            Back
          </Button>
        </div>
        <Plan />
      </>
    );
  }
  if (view === "settings") {
    viewHelper.push(
      <>
        <div>
          <LeftOutlined />
          <Button onClick={() => setView(null)} type="text" size="large">
            Back
          </Button>
        </div>
        <Settings />
      </>
    );
  }
  if (view === "nutrition") {
    viewHelper.push(
      <>
        <div>
          <LeftOutlined />
          <Button onClick={() => setView(null)} type="text" size="large">
            Back
          </Button>
        </div>
        <Nutrition />
      </>
    );
  }

  return (
    <div
      className="custom-sidebar pt-4 px-3 pb-2"
      style={{
        width: 300,
        flexShrink: 0,
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "fixed",
        overflowY: "scroll",
      }}
    >
      {viewHelper}
    </div>
  );
};

export default SidebarForm;
