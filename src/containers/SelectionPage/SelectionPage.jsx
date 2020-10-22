import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Header from "../../components/UI/Header/Header";
import SelectCityForm from "../../components/SelectCityForm/SelectCityForm";
import { checkValidity } from "../../shared/utility";
import * as actionCreators from "../../store/actions/forecast";

const SelectionPage = (props) => {
  const { reqStatus, onFetchForecast } = props;

  const [selectionState, setSelectionState] = useState({
    city: {
      elType: "input",
      elConfig: {
        type: "text",
        placeholder: "Enter City Here",
      },
      value: "",
      validation: {
        required: true,
        noNumbers: true,
      },
      valid: false,
      touched: false,
    },
    language: {
      elType: "select",
      elConfig: {
        options: [
          { lang: "Czech", value: "cz" },
          { lang: "English", value: "en" },
          { lang: "German", value: "de" },
        ],
      },
      value: "en",
      validation: {},
      valid: true,
    },
  });

  const inputChangeHandler = (event, id) => {
    const updatedSelectionState = {
      ...selectionState,
      [id]: {
        ...selectionState[id],
        value: event.target.value,
        valid: checkValidity(event.target.value, selectionState[id].validation),
        touched: true,
      },
    };
    setSelectionState(updatedSelectionState);
  };

  const requestForecastHandler = (event) => {
    event.preventDefault();

    const formData = {};

    Object.keys(selectionState).forEach((selectionField) => {
      formData[selectionField] = selectionState[selectionField].value;
    });

    onFetchForecast(formData);
  };

  const redirect = reqStatus === "200" ? <Redirect to="/forecast" /> : null;

  return (
    <Auxiliary>
      <Header>Select Your City</Header>
      <SelectCityForm
        selState={selectionState}
        inputChange={inputChangeHandler}
        requestForecast={requestForecastHandler}
        cityFieldIsValid={selectionState.city.valid}
      />
      {redirect}
    </Auxiliary>
  );
};

SelectionPage.propTypes = {
  reqStatus: PropTypes.string,
  onFetchForecast: PropTypes.func.isRequired,
};

SelectionPage.defaultProps = {
  reqStatus: null,
};

const mapStateToProps = (state) => {
  return {
    reqStatus: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchForecast: (formDataObj) => dispatch(actionCreators.fetchForecast(formDataObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage);
