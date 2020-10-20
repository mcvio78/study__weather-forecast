import * as actionTypes from "./actionTypes";
import axiosForecast from "../../request-worker/axios-forecast";

export const fetchInit = () => {
  return {
    type: actionTypes.FETCH_FORECAST_INIT,
  };
};

const fetchSucceeded = (data) => {
  return {
    type: actionTypes.FETCH_FORECAST_SUCCEEDED,
    fetchedData: data,
  };
};

const fetchFailed = (err) => {
  return {
    type: actionTypes.FETCH_FORECAST_FAILED,
    error: err,
  };
};

export const fetchForecast = (formDataObj) => {
  return (dispatch) => {
    dispatch(fetchInit);

    axiosForecast
      .get("", {
        params: {
          q: formDataObj.city,
          lang: formDataObj.language,
          units: "metric",
        },
      })
      .then((res) => {
        dispatch(fetchSucceeded(res.data));
      })
      .catch((err) => {
        dispatch(fetchFailed(err));
      });
  };
};
