import { useContext, useEffect} from "react";

import { Collapse, NextUIProvider, Text } from "@nextui-org/react";
import { Container, Row, Col } from "react-grid-system";
import { AnimatePresence, motion } from "framer-motion";
import { DotWave } from "@uiball/loaders";

import WeatherContext from "./context/weatherContext";

import "./App.css";
import HeroCard from "./components/HeroCard";
import HourlyTable from "./components/HourlyForecast2";
import Search from "./components/Search";
import SubCard from "./components/SubCard";
import DailyCaraousel from "./components/DailyCaraousel";

import ToggleSearch from "./components/setSearch";

function App() {
  const weatherCtx = useContext(WeatherContext);
  const curData = weatherCtx.weatherData;
  const location = weatherCtx.location;
  const daily = weatherCtx.weatherAhead;
  const loading = weatherCtx.loading;

  function onLocation(locale) {
    weatherCtx.getWeatherByText(locale);
    localStorage.setItem('location', `${locale}`);
  }

  useEffect(()=>{
    const localLocation = localStorage.getItem('location');
    if(localLocation !== null){
      weatherCtx.getWeatherByText(localLocation);
    }

  }, [])

  return (
    <NextUIProvider>
      <AnimatePresence>
      <div className="app">
        <Container>
          {!weatherCtx.search &&<ToggleSearch />}
          {weatherCtx.search && (
            <Row>
              <Col className="search" id="search_div_main">
                <Search onFormSubmit={onLocation} />
              </Col>
            </Row>
          )}
          {loading && (
            <Row>
              <Col className="hero_2">
                <DotWave size={47} speed={1} color="black" />
              </Col>
            </Row>
          )}
          {weatherCtx.error !== "" && (
            <Row>
              <Col className="hero">
                <motion.div
                  initial={{ opacity: 0, y: "50%" }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Text
                    color="error"
                    css={{ bgColor: "$red200", p: "10px", br: "10px" }}
                  >
                    {weatherCtx.error}
                  </Text>
                </motion.div>
              </Col>
            </Row>
          )}
          <Row>
            <Col md={6} className="hero">
              {weatherCtx.location !== "" && !loading && (
                <HeroCard
                  name={location}
                  temp={curData[0].Temperature.Metric.Value}
                  text={curData[0].WeatherText}
                  realfeel={curData[0].RealFeelTemperature.Metric.Value}
                  hi={daily.DailyForecasts[0].Temperature.Minimum.Value}
                  lo={daily.DailyForecasts[0].Temperature.Maximum.Value}
                  icon={curData[0].WeatherIcon}
                />
              )}
            </Col>
            <Col md={6} className="hero">
              {weatherCtx.location !== "" && !loading && (
                <SubCard
                  prec={daily.DailyForecasts[0].Day.Rain.Value}
                  wind={curData[0].Wind.Direction.English}
                  windSpeed={curData[0].Wind.Speed.Metric.Value}
                  humidity={curData[0].RelativeHumidity}
                  visibility={curData[0].Visibility.Metric.Value}
                  rise={daily.DailyForecasts[0].Sun.Rise}
                  set={daily.DailyForecasts[0].Sun.Set}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col className="hourly">
              <Text h1 css={{ mb: "10px" }}>
                {location !== "" && !loading && "Hourly Forecast"}
              </Text>
              {location !== "" && !loading && <HourlyTable />}
            </Col>
          </Row>
          <Row>
            <Col className="daily">
              <Text h1 css={{ mb: "10px" }}>
                {location !== "" && !loading && "Daily Forecast"}
              </Text>
              {location !== "" && !loading && (
                <DailyCaraousel daily={daily.DailyForecasts} />
              )}
            </Col>
          </Row>
          <Row>
            <Col className="signature">
                <Text b css={{bgColor: "$pink200", padding: "10px", br: "10px"}}>Made by Nemantaj Garg.</Text>
            </Col>
          </Row>
        </Container>
      </div>
      </AnimatePresence>
    </NextUIProvider>
  );
}

export default App;
