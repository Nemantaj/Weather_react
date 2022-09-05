import { createContext } from "react";

const WeatherContext = createContext({
    location: "",
    loading: false,
    weatherData: [],
    weatherHourly: [],
    weatherAhead: [],
    getWeatherByText: (text) => {},
    error: null,
    search: true,
    getSearch: () => {},
});

export default WeatherContext;