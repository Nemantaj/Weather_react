import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import DailyForecast from "./DailyForecast";

function DailyCaraousel(props) {
  return (
    <Fragment>
      <Swiper className="daily_swiper">
        {props.daily.map((item) => (
          <SwiperSlide key={item.EpochDate}>
            <DailyForecast
              key={item.EpochDate}
              date={item.Date}
              sunrise={item.Sun.Rise}
              sunset={item.Sun.Set}
              max={item.Temperature.Maximum.Value}
              min={item.Temperature.Minimum.Value}
              phrase={item.Day.ShortPhrase}
              prec={item.Day.TotalLiquid.Value}
              windDirection={item.Day.Wind.Direction.English}
              wind={item.Day.Wind.Speed.Value}
              cloud={item.Day.CloudCover}
              id={item.Day.Icon}
              Nid={item.Night.Icon}
              precHrs={item.Day.HoursOfPrecipitation}
              Nphrase={item.Night.ShortPhrase}
              Nprec={item.Night.TotalLiquid.Value}
              NwindDirection={item.Night.Wind.Direction.English}
              Nwind={item.Night.Wind.Speed.Value}
              Ncloud={item.Night.CloudCover}
              NprecHrs={item.Night.HoursOfPrecipitation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}

export default DailyCaraousel;
