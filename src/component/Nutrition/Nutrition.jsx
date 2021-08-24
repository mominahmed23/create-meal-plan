import { Input, InputNumber } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';

const Nutrition = () => {
  return (
    <div>
      <h2 className="mt-5">Nutrition</h2>
      <p>Enter nutrition macros per day</p>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Cal</h4>
        <Input
          placeholder="#"
          suffix="cal"
          size={'middle'}
          style={{ width: '60%' }}
        />
      </div>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Protein</h4>
        <Input
          placeholder="#"
          suffix="g"
          size={'middle'}
          style={{ width: '60%' }}
        />
      </div>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Fat</h4>
        <Input
          placeholder="#"
          suffix="g"
          size={'middle'}
          style={{ width: '60%' }}
        />
      </div>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Carbs</h4>
        <Input
          placeholder="#"
          suffix="g"
          size={'middle'}
          style={{ width: '60%' }}
        />
      </div>

      {/* <FormItem name="input-number" noStyle> */}
      {/* <InputNumber min={1} max={10} /> */}
      {/* <span className="ant-form-text"> cal</span> */}
      {/* </FormItem>
      <FormItem label="InputNumber">
        <FormItem name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </FormItem>
        <span className="ant-form-text"> g</span>
      </FormItem>
      <FormItem label="InputNumber">
        <FormItem name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </FormItem>
        <span className="ant-form-text"> g</span>
      </FormItem>
      <FormItem label="InputNumber">
        <FormItem name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </FormItem>
        <span className="ant-form-text"> g</span>
      </FormItem> */}
    </div>
  );
};

export default Nutrition;
