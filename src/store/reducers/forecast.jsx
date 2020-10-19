import * as actionTypes from "../actions/actionTypes";

const initialState = {
  // cityName: "",
  // date: "",
  // humidity: null,
  // pressure: null,
  // tempMax: null,
  // tempMin: null,
  // weather: "",
  // windSpeed: null,
  error: null,
};

const fetchInit = () => {
  return { error: null };
};

const fetchSucceeded = (state, action) => {
  return { ...state, ...action.fetchedData };
};

const fetchfailed = (state, action) => {
  return { ...state, ...action.error };
};

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FORECAST_INIT:
      return fetchInit(state, action);

    case actionTypes.FETCH_FORECAST_SUCCEEDED:
      return fetchSucceeded(state, action);

    case actionTypes.FETCH_FORECAST_FAILED:
      return fetchfailed(state, action);

    default:
      return state;
  }
};

export default forecast;
