import React from "react";

import PropsTypes from "prop-types";
import classes from "./SelectCityForm.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const SelectCityForm = (props) => {
  const { selState, requestForecast, inputChange, cityFieldIsValid } = props;

  const formElsArray = [];

  Object.keys(selState).forEach((key) => {
    formElsArray.push({
      id: key,
      config: selState[key],
    });
  });

  return (
    <div className={classes.CityFormBox}>
      <form onSubmit={requestForecast}>
        {formElsArray.map((formEl) => (
          <Input
            label={formEl.id.toUpperCase()}
            elementType={formEl.config.elType}
            elementConfig={formEl.config.elConfig}
            value={formEl.config.value}
            key={formEl.id}
            fieldName={formEl.id}
            notValid={!formEl.config.valid}
            shouldValidate={formEl.config.validation}
            touched={formEl.config.touched}
            changed={(event) => inputChange(event, formEl.id)}
          />
        ))}
        <Button btnType="Success" disabled={!cityFieldIsValid}>
          Search
        </Button>
      </form>
    </div>
  );
};

SelectCityForm.propTypes = {
  selState: PropsTypes.shape({
    city: PropsTypes.shape({
      elType: PropsTypes.string,
      elConfig: PropsTypes.shape({
        type: PropsTypes.string,
        placeholder: PropsTypes.string,
      }),
      value: PropsTypes.string,
      validation: PropsTypes.shape({
        required: PropsTypes.bool,
        noNumbers: PropsTypes.bool,
      }),
      valid: PropsTypes.bool,
      touched: PropsTypes.bool,
    }),
    language: PropsTypes.shape({
      elType: PropsTypes.string,
      elConfig: PropsTypes.shape({
        options: PropsTypes.arrayOf(
          PropsTypes.shape({ lang: PropsTypes.string, value: PropsTypes.string }),
          PropsTypes.shape({ lang: PropsTypes.string, value: PropsTypes.string }),
          PropsTypes.shape({ lang: PropsTypes.string, value: PropsTypes.string })
        ),
      }),
      value: PropsTypes.string,
      validation: PropsTypes.shape({}),
      valid: PropsTypes.bool,
    }),
  }).isRequired,
  requestForecast: PropsTypes.func.isRequired,
  inputChange: PropsTypes.func.isRequired,
  cityFieldIsValid: PropsTypes.bool.isRequired,
};

export default SelectCityForm;
