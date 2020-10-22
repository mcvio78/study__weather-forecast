import React from "react";

import PropTypes from "prop-types";
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  const { show, clicked } = props;

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

Backdrop.propTypes = {
  show: PropTypes.shape({}),
  clicked: PropTypes.func,
};

Backdrop.defaultProps = {
  show: null,
  clicked: () => {},
};

export default Backdrop;
