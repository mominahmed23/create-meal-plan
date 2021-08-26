/** @format */

// **  Initial State
const initialState = {
  title: "",
  description: "",
  coverImage: null,
  numOfWeeks: [1],
};

const mealPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return { ...state, title: action.payload };
    case "ADD_DESCRIPTION":
      return { ...state, description: action.payload };
    case "ADD_PLAN":
      return { ...state, numOfWeeks: action.payload };
    case "ADD_COVER_IMAGE":
      return { ...state, coverImage: action.payload };
    case "REMOVE_COVER_IMAGE":
      return { ...state, coverImage: null };
    default:
      return state;
  }
};

export default mealPlanReducer;
