import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDescriptionAction } from '../../redux/actions/categories';

const Description = () => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state.mealPlan);

  const addDescription = (desc) => {
    dispatch(addDescriptionAction(desc));
  };
  console.log(description);
  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Title">
          <TextArea
            showCount
            value={description}
            maxLength={100}
            minLength={3}
            placeholder="Describe your recipe"
            onChange={(e) => addDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default Description;
