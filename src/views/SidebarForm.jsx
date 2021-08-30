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
  CloseOutlined,
} from "@ant-design/icons";
import DiscriptionICon from "../icons/DiscriptionIcon.png";
import PlanIcon from "../icons/PlanIcon.png";
import NutritionIcon from "../icons/NutritionIcon.png";
import SettingsIcon from "../icons/SettingsIcon.png";
import Set from "../icons/Set.png";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;
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

  const logDataFromDraft = () => {
    console.log("===== All the Data from Draft");
    console.log(mealPlan);
    console.log("weekPlan", weeks);
    console.log("SnackPlan", snack);
    console.log("nutrition", nutrition);
  };

  const viewHelper = [];
  if (view === null) {
    viewHelper.push(
      <div style={{ position: "relative", height: "100%" }}>
        <div className="position-relative mb-9">
          <div className="position-absolute">
            <CloseOutlined size="large" />
          </div>

          <h4 className="default-title text-center" strong>
            Create Meal Plan
          </h4>
        </div>
        <RecipeTitle />
        <Cover />

        <div className="side-bar-item" onClick={() => setView("description")}>
          <div className="d-flex align-center">
            <div className="mr-4">
              <img src={DiscriptionICon}></img>
            </div>
            <h4 className="default-title text-center" strong>
              Description
            </h4>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div className="side-bar-item" onClick={() => setView("plan")}>
          <div className="d-flex align-center">
            <div className="mr-4">
              <img src={PlanIcon}></img>
            </div>
            <h4 className="default-title text-center" strong>
              Plan
            </h4>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div className="side-bar-item" onClick={() => setView("nutrition")}>
          <div className="d-flex align-center">
            <div className="mr-4">
              <img src={NutritionIcon}></img>
            </div>
            <h4 className="default-title text-center" strong>
              nutrition
            </h4>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div className="side-bar-item" onClick={() => setView("nutrition")}>
          <div className="d-flex align-center">
            <div className="mr-4">
              <img src={NutritionIcon}></img>
            </div>
            <div>
              <div>
                <h4 className="default-title text-center" strong>
                  Monitization
                </h4>
              </div>
              <div>
                <h4 className="default-subtitle text-center" strong>
                  Monitization
                </h4>
              </div>
            </div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div className="side-bar-item" onClick={() => setView("settings")}>
          <div className="d-flex align-center">
            <div className="mr-4">
              <img src={Set}></img>
            </div>
            <div>
              <div>
                <h4 className="default-title text-center" strong>
                  Settings
                </h4>
              </div>
              <div>
                <h4 className="default-subtitle text-center" strong>
                  Manage Comments, PRivacy, SEO
                </h4>
              </div>
            </div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>

        <div
          className="d-flex justify-space-between"
          style={{ position: "absolute", width: "100%", bottom: "0px" }}
        >
          <Button style={{ width: "155px" }} onClick={logDataFromDraft}>
            Save as Draft
          </Button>
          <Button
            type="primary"
            disabled={!mealPlan.title}
            onClick={logData}
            style={{ width: "155px" }}
          >
            Post
          </Button>
        </div>
      </div>
    );
  }
  if (view === "description") {
    viewHelper.push(
      <>
        <div className="mt-0 ml-0">
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
      className="custom-sidebar pt-4 px-4 pb-2"
      style={{
        width: 355,
        flexShrink: 0,
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "fixed",
        overflowY: "auto",
      }}
    >
      {viewHelper}
    </div>
  );
};

export default SidebarForm;
