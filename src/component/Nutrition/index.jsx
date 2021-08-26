import { Input, InputNumber } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNutritionAction } from "../../redux/actions/Nutrition";

var Narray = ["cal", "protien", "fat", "carbs"];
const Nutrition = () => {
  const dispatch = useDispatch();
  const { nutrition } = useSelector((state) => state);

  const onBlurHandle = (e) => {
    dispatch(addNutritionAction({ [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <h2 className="mt-5">Nutrition</h2>
      <p>Enter nutrition macros per day</p>
      {Narray.map((item) => (
        <div className="d-flex align-center justify-space-between mb-5">
          <h4>{item}</h4>
          <Input
            name={item}
            placeholder="#"
            suffix={item === "cal" ? item : "g"}
            size={"middle"}
            style={{ width: "60%" }}
            onChange={onBlurHandle}
            value={nutrition[item]}
          />
        </div>
      ))}
    </div>
  );
};

export default Nutrition;
