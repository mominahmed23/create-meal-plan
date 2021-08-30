import Modal from "antd/lib/modal/Modal";
import React from "react";

const WeekDelete = ({
  isDeleteModalVisible,
  setIsDeleteModalVisible,
  handleDeleteOk,
  weekIndex,
}) => {
  return (
    <div>
      <Modal
        visible={isDeleteModalVisible}
        title={"Delete week"}
        onCancel={setIsDeleteModalVisible}
        onOk={handleDeleteOk}
        mask={false}
      >
        <h3>{"hh"}</h3>
        {/* <Row> */}
        {/* <Form name="" initialValues={{ remember: true }} layout="vertical">
          {/* <Col span={24}> */}
        {/* <Item name="plan-length"> */}
        {/* <Input compact> 
            <Select
              defaultValue={"week 1"}
              onChange={(e) => setWeekCount(e)}
              style={{ width: 200 }}
            >
              {numOfWeeks.map((item) => {
                return (
                  <Select.Option value={item}>{`week ${item}`}</Select.Option>
                );
              })}
            </Select>
          </Item>
          <Item className="text-center">
            <Button type="primary" htmlType="submit" onClick={() => addPlan()}>
              Delete
            </Button>
          </Item>
          {errorMessage && (
            <Alert
              message="Warning"
              description="This will delete current week"
              type="warning"
              showIcon
              closable
              wis
              action={
                <Space>
                  <Button
                    size="small"
                    type="ghost"
                    onClick={() => deleteFinalize()}
                  >
                    Continue
                  </Button>
                </Space>
              }
            />
          )}
        </Form> */}
      </Modal>
    </div>
  );
};

export default WeekDelete;
