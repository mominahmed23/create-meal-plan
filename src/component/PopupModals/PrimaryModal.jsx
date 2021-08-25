import Modal from 'antd/lib/modal/Modal';
import React from 'react';

const PrimaryModal = ({
  children,
  title,
  handleOk,
  handleCancel,
  isModalVisible,
}) => {
  return (
    <>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* {children} */}
        <h2>hello</h2>
      </Modal>
    </>
  );
};

export default PrimaryModal;
