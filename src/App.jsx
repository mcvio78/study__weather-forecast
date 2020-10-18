import React from "react";

import classes from "./App.module.scss";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <h1>This is a test.</h1>
      </Layout>
    </div>
  );
}

export default App;
