/** @format */

export const addTitleAction = (data) => {
  return {
    type: "ADD_TITLE",
    payload: data,
  };
};

export const addDescriptionAction = (data) => {
  return {
    type: "ADD_DESCRIPTION",
    payload: data,
  };
};

export const addPlanAction = (data) => {
  return {
    type: "ADD_PLAN",
    payload: data,
  };
};

export const addMealPlanAction = (data) => {
  return {
    type: "ADD_MEAL_PLAN",
    payload: data,
  };
};
