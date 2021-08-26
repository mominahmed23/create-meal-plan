export const addWeekAction = (data, n) => {
  return {
    type: "ADD_WEEK",
    payload: data,
    week: n,
  };
};
export const deleteWeekAction = (n) => {
  return {
    type: "DELETE_WEEK",
    week: n,
  };
};
