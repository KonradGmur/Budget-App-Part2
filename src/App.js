import React, { useEffect } from "react";
import GlobalStyles from "./index.css";
import { Navigation, Wrapper, LoadingIndicator, Button } from "components";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  fetchBudget,
  fetchBudgetedCategories,
} from "data/actions/budget.actions";

function App({ budget, fetchBudget, fetchBudgetedCategories }) {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
  }, [fetchBudget, fetchBudgetedCategories]);
  const { i18n } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
          RightElement={
            <div>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("en")}
              >
                ENG
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("pl")}
              >
                PL
              </Button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
}

const ConnectedApp = connect(
  (state) => {
    return {
      budget: state.budget.budget,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
  }
)(App);

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <ConnectedApp />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
