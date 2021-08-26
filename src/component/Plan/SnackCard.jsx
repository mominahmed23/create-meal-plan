import { Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Space } from "antd";
const snackData = [
  {
    key: "3",
    name: "Apple",
  },
  {
    key: "4",
    name: "Mango",
  },
];

const SnackCard = ({
  isSnackModalVisible,
  setIsSnackModalVisible,
  handleCancelSnack,
}) => {
  const [dataSource, setDataSource] = useState(snackData);
  const [value, setValue] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const data = {};
    //consolevalues);
  };
  const onOkSnackModal = () => {
    setIsSnackModalVisible(false);
  };

  return (
    <div>
      <Modal
        visible={isSnackModalVisible}
        onOk={onOkSnackModal}
        onCancel={handleCancelSnack}
      >
        <h3>Choose Snack Ingredients</h3>
        <Input
          placeholder="Search ingredients"
          value={value}
          onChange={(e) => {
            const currValue = e.target.value.toLowerCase();
            setValue(currValue);
            const filteredData = snackData.filter((entry) =>
              entry.name.toLowerCase().includes(currValue)
            );
            setDataSource(filteredData);
          }}
        />
        {/* <MealInfoContainer
          image={''}
          name={'Add a Meal'}
        /> */}
        {isSnackModalVisible &&
          dataSource.map((item, i) => (
            <>
              <div
                key={i}
                className="mealInfoContainer"
                // style={{ background: '#ecececec' }}
                onClick={() => {
                  //consoleitem);
                  // finalMealPlanofDay();
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="mt-4"
                >
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                    width="60"
                    height="60"
                    alt=""
                    onClick={() => setIsFormVisible(true)}
                  />
                  <h3 className="ml-5">{item.name}</h3>
                </div>
              </div>
              {isFormVisible && (
                <Form onFinish={onFinish}>
                  <Space
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item name={"item_amount"} fieldKey={"item_amount"}>
                      <Input placeholder="Amount" />
                    </Form.Item>
                    <Form.Item name={"fraction"} fieldKey={"fraction"}>
                      <Input placeholder="Fraction" />
                    </Form.Item>
                    <Form.Item name={"unit"} fieldKey={"unit"}>
                      <Input placeholder="Unit" />
                    </Form.Item>
                  </Space>
                </Form>
              )}
            </>
          ))}
      </Modal>
    </div>
  );
};

export default SnackCard;
