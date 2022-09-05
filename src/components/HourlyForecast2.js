import { useContext } from "react";

import { Text, Col, Divider, Table, Avatar } from "@nextui-org/react";
import { WiCloudy } from "react-icons/wi";
import WeatherContext from "../context/weatherContext";
import "./HourlyForecast2.css";
import WeatherIcons from "./WeatherIcons";

function HourlyTable(props) {
  const weatherCtx = useContext(WeatherContext);
  const hourly = weatherCtx.weatherHourly;

  function dateCovert(date) {
    var date = new Date(date);
    return(
      date.getHours() + ":" + date.getMinutes()
    );
  }

  return (
    <Table
      aria-label="example"
      css={{ height: "auto", midwidth: "100%" }}
      lined
      sticked
    >
      <Table.Header>
        <Table.Column><Text>Time</Text></Table.Column>
        <Table.Column><Text>Icon</Text></Table.Column>
        <Table.Column><Text>Desc</Text></Table.Column>
        <Table.Column><Text>(Temprature)</Text></Table.Column>
        <Table.Column><Text>(RF)</Text></Table.Column>
        <Table.Column><Text>(Humidity)</Text></Table.Column>
        <Table.Column><Text>(Rain)</Text></Table.Column>
        <Table.Column><Text>(Clouds)</Text></Table.Column>
      </Table.Header>
      <Table.Body items={hourly}>
        {(items) => (
          <Table.Row key={items.EpochDateTime}>
            <Table.Cell>{dateCovert(items.DateTime)}</Table.Cell>
            <Table.Cell>
              <Avatar icon={<WeatherIcons id={items.WeatherIcon} />} css={{ mr: "5px" }}></Avatar>
            </Table.Cell>
            <Table.Cell>
              <Text b>{items.IconPhrase}</Text>
            </Table.Cell>
            <Table.Cell>{Math.round((items.Temperature.Value - 32) * 5/9)}&deg;C</Table.Cell>
            <Table.Cell>{Math.round((items.RealFeelTemperature.Value - 32) * 5/9)}&deg;C</Table.Cell>
            <Table.Cell>{items.RelativeHumidity}%</Table.Cell>
            <Table.Cell>{items.PrecipitationProbability}%</Table.Cell>
            <Table.Cell>{items.CloudCover}%</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
      shadow
      color="error"
      noMargin
      align="center"
      rowsPerPage={6}></Table.Pagination>
    </Table>
  );
}

export default HourlyTable;
