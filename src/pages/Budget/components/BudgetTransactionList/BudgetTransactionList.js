import React from "react";
import { connect } from "react-redux";
import { List, ListItem } from "./BudgetTransactionList.css";
import { groupBy } from "lodash";
import { formatCurrency, formatDate } from "utils";

function BudgetTransactionList({
  transactions,
  allCategories,
  selectedParentCategoryId,
  budgetedCategories,
}) {
  const filterTransactionsbySelectedParentCategory = (() => {
    if (typeof selectedParentCategoryId === "undefined") {
      return transactions;
    }

    if (selectedParentCategoryId === null) {
      return transactions.filter((transaction) => {
        const hasBudgetCategory = budgetedCategories.some(
          (budgetedCategory) =>
            budgetedCategory.categoryId === transaction.categoryId
        );

        return !hasBudgetCategory;
      });
    }

    return transactions.filter((transaction) => {
      try {
        const category = allCategories.find(
          (category) => category.id === transaction.categoryId
        );
        const parentCategoryName = category.parentCategory.name;

        return parentCategoryName === selectedParentCategoryId;
      } catch (error) {
        return false;
      }
    });
  })();

  const groupedTransactions = groupBy(
    filterTransactionsbySelectedParentCategory,
    (transaction) => new Date(transaction.date).getUTCDate()
  );

  return (
    <List>
      <li>
        {Object.entries(groupedTransactions).map(([key, transactions]) => (
          <ul>
            {transactions.map((transaction) => (
              <ListItem>
                <div>{transaction.description}</div>
                <div>{formatCurrency(transaction.amount)}</div>
                <div>{formatDate(transaction.date)}</div>
                <div>
                  {
                    (
                      allCategories.find(
                        (category) => category.id === transaction.categoryId
                      ) || {}
                    ).name
                  }
                </div>
              </ListItem>
            ))}
          </ul>
        ))}
      </li>
      <ul>
        <li></li>
      </ul>
    </List>
  );
}

export default connect((state) => ({
  transaction: state.budget.budget.transactions,
  budgetedCategories: state.budget.budgetedCategories,
  allCategories: state.common.allCategories,
  selectedParentCategoryId: state.budget.selectedParentCategoryId,
}))(BudgetTransactionList);
