const initialState = {
  cal: "",
  protien: "",
  fat: "",
  carbs: "",
};

const nutritionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUTRITION":
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default nutritionReducer;
