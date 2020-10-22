import React from "react";

import PropTypes from "prop-types";
import classes from "./Button.module.scss";

const Button = (props) => {
  const { btnType, clicked, disabled, children } = props;

  return (
    <button
      type="submit"
      className={[classes.Button, classes[btnType]].join(" ")}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  clicked: () => {},
  disabled: false,
};

export default Button;
