const initialState = {};

const weeksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WEEK":
      let temp;
      if (!action.week) {
        temp = {
          ...state,
        };
      }
      if (state[`week${action.week}`]) {
        temp = {
          ...state,
          [`week${action.week}`]: {
            ...state[`week${action.week}`],
            ...action.payload,
          },
        };
      } else {
        temp = {
          ...state,
          [`week${action.week}`]: action.payload,
        };
      }
      return temp;
    default:
      return state;
  }
};

export default weeksReducer;
