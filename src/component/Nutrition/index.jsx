import { Input, InputNumber } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNutritionAction } from "../../redux/actions/Nutrition";

var Narray = ["Calories", "Protien", "Fat", "Carbs"];
const Nutrition = () => {
  const dispatch = useDispatch();
  const { nutrition } = useSelector((state) => state);

  const onBlurHandle = (e) => {
    dispatch(addNutritionAction({ [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <span className="default-component-heading">Nutrition</span>
      <p className="dragger-text">Enter nutrition macros per day</p>
      <div className="mt-10">
        {Narray.map((item) => (
          <div className="d-flex align-center justify-space-between mb-5">
            <h4 className="default-title">{item}</h4>
            <Input
              name={item}
              placeholder="#"
              suffix={item === "Calories" ? "cal" : "g"}
              size={"middle"}
              style={{ width: "35%" }}
              onChange={onBlurHandle}
              value={nutrition[item]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
