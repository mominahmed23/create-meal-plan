/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import mealPlan from "./mealPlan";
import weeks from "./weeks";

const rootReducer = combineReducers({
  mealPlan,
  weeks,
});

export default rootReducer;
