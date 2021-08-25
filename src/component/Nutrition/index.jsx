import { Input, InputNumber } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNutritionAction } from "../../redux/actions/Nutrition";

const Nutrition = () => {
  const [nutriton, setNutriton] = useState({});
  const dispatch = useDispatch();

  const onBlurHandle = (e) => {
    setNutriton({ [e.target.name]: e.target.value });
    console.log("nnn", nutriton);
    dispatch(addNutritionAction(nutriton));
  };
  return (
    <div>
      <h2 className="mt-5">Nutrition</h2>
      <p>Enter nutrition macros per day</p>

      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Cal</h4>
        <Input
          name="cal"
          placeholder="#"
          suffix="cal"
          size={"middle"}
          style={{ width: "60%" }}
          onBlur={onBlurHandle}
          type="number"
        />
      </div>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Protein</h4>
        <Input
          name="protien"
          placeholder="#"
          suffix="g"
          size={"middle"}
          style={{ width: "60%" }}
          onBlur={onBlurHandle}
          type="number"
        />
      </div>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Fat</h4>
        <Input
          name="fat"
          placeholder="#"
          suffix="g"
          size={"middle"}
          style={{ width: "60%" }}
          onBlur={onBlurHandle}
          type="number"
        />
      </div>
      <div className="d-flex align-center justify-space-between mb-5">
        <h4>Carbs</h4>
        <Input
          name="carbs"
          placeholder="#"
          suffix="g"
          size={"middle"}
          style={{ width: "60%" }}
          onBlur={onBlurHandle}
          type="number"
        />
      </div>
    </div>
  );
};

export default Nutrition;
