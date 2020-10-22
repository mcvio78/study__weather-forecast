import React from "react";

import PropTypes from "prop-types";
import Auxiliary from "../Auxiliary/Auxiliary";

const Layout = (props) => {
  const { children } = props;

  return (
    <Auxiliary>
      <main>{children}</main>
    </Auxiliary>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
