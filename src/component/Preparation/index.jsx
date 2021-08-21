import { Steps, Upload } from "antd";
import React, { useState } from "react";
import { message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.css";

// import { Upload, message } from 'antd';
import { InboxOutlined } from "@ant-design/icons";
import StepsContainer from "./StepsContainer";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Preparation = () => {
  return (
    <>
      <h2>Preparation</h2>
      <h3>Media</h3>
      <div className="draggerContainer">
        <Dragger {...props} className="DraggerBtn">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-hint">Upload videos and images</p>
        </Dragger>
        <hr />
        <StepsContainer />
      </div>
    </>
  );
};

export default Preparation;
