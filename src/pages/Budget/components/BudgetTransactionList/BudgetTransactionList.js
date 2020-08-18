import React from "react";
import { connect } from "react-redux";
import { List, ListItem } from "./BudgetTransactionList.css";
import {groupBy} from 'lodash';

function BudgetTransactionList({ transactions }) {
    const groupedTransactions = groupBy(transactions, transaction => )
  return (
    <List>
      <li>
        <ul>
          <li></li>
        </ul>
      </li>
    </List>
  );
}

export default connect((state) => ({
  transaction: state.budget.budget.transactions,
}))(BudgetTransactionList);
