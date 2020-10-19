import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SelectionPage from "./containers/SelectionPage/SelectionPage";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={SelectionPage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
