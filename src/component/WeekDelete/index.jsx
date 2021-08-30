import { Alert, Button, message, Select, Space } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import Item from "antd/lib/list/Item";
import { useDispatch, useSelector } from "react-redux";
import Form from "antd/lib/form/Form";
import { deleteWeekAction } from "../../redux/actions/weeks";
import { addPlanAction } from "../../redux/actions/categories";
import { Typography } from "antd";
const { Title, Text } = Typography;

const WeekDelete = ({
  isDeleteModalVisible,
  setIsDeleteModalVisible,
  handleDeleteOk,
  weekIndex,
  setWeekDaysVisibleFalse,
}) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const { numOfWeeks } = useSelector((state) => state.mealPlan);

  const onDelete = () => {
    const filtered = numOfWeeks.filter((data) => data != weekIndex);
    //   console.log(deleteWeek.slice(-1))
    dispatch(addPlanAction(filtered));
    dispatch(deleteWeekAction(weekIndex));
    message.success("Week Deleted Successfully");
    handleDeleteOk();
    setWeekDaysVisibleFalse();
  };
  return (
    <div>
      <Modal
        visible={isDeleteModalVisible}
        title={"Delete week"}
        onCancel={setIsDeleteModalVisible}
        onOk={handleDeleteOk}
        mask={false}
        footer={null}
      >
        {" "}
        <Text strong>
          This will delete all the content of the week {weekIndex}
        </Text>
        <div className="d-flex justify-end">
          <Button
            type="primary"
            onClick={() => {
              setIsDeleteModalVisible();
            }}
            className="mr-4"
          >
            Go Back
          </Button>
          <Button danger onClick={onDelete}>
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default WeekDelete;
