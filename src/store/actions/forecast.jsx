import * as actionTypes from "./actionTypes";

export const fetchForecast = (formDataObj) => {
  return {
    type: actionTypes.FETCH_FORECAST,
    cityAndLangObj: formDataObj,
  };
};
