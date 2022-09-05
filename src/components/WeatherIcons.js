import { Fragment } from "react";
import {
  WiDaySunny,
  WiDayHaze,
  WiDaySunnyOvercast,
  WiDayCloudyHigh,
  WiDayCloudy,
  WiDayFog,
  WiDayShowers,
  WiDaySprinkle,
  WiDaySleetStorm,
  WiDayThunderstorm,
  WiDayRain,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiDaySnow,
  WiSnowflakeCold,
  WiSleet,
  WiShowers,
  WiSprinkle,
  WiThermometer,
  WiThermometerExterior,
  WiStrongWind,
  WiNightClear,
  WiNightCloudyHigh,
  WiNightCloudy,
  WiNightPartlyCloudy,
  WiNightFog,
  WiNightAltShowers,
  WiNightAltRainMix,
  WiNightThunderstorm,
  WiNightStormShowers,
  WiNightHail,
  WiNightAltSnow,
  WiRefresh

} from "react-icons/wi";

function WeatherIcons(props) {
  const icons = [
    WiDaySunny,
    WiDaySunny,
    WiDaySunny,
    WiDaySunny,
    WiDaySunnyOvercast,
    WiDayHaze,
    WiDayCloudyHigh,
    WiDayCloudy,
    WiDayFog,
    WiDayFog,
    WiDayFog,
    WiDayFog,
    WiDayShowers,
    WiDaySprinkle,
    WiDaySprinkle,
    WiThunderstorm,
    WiDayThunderstorm,
    WiDayThunderstorm,
    WiRain,
    WiCloud,
    WiCloud,
    WiCloud,
    WiSnow,
    WiDaySnow,
    WiSnowflakeCold,
    WiSleet,
    WiShowers,
    WiShowers,
    WiShowers,
    WiSprinkle,
    WiThermometer,
    WiThermometerExterior,
    WiStrongWind,
    WiNightClear,
    WiNightPartlyCloudy,
    WiNightCloudyHigh,
    WiNightCloudy,
    WiNightFog,
    WiNightCloudy,
    WiNightAltShowers,
    WiNightAltRainMix,
    WiNightStormShowers,
    WiNightThunderstorm,
    WiNightHail,
    WiNightAltSnow
  ];

  const IconWeather = icons[props.id];

  return(
      <Fragment>
          <IconWeather size="25px" />
      </Fragment>
  )
}

export default WeatherIcons;
