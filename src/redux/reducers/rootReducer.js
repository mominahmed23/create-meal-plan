/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import mealPlan from "./mealPlan";
import weeks from "./weeks";
import snack from "./snackPlan";
import nutrition from "./nutrition";
const rootReducer = combineReducers({
  mealPlan,
  weeks,
  snack,
  nutrition,
});

export default rootReducer;
