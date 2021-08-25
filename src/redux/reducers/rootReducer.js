/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import mealPlan from "./mealPlan";
import weeks from "./weeks";
import snack from "./snackPlan";
const rootReducer = combineReducers({
  mealPlan,
  weeks,
  snack,
});

export default rootReducer;
