export const addWeekAction = (data, n) => {
  return {
    type: "ADD_WEEK",
    payload: data,
    week: n,
  };
};
