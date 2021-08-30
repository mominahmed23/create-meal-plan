import { Input, Space, Form, Button, Row, Col, Select } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Option } from "antd/lib/mentions";
import { CheckOutlined } from "@ant-design/icons";
import { addSnackAction } from "../../redux/actions/snacks";
import { DeleteOutlined } from "@ant-design/icons";
const snackData = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
];

const SnackPopup = ({ isModalVisible, handleOk, handleCancel }) => {
  const [dataSource, setDataSource] = useState(snackData);
  const [value, setValue] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [snackItem, setsnack] = useState(null);
  const [selectedMealName, setSelectedMealName] = useState([]);
  const dispatch = useDispatch();
  const { snack } = useSelector((state) => state);
  const onFinish = (values) => {
    const mealArray = [...selectedMealName];
    const data = { [snackItem]: values };
    dispatch(addSnackAction(data));
  };

  const onModalOk = () => {
    handleOk();
  };
  const setSnackItem = (name) => {
    if (snackItem === name) {
      setsnack("");
    } else {
      setsnack(name);
    }
  };
  const onSnackDelete = () => {
    //console"delete function");
  };
  return (
    <Modal
      visible={isModalVisible}
      onOk={onModalOk}
      onCancel={handleCancel}
      title={"Choose a snackItem Ingredient (2 max)"}
    >
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
      {dataSource.map((item, i) => (
        <>
          <div
            key={i}
            className={
              snackItem === item.name ? "mealSelected" : "mealInfoContainer"
            }
            onClick={() => {
              setSnackItem(item.name);
            }}
          >
            <div className="d-flex align-center mt-4">
              <div class="container">
                {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
                <img
                  className={snackItem === item.name ? "imageSelected" : ""}
                  src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                  width="60"
                  height="60"
                  alt=""
                />
                <div
                  className={snackItem === item.name ? "overlay" : "noDisplay"}
                >
                  <a className="icon" title="User Profile">
                    {snackItem === item.name && (
                      <CheckOutlined
                        style={{
                          fontSize: "28px",
                          color: "#ffffff",
                        }}
                      />
                    )}
                  </a>
                </div>
              </div>

              <h3 className="ml-5">{item.name}</h3>
            </div>
          </div>

          <div className="mt-4">
            {snackItem === item.name && (
              <Row>
                <Form onFinish={onFinish}>
                  <Space
                  // style={{ display: "flex", marginBottom: 8 }}
                  // align="baseline"
                  >
                    <Col span={24}>
                      <Form.Item name={"item_amount"} fieldKey={"item_amount"}>
                        <Input
                          type="number"
                          placeholder="Amount"
                          value={
                            snack.hasOwnProperty(item.name) &&
                            snack[item.name]["item_amount"]
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name={"fraction"} fieldKey={"fraction"}>
                        <Select
                          defaultValue={
                            snack.hasOwnProperty(item.name) && snack[item.name]
                              ? snack[item.name]["fraction"]
                              : "fraction"
                          }
                          style={{ width: 140 }}
                        >
                          <Option value="1/2">1/2</Option>
                          <Option value="1/3">1/3</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name={"unit"} fieldKey={"unit"}>
                        <Select
                          defaultValue={
                            snack.hasOwnProperty(item.name) && snack[item.name]
                              ? snack[item.name]["unit"]
                              : "unit"
                          }
                          style={{ width: 140 }}
                        >
                          <Option value="jack">TSB</Option>
                          <Option value="lucy">TPS</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Space>
                  {snack.hasOwnProperty(item.name) && snack[item.name] ? (
                    <>
                      <span>
                        <Form.Item>
                          <DeleteOutlined onClick={onSnackDelete} />
                        </Form.Item>
                      </span>
                      <Form.Item>
                        <span style={{ width: "100%" }}>
                          <Button htmlType="submit" type="primary" block>
                            Update
                          </Button>
                        </span>
                      </Form.Item>
                    </>
                  ) : (
                    <Form.Item>
                      <Button htmlType="submit" type="primary" block>
                        Add
                      </Button>
                    </Form.Item>
                  )}
                </Form>
              </Row>
            )}
          </div>
        </>
      ))}
    </Modal>
  );
};

export default SnackPopup;
