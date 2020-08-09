import {
  BUDGET_GET,
  BUDGET_CATEGORIES_GET_REQUEST,
  BUDGET_CATEGORIES_GET_SUCCESS,
  BUDGET_CATEGORIES_GET_FAILURE,
} from "data/constants";

import API from "data/fetch";

export const fetchBudget = (id) => (dispatch) => {
  const promise = API.budget.fetchBudget(id);

  dispatch({
    type: BUDGET_GET,
    promise,
  });
};

export const fetchBudgetedCategories = (id) => async (dispatch) => {
  dispatch({
    type: BUDGET_CATEGORIES_GET_REQUEST,
  });

  try {
    const response = await API.budget.fetchBudgetCategories(id);
    const data = await response.json();

    dispatch({
      type: BUDGET_CATEGORIES_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUDGET_CATEGORIES_GET_FAILURE,
    });
  }
};
