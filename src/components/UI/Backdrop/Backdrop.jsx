import React from "react";

import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  const { clicked, show } = props;

  return show ? (
    <div
      className={classes.Backdrop}
      onClick={clicked}
      onKeyDown={clicked}
      role="button"
      aria-label="Close Notification"
      tabIndex={0}
    />
  ) : null;
};

export default Backdrop;
