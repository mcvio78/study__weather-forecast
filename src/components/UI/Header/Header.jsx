import React from "react";

import classes from "./Header.module.scss";

const Header = (props) => {
  const { children } = props;
  return (
    <header className={classes.Header}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
