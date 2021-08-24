import { Card, Input, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMealPlanAction } from '../../redux/actions/categories';
import MealInfoContainer from './MealInfoContainer';
import SnackCard from './SnackCard';

// const mealItems = ['Biryani', 'Burger'];
var reduxMealItem = [];
var SingleMealPlan = {};

const addReduxItems = (meal) => {
  reduxMealItem.push(meal);
  console.log('redux meal item', reduxMealItem);
};
const data = [
  {
    key: '1',
    name: 'Biryani',
  },
  {
    key: '2',
    name: 'Burger',
  },
];
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

console.log('redux meal item', reduxMealItem);
const MealCard = ({
  isModalVisible,
  handleOk,
  handleCancel,
  setIsSnackModalVisible,
  handleSnackOk,
  weakIndex,
  dayIndex,
}) => {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState('');
  const [isRecipeVisible, setIsRecipeVisible] = useState(true);
  const dispatch = useDispatch();
  const finalMealPlanofDay = () => {
    console.log('=======\nday', dayIndex);
    console.log(`weak${weakIndex}`, weakIndex);
    console.log('redux meal item', reduxMealItem);
  };
  const onOkModal = () => {
    const weekplan = { [dayIndex]: reduxMealItem };
    console.log(weekplan);
    SingleMealPlan[`weak${weakIndex}`] = weekplan;
    console.log('finalll', SingleMealPlan);
    dispatch(addMealPlanAction(SingleMealPlan));
    //reduxMealItem.length = 0;
    handleOk();
  };

  const FilterByNameInput = (
    <Input
      placeholder="Search Name"
      value={value}
      onChange={(e) => {
        const currValue = e.target.value.toLowerCase();
        setValue(currValue);
        const filteredData = data.filter((entry) =>
          entry.name.includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );

  return (
    <div>
      <Modal visible={isModalVisible} onOk={onOkModal} onCancel={handleCancel}>
        {/* <Card style={{ width: 300 }}> */}
        <h3>Add Meal</h3>
        <Input
          placeholder="Search Name"
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
        <MealInfoContainer
          image={
            'https://image.shutterstock.com/image-vector/apple-vector-illustration-600w-562247050.jpg'
          }
          name={'Add a snack'}
          setIsRecipeVisible={setIsRecipeVisible}
          handleSnackOk={handleSnackOk}
          handleCancel={handleCancel}
          setIsSnackModalVisible={setIsSnackModalVisible}
        />
        {/* {isRecipeVisible && <SnackCard />} */}
        <MealInfoContainer
          image={''}
          name={'Add a Meal'}
          setIsRecipeVisible={setIsRecipeVisible}
        />
        {isRecipeVisible &&
          dataSource.map((item, i) => (
            <div
              key={i}
              className="mealInfoContainer"
              style={{ background: '#ecececec' }}
              onClick={() => {
                addReduxItems(item);
                console.log(item);
                // finalMealPlanofDay();
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                className="mt-4"
              >
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/16/5c/a9/7d/lahore-food.jpg"
                  width="60"
                  height="60"
                  alt=""
                />
                <h3 className="ml-5">{item.name}</h3>
              </div>
            </div>
          ))}
        {/* </Card> */}
      </Modal>
    </div>
  );
};

export default MealCard;
