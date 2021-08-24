import Modal from "antd/lib/modal/Modal";
import React from "react";

const PrimaryModal = ({
  children,
  title,
  handleOk,
  handleCancel,
  isModalVisisble,
}) => {
  return (
    <>
      <Modal
        title={title}
        visible={isModalVisisble}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default PrimaryModal;
