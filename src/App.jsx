import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import classes from "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import SelectionPage from "./containers/SelectionPage/SelectionPage";

const ForecastPage = lazy(() => {
  return import("../src/components/ForecastPage/ForecastPage");
});

const App = () => {
  const routes = (
    <Switch>
      <Route path="/forecast" render={(props) => <ForecastPage {...props} />} />
      <Route path="/" exact component={SelectionPage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className={classes.App}>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default App;
