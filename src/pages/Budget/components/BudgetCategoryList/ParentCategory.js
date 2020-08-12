import React, { useMemo } from "react";
import { ParentCategory as Root } from "./BudgetCategoryList.css";

function ParentCategory({ name, onClick, categories, transactions }) {
  const categoryLeftValue = useMemo(() => {
    const budgeted = (() => {
      try {
        return categories.reduce((acc, category) => acc + category.budget, 0);
      } catch (error) {
        return null;
      }
    })();
    console.log(budgeted);
    const parentCategoryTransactions = transactions.filter((transaction) =>
      categories.find(
        (category) => category.categoryId === transaction.categoryId
      )
    );
  }, [categories, transactions]);
  return <Root onClick={onClick}>{name}</Root>;
}

export default ParentCategory;
