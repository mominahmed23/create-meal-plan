/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import mealPlan from "./mealPlan";

const rootReducer = combineReducers({
  mealPlan,
});

export default rootReducer;
