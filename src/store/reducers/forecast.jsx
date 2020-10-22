import * as actionTypes from "../actions/actionTypes";

const initialState = {
  status: null,
  error: null,
  forecastData: {
    cityName: "",
    date: "",
    temperature: null,
    humidity: null,
    pressure: null,
    tempMax: null,
    tempMin: null,
    weather: "",
    windSpeed: null,
  },
};

const fetchInit = () => {
  return initialState;
};

const fetchSucceeded = (state, action) => {
  return {
    ...state,
    status: action.fetchedData.cod,
    error: null,
    forecastData: {
      cityName: action.fetchedData.city.name,
      date: action.fetchedData.list[0].dt_txt,
      humidity: action.fetchedData.list[0].main.humidity,
      temperature: action.fetchedData.list[0].main.temp,
      pressure: action.fetchedData.list[0].main.pressure,
      tempMax: action.fetchedData.list[0].main.temp_max,
      tempMin: action.fetchedData.list[0].main.temp_min,
      weather: action.fetchedData.list[0].weather[0].description,
      windSpeed: action.fetchedData.list[0].wind.speed,
    },
  };
};

const fetchfailed = (state, action) => {
  return { ...state, error: action.error.response.data.message, status: action.error.response.data.cod };
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
