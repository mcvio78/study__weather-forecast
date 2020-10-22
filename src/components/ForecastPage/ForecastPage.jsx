import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import classes from "./ForecastPage.module.scss";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";
import * as actionCreators from "../../store/actions/forecast";

const ForecastPage = (props) => {
  const { reqStatus, forecastDataMap, onClickHomeBtn } = props;

  let forecastData = null;
  if (reqStatus === "200") {
    forecastData = (
      <Auxiliary>
        <h1>{forecastDataMap.cityName}</h1>
        <p>Weather: {forecastDataMap.weather}</p>
        <p>Date: {forecastDataMap.date}</p>
        <p>
          Temperature: {forecastDataMap.temperature}
          <span> &#8451;</span>
        </p>
        <p>Humidity: {forecastDataMap.humidity} %</p>
        <p>Pressure: {forecastDataMap.pressure} hPa</p>
        <p>
          Temp-Max: {forecastDataMap.tempMax}
          <span> &#8451;</span>
        </p>
        <p>
          Temp-Min: {forecastDataMap.tempMin}
          <span> &#8451;</span>
        </p>
        <p>Wind: {forecastDataMap.windSpeed} m/s</p>
      </Auxiliary>
    );
  }

  const redirect = reqStatus !== "200" ? <Redirect to="/" /> : null;

  const backHomeHandler = () => {
    onClickHomeBtn();
  };

  return (
    <div className={classes.Forecast}>
      {forecastData}
      {redirect}
      <Button btnType="Success" clicked={backHomeHandler}>
        Home
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    reqStatus: state.status,
    forecastDataMap: state.forecastData,
    //   {
    //   cityName: state.forecastData.cityName,
    //   date: state.forecastData.date,
    //   temperature: state.forecastData.temperature,
    //   humidity: state.forecastData.humidity,
    //   pressure: state.forecastData.pressure,
    //   tempMax: state.forecastData.tempMax,
    //   tempMin: state.forecastData.tempMin,
    //   weather: state.forecastData.weather,
    //   windSpeed: state.forecastData.windSpeed,
    // },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHomeBtn: () => dispatch(actionCreators.fetchInit()),
  };
};

ForecastPage.propTypes = {
  reqStatus: PropTypes.string,
  forecastDataMap: PropTypes.shape({
    cityName: PropTypes.string,
    date: PropTypes.string,
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
    weather: PropTypes.string,
    windSpeed: PropTypes.number,
  }).isRequired,
  onClickHomeBtn: PropTypes.func.isRequired,
};

ForecastPage.defaultProps = {
  reqStatus: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
