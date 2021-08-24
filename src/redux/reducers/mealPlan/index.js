/** @format */

// **  Initial State
const initialState = {
  title: "",
  description: "",
  numOfWeeks: 1,
};

const mealPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return { ...state, title: action.payload };
    case "ADD_DESCRIPTION":
      return { ...state, description: action.payload };
    case "ADD_PLAN":
      return { ...state, numOfWeeks: action.payload };
    default:
      return state;
  }
};

export default mealPlanReducer;
