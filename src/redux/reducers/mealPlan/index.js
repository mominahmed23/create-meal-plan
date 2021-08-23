/** @format */

// **  Initial State
const initialState = {
  title: "",
  description: "",
};

const mealPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return { ...state, title: action.payload };
    case "ADD_DESCRIPTION":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export default mealPlanReducer;
