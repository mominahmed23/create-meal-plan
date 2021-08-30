import { Input, Space, Form, Button, Row, Col, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Option } from 'antd/lib/mentions';
import { CheckOutlined, SearchOutlined } from '@ant-design/icons';
import { addSnackAction } from '../../redux/actions/snacks';
import { DeleteOutlined } from '@ant-design/icons';
import appleImg from '../../assets/snack_apple.png';
const snackData = [
  {
    name: 'Apple',
  },
];

const SnackPopup = ({ isModalVisible, handleOk, handleCancel }) => {
  const [dataSource, setDataSource] = useState(snackData);
  const [value, setValue] = useState('');
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
      setsnack('');
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
      width={'45%'}
      title={'Choose snack Ingredients (2 max)'}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Confirm
        </Button>,
      ]}
    >
      <Input
        placeholder="Search ingredients"
        prefix={<SearchOutlined style={{ fontSize: '20px' }} />}
        size={'medium'}
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
              snackItem === item.name ? 'mealSelected' : 'mealInfoContainer'
            }
            onClick={() => {
              setSnackItem(item.name);
            }}
          >
            <div className="d-flex align-center mt-4">
              <div class="container">
                {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
                <img
                  className={snackItem === item.name ? 'imageSelected' : ''}
                  src={appleImg}
                  width="70"
                  height="70"
                  alt=""
                />
                <div
                  className={snackItem === item.name ? 'overlay' : 'noDisplay'}
                >
                  <a className="icon" title="User Profile">
                    {snackItem === item.name && (
                      <CheckOutlined
                        style={{
                          fontSize: '28px',
                          color: '#ffffff',
                        }}
                      />
                    )}
                  </a>
                </div>
              </div>

              <h3 className="ml-5">{item.name}</h3>
              {/* {weeks &&
                sDay &&
                sDay.hasOwnProperty(dayIndex) &&
                sDay[dayIndex].includes(item.name) && <div>hello</div>} */}
            </div>
          </div>

          <div className="mt-4">
            {snackItem === item.name && (
              <Row>
                <Form onFinish={onFinish}>
                  <Space
                    style={{ display: 'flex', marginBottom: -10 }}
                    align="baseline"
                  >
                    <Col span={24}>
                      <Form.Item name={'item_amount'} fieldKey={'item_amount'}>
                        <Input
                          type="number"
                          placeholder="Amount"
                          value={
                            snack.hasOwnProperty(item.name) &&
                            snack[item.name]['item_amount']
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Form.Item name={'fraction'} fieldKey={'fraction'}>
                      <Select
                        defaultValue={
                          snack.hasOwnProperty(item.name) && snack[item.name]
                            ? snack[item.name]['fraction']
                            : 'fraction'
                        }
                        style={{ width: 120 }}
                      >
                        <Option value="1/2">1/2</Option>
                        <Option value="1/3">1/3</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name={'unit'} fieldKey={'unit'}>
                      <Select
                        defaultValue={
                          snack.hasOwnProperty(item.name) && snack[item.name]
                            ? snack[item.name]['unit']
                            : 'unit'
                        }
                        style={{ width: 120 }}
                      >
                        <Option value="jack">TSB</Option>
                        <Option value="lucy">TPS</Option>
                      </Select>
                    </Form.Item>
                  </Space>
                  {snack.hasOwnProperty(item.name) && snack[item.name] ? (
                    <>
                      <Form.Item>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <DeleteOutlined
                            onClick={onSnackDelete}
                            style={{ fontSize: '20px' }}
                          />
                          <Button
                            htmlType="submit"
                            // type="primary"
                            style={{
                              width: '90%',
                              background: '#151515',
                              color: 'white',
                            }}
                          >
                            Update
                          </Button>
                        </div>
                      </Form.Item>
                    </>
                  ) : (
                    <Form.Item>
                      <Button
                        style={{ width: '100%' }}
                        htmlType="submit"
                        type="primary"
                      >
                        Add
                      </Button>
                    </Form.Item>
                  )}
                </Form>
              </Row>
            )}
            <div className="d-flex align-center mt-4">
              <div className="imageBackground"></div>
              <div className="mealDesc">
                <h3 className="snackTitle ml-5">
                  {'Ingredient title can be two lines or three'}
                </h3>
              </div>
            </div>
            <div className="d-flex align-center mt-4">
              <div className="imageBackground"></div>
              <div className="mealDesc">
                <h3 className="snackTitle ml-5">{'Ingredient title'}</h3>
              </div>
            </div>
            <div className="d-flex align-center mt-4">
              <div className="imageBackground"></div>
              <div className="mealDesc">
                <h3 className="snackTitle ml-5">{'Ingredient title'}</h3>
              </div>
            </div>
          </div>
        </>
      ))}
    </Modal>
  );
};

export default SnackPopup;
