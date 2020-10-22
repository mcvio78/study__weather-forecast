import React from "react";

import PropTypes from "prop-types";
import classes from "./Header.module.scss";

const Header = (props) => {
  const { children } = props;
  return (
    <header className={classes.Header}>
      <h1>{children}</h1>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
