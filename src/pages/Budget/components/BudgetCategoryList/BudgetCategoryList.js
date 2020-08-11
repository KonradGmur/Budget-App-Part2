import React from "react";
import { connect } from "react-redux";
import { groupBy } from "lodash";

function BudgetCategoryList({ budgetedCategories, allCategories }) {
  const budgetedCategoriesByParent = groupBy(
    budgetedCategories,
    (item) =>
      allCategories.find((category) => category.id === item.categoryId)
        .parentCategory.name
  );

  console.log(budgetedCategories);
  console.log(budgetedCategoriesByParent);

  return <div>BudgetCategoryList</div>;
}
export default connect((state) => ({
  budgetCategories: state.budget.budgetCategories,
  allCategories: state.common.allCategories,
}))(BudgetCategoryList);
