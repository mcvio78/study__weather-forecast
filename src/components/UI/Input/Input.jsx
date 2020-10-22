/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import PropTypes from "prop-types";
import classes from "./Input.module.scss";

const Input = (props) => {
  const { notValid, shouldValidate, touched, elementType, elementConfig, value, changed, label } = props;

  // noinspection JSUnusedAssignment
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (notValid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (elementType) {
    case "input":
      inputElement = <input className={inputClasses.join(" ")} {...elementConfig} value={value} onChange={changed} />;
      break;
    case "textarea":
      inputElement = (
        <textarea className={inputClasses.join(" ")} {...elementConfig} value={value} onChange={changed} />
      );
      break;
    case "select":
      inputElement = (
        <select className={inputClasses.join(" ")} value={value} onChange={changed}>
          {elementConfig.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.lang}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={inputClasses.join(" ")} {...elementConfig} value={value} onChange={changed} />;
  }

  return (
    <div className={classes.Input}>
      <label htmlFor="label" className={classes.Label}>
        {label}
      </label>
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  notValid: PropTypes.bool.isRequired,
  shouldValidate: PropTypes.shape({
    required: PropTypes.bool,
    noNumbers: PropTypes.bool,
  }).isRequired,
  touched: PropTypes.bool,
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({ lang: PropTypes.string.isRequired, value: PropTypes.string.isRequired }),
      PropTypes.shape({ lang: PropTypes.string.isRequired, value: PropTypes.string.isRequired }),
      PropTypes.shape({ lang: PropTypes.string.isRequired, value: PropTypes.string.isRequired })
    ),
  }).isRequired,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  touched: false,
};

export default Input;
