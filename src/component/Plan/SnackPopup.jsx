import { Input, Space, Form, Button, Row, Col, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Option } from 'antd/lib/mentions';
const snackData = [
  {
    key: '3',
    name: 'Apple',
  },
  {
    key: '4',
    name: 'Mango',
  },
];

const SnackPopup = ({ isModalVisible, handleOk, handleCancel }) => {
  const [dataSource, setDataSource] = useState(snackData);
  const [value, setValue] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [snackForm, setsnackForm] = useState(null);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values);
  };

  const onModalOk = () => {
    handleOk();
  };
  return (
    <Modal
      visible={isModalVisible}
      onOk={onModalOk}
      onCancel={handleCancel}
      title={'Choose a Snack Ingredient (2 max)'}
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
            className="mealInfoContainer"
            onClick={() => {
              setIsFormVisible(true);
              setsnackForm(item);
            }}
          >
            <div className="d-flex align-center mt-4">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                width="60"
                height="60"
                alt=""
              />
              <h3 className="ml-5">{item.name}</h3>
            </div>
          </div>
          <div className="mt-4">
            {snackForm === item && (
              <Row>
                <Form onFinish={onFinish}>
                  <Space
                    style={{ display: 'flex', marginBottom: 8 }}
                    align="baseline"
                  >
                    <Col span={24}>
                      <Form.Item name={'item_amount'} fieldKey={'item_amount'}>
                        <Input placeholder="Amount" />
                      </Form.Item>
                    </Col>
                    <Form.Item name={'fraction'} fieldKey={'fraction'}>
                      <Select defaultValue="Fraction" style={{ width: 120 }}>
                        <Option value="1/2">1/2</Option>
                        <Option value="1/3">1/3</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name={'unit'} fieldKey={'unit'}>
                      <Select defaultValue="Unit" style={{ width: 120 }}>
                        <Option value="jack">TSB</Option>
                        <Option value="lucy">TPS</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button>Add</Button>
                    </Form.Item>
                  </Space>
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
