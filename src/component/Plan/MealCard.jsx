import { Card, Input, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMealPlanAction } from '../../redux/actions/categories';
import { CheckOutlined } from '@ant-design/icons';

import SnackPopup from './SnackPopup';
import { addWeekAction } from './../../redux/actions/weeks/index';
import './MealInfo.css';
// const mealItems = ['Biryani', 'Burger'];
const data = [{ name: 'Biryani' }, { name: 'Burger' }];

const MealCard = ({
  isModalVisible,
  handleOk,
  handleCancel,
  weekIndex,
  dayIndex,
}) => {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState('');
  const [isRecipeVisible, setIsRecipeVisible] = useState(true);
  const [IsSnackModalVisible, setIsSnackModalVisible] = useState(false);
  const [isMealSelected, setIsMealSelected] = useState(false);

  // const [mealArray, setMealArray] = useState([]);
  const { weeks } = useSelector((state) => state);
  let mealArray = [];
  const dispatch = useDispatch();
  console.log(weeks);

  const onMealClick = (item) => {
    // let newItem = mealArray.concat(item);
    mealArray.push(item);
    // setIsMealSelected(item);
    console.log('yesknk');
    // console.log(Object.entries(weeks['week1']));
  };
  const onModalOk = () => {
    // console.log('beforeeeeeeee ===========>>>>', mealArray);
    handleOk();
    const weekplan = { [dayIndex]: mealArray };
    // const weekplan = { [`week${weekIndex}`]: mealArray };
    dispatch(addWeekAction(weekplan, weekIndex));
    // console.log('afterrrrrrrrr ===========>>>>', mealArray);
    console.log('YOOOOOOOO ===========>>>>', weeks);
  };
  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={onModalOk}
        onCancel={handleCancel}
        title={'Add Meal'}
      >
        <Input
          placeholder="Search a Meal"
          value={value}
          onChange={(e) => {
            const currValue = e.target.value.toLowerCase();
            setValue(currValue);
            const filteredData = data.filter((entry) =>
              entry.name.toLowerCase().includes(currValue)
            );
            setDataSource(filteredData);
          }}
        />
        <Card style={{ width: '100%' }} className="mt-5 px-0">
          <div
            className="d-flex align-center mt-4"
            onClick={() => {
              setIsSnackModalVisible(true);
              handleCancel();
              console.log('clicked');
            }}
          >
            <img
              src="https://image.shutterstock.com/image-vector/apple-vector-illustration-600w-562247050.jpg"
              width="60"
              height="60"
              alt=""
              onClick={() => {
                setIsSnackModalVisible(true);
                console.log('clicked');
              }}
            />
            <h3 className="ml-5">{'Add A sanck'}</h3>
          </div>
          <div className="d-flex align-center mt-4">
            <img
              src="error"
              width="60"
              height="60"
              alt=""
              onClick={() => {
                console.log('clicked');
              }}
            />
            <h3 className="ml-5">{'Create New'}</h3>
          </div>
          {isRecipeVisible &&
            dataSource.map((item, i) => (
              <div
                key={i}
                className={
                  isMealSelected === item.name
                    ? 'mealSelected'
                    : 'mealInfoContainer'
                }
                onClick={() => {
                  onMealClick(item.name);
                }}
              >
                <div className="d-flex align-center mt-4">
                  <div class="container">
                    {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
                    <img
                      className={isMealSelected ? 'imageSelected' : ''}
                      src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                      width="60"
                      height="60"
                      alt=""
                    />
                    <div
                      className={
                        isMealSelected === item.name ? 'overlay' : 'noDisplay'
                      }
                    >
                      <a href="#" className="icon" title="User Profile">
                        {isMealSelected === item.name && (
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
                </div>
              </div>
            ))}
        </Card>
      </Modal>
      <SnackPopup
        isModalVisible={IsSnackModalVisible}
        handleOk={() => setIsSnackModalVisible(false)}
        handleCancel={() => setIsSnackModalVisible(false)}
      />
    </div>
  );
};

export default MealCard;
// FOR AVOIDING REPLACING ITEMS
// if (isMealArr.length > 0) {
//   setIsMealArr((prev) => [prev, item]);
//   console.log('wronggg');
// } else {
//   setIsMealArr(item);
// }
