/** @format */

// **  Initial State
const initialState = {
  title: "",
  description: "",
  plan: "",
  mealPlan: {},
};

const mealPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return { ...state, title: action.payload };
    case "ADD_DESCRIPTION":
      return { ...state, description: action.payload };
    case "ADD_PLAN":
      return { ...state, plan: action.payload };
    case "ADD_MEAL_PLAN":
      return { ...state, mealPlan: action.payload };

    default:
      return state;
  }
};

export default mealPlanReducer;
