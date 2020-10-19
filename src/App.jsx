import React from "react";

import Layout from "./hoc/Layout/Layout";
import SelectionPage from "./containers/SelectionPage/SelectionPage";

const App = () => {
  return (
    <div>
      <Layout>
        <SelectionPage />
      </Layout>
    </div>
  );
};

export default App;
