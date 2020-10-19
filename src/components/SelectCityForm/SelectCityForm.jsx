import React from "react";

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

export default SelectCityForm;
