import { Card, Text, Divider, Avatar } from "@nextui-org/react";
import WeatherIcons from "./WeatherIcons";
import { Row, Col } from "react-grid-system";
import {
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

import "./DailyForecast.css";

function dateCovert(date) {
    var date = new Date(date);
    return(
      date.getHours() + ":" + date.getMinutes()
    );
  }

function getDate(date){
    var date = new Date(date);
    const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December'];
    const month = date.getMonth();
    const day = date.getDate(); 
    return(
        day + " " + monthNames[month]
    )

}



function DailyForecast(props) {
  return (
    <div>
          <Card shadow="false">
          <Text h3>{getDate(props.date)}</Text>

<div className="daily_sun">
  <Text
    h5
    css={{
      mr: "5px",
      bgColor: "$green300",
      p: "5px",
      w: "fit-content",
      br: "10px",
    }}
  >
    <BsArrowUp className="daily_arrow" />{Math.round((props.max - 32) * 5/9)}&deg; 
    <BsArrowDown className="daily_arrow" />{Math.round((props.min - 32) * 5/9)}&deg;
  </Text>
  <Text
    h5
    color="$yellow800"
    css={{
      mr: "5px",
      bgColor: "$yellow300",
      p: "5px",
      br: "10px",
    }}
  >
    <WiSunrise className="daily_icons" /> {dateCovert(props.sunrise)}&nbsp;
  </Text>
  <Text
    h5
    color="$red800"
    css={{ bgColor: "$red300", p: "5px", br: "10px" }}
  >
    <WiSunset className="daily_icons" /> {dateCovert(props.sunset)}&nbsp;
  </Text>
</div>
          </Card>
          <Row>
            <Col md={6}>
              <Card shadow="false" css={{ bgColor: "$cyan100", mt: "5px" }}>
              <div className="daily_div">
                <Text b>Day</Text>
                <Avatar icon={<WeatherIcons id={props.id} />}></Avatar>
                </div>
                <Text css={{mb: "3px"}} h4>{props.phrase}</Text>
                <Card>
                  <div className="daily_flex">
                    <Text>Precipitation</Text>
                    <Text b>{props.prec} in</Text>
                  </div>
                  <Divider />
                  <div className="daily_flex">
                    <Text>Wind</Text>
                    <Text b>{props.windDirection} | {props.wind} km</Text>
                  </div>
                  <Divider />
                  <div className="daily_flex">
                    <Text>CloudCover</Text>
                    <Text b>{props.cloud}%</Text>
                  </div>
                  <Divider />
                  <div className="daily_flex">
                    <Text>HoursOfPrecip</Text>
                    <Text b>{props.precHrs}Hrs</Text>
                  </div>
                </Card>
              </Card>
            </Col>
            <Col md={6}>
              <Card shadow="false" css={{ bgColor: "$purple100", mt: "5px" }}>
                <div className="daily_div">
                <Text b>Night</Text>
                <Avatar icon={<WeatherIcons id={props.Nid} />}></Avatar>
                </div>
                <Text css={{mb: "3px"}} h4>{props.Nphrase}</Text>
                <Card>
                  <div className="daily_flex">
                    <Text>Precipitation</Text>
                    <Text b>{props.Nprec} in</Text>
                  </div>
                  <Divider />
                  <div className="daily_flex">
                    <Text>Wind</Text>
                    <Text b>{props.NwindDirection} | {props.Nwind} km</Text>
                  </div>
                  <Divider />
                  <div className="daily_flex">
                    <Text>CloudCover</Text>
                    <Text b>{props.Ncloud}%</Text>
                  </div>
                  <Divider />
                  <div className="daily_flex">
                    <Text>HoursOfPrecip</Text>
                    <Text b>{props.NprecHrs}Hrs</Text>
                  </div>
                </Card>
              </Card>
            </Col>
          </Row>
    </div>
  );
}

export default DailyForecast;
