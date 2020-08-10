import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
  fetchBudget,
  fetchBudgetedCategories,
} from "data/actions/budget.actions";
import { fetchAllCategories } from "data/actions/common.actions";
import { Grid } from "./Budget.css";

function Budget({
  commonState,
  budgetState,
  fetchBudget,
  fetchBudgetedCategories,
  fetchAllCategories,
}) {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
    fetchAllCategories();
  }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);
  const isLoaded = useMemo(
    () =>
      Object.keys(commonState).lenght === 0 &&
      Object.keys(budgetState).length === 0,
    [commonState, budgetState]
  );

  console.log(isLoaded);

  return (
    <Grid>
      <section>Category List</section>
      <section>Transaction List</section>
    </Grid>
  );
}

export default connect(
  (state) => {
    return {
      budget: state.budget.budget,
      commonState: state.common.loadingState,
      budgetState: state.budget.loadingState,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories,
  }
)(Budget);
