import React from "react";
import { connect } from "react-redux";

function BudgetCategoryList({}) {
  return <div>BudgetCategoryList</div>;
}
export default connect((state) => ({
  budgetCategories: state.budget.budgetCategories,
  allcategories: state.common.allCategories,
}))(BudgetCategoryList);
