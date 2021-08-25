/** @format */

// **  Initial State
const initialState = {};

const snackPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SNACK":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default snackPlanReducer;
