import { useState } from "react";

import WeatherContext from "./weatherContext";

function WeatherProvider(props) {
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState();
  const [upAhead, setUpAhead] = useState();
  const [hourly, setHourly] = useState();
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState(true);

  const api = "paste your accuweather API here!";

  async function getWeatherText(text) {
    setLoading(true);
    setError("");
    try {
      if(text == ""){
        setLoading(false);
        throw new Error("Please enter a valid location!");
      }

      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/search?apikey=${api}&q=${text}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const key = data[0].Key;
      const lName = (data[0].LocalizedName);
      const localeName = (data[0].AdministrativeArea.LocalizedName);

      const secRes = await fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${api}&details=true`
      )
      if (!secRes.ok) {
        throw new Error("Something went wrong!");
      }

      const newData = await secRes.json();
      setResData(newData);

      const hourlyRes = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${api}&details=true`
      )
      if (!hourlyRes.ok) {
        throw new Error("Something went wrong!");
      }

      const hourlyData = await hourlyRes.json();
      setHourly(hourlyData);

      const dailyRes = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${api}&details=true`
      )
      if (!dailyRes.ok) {
        throw new Error("Something went wrong!");
      }

      const dailyData = await dailyRes.json();
      setUpAhead(dailyData);

      setLocation(`${lName}, ${localeName}`);

      setSearch(false);
      

    } catch (e) {
        setError(e.message);
    }

    setLoading(false);
  }

  function getSearch(){
    setSearch(true);
  }

  const weatherContext = {
    location: location,
    loading: loading,
    weatherData: resData,
    weatherHourly: hourly,
    weatherAhead: upAhead,
    getWeatherByText: getWeatherText,
    error: error,
    search: search,
    getSearch: getSearch,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
