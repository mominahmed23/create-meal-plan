import React from "react";
import { Steps, Upload } from "antd";
import { message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title, Text } = Typography;

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

const Cover = () => {
  return (
    <div>
      <Title level={5} className=" my-2">
        Media{" "}
        <Text level={6} disabled>
          (required)
        </Text>
      </Title>
      <div className="draggerContainer">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag images to this area to upload
          </p>
        </Dragger>
      </div>
    </div>
  );
};

export default Cover;
