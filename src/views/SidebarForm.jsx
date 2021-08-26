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
  SettingOutlined,
  CalendarOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";

const { Title } = Typography;
const SidebarForm = () => {
  const [view, setView] = useState(null);
  const { mealPlan, weeks, snack, nutrition } = useSelector((state) => state);

  const logData = () => {
    console.log("===== All the Data from Redux");
    console.log(mealPlan);
    console.log("weekPlan", weeks);
    console.log("SnackPlan", snack);
    console.log("nutrition", nutrition);
  };

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
            <CalendarOutlined />
            <Title level={5} className="mx-4 my-2">
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
            <PieChartOutlined />
            <Title level={5} className="mx-4 my-2">
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
            <SettingOutlined />
            <Title level={5} className="mx-4 my-2">
              Settings
            </Title>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>

        <div
          className="d-flex my-15 justify-space-between"
          style={{ position: "sticky" }}
        >
          <Button style={{ width: "120px" }} onClick={logData}>
            Post
          </Button>
          <Button type="primary" disabled={!mealPlan.title} onClick={logData}>
            Save as Draft
          </Button>
        </div>
      </div>
    );
  }
  if (view === "description") {
    viewHelper.push(
      <>
        <div className="mt-0">
          <Button
            icon={<LeftOutlined />}
            onClick={() => setView(null)}
            type="text"
            size="small"
          >
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
        <div className="mt-0">
          <Button
            icon={<LeftOutlined />}
            onClick={() => setView(null)}
            type="text"
            size="small"
          >
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
        <div className="mt-0">
          <Button
            icon={<LeftOutlined />}
            onClick={() => setView(null)}
            type="text"
            size="small"
          >
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
        <div className="mt-0">
          <Button
            icon={<LeftOutlined />}
            onClick={() => setView(null)}
            type="text"
            size="small"
          >
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
