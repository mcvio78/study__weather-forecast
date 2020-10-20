import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./ForecastPage.module.scss";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";
import * as actionCreators from "../../store/actions/forecast";

const ForecastPage = (props) => {
  const { st } = props;

  let forecastData = null;
  if (st.cod === "200") {
    forecastData = (
      <Auxiliary>
        <h1>{st.city.name}</h1>
        <p>Weather: {st.list[0].weather[0].description}</p>
        <p>Date: {st.list[0].dt_txt}</p>
        <p>
          Temperature: {st.list[0].main.temp}
          <span> &#8451;</span>
        </p>
        <p>Humidity: {st.list[0].main.humidity} %</p>
        <p>Pressure: {st.list[0].main.pressure} hPa</p>
        <p>
          Temp-Max: {st.list[0].main.temp_max}
          <span> &#8451;</span>
        </p>
        <p>
          Temp-Min: {st.list[0].main.temp_min}
          <span> &#8451;</span>
        </p>
        <p>Wind: {st.list[0].wind.speed} m/s</p>
      </Auxiliary>
    );
  }

  const redirect = st.cod !== "200" ? <Redirect to="/" /> : null;

  const backHomeHandler = () => {
    props.onClickHome();
  };

  return (
    <div className={classes.Forecast}>
      {forecastData}
      {redirect}
      <Button clicked={backHomeHandler}>Home</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    st: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHome: () => dispatch(actionCreators.fetchInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
