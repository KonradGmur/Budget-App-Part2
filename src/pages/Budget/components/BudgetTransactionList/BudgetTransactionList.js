import React from "react";
import { connect } from "react-redux";
import { List, ListItem } from "./BudgetTransactionList.css";
import { groupBy } from "lodash";

function BudgetTransactionList({ transactions }) {
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
                <div>{transaction.amount}</div>
                <div>{transaction.date}</div>
                <div>{transaction.categoryId}</div>
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
}))(BudgetTransactionList);
