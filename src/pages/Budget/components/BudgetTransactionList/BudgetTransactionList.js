import React from "react";
import { connect } from "react-redux";
import { List, ListItem } from "./BudgetTransactionList.css";
import { groupBy } from "lodash";
import { formatCurrency, formatDate } from "utils";

function BudgetTransactionList({ transactions, allCategories }) {
  const groupedTransactions = groupBy(transactions, (transaction) =>
    new Date(transaction.date).getUTCDate()
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
  allCategories: state.common.allCategories,
}))(BudgetTransactionList);
