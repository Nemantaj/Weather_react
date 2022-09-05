import { Text, Divider, Collapse } from "@nextui-org/react";
import { Card } from "@nextui-org/react";

import { Row, Col } from "react-grid-system";

import "./HourlyForecast.css";

function HourlyForecast(props) {
  return (
      <Collapse title="Hourly Forecast">
    <div>
      <Row>
        <Col xl={6}>
          <Row>
            <Col md={6} className="hf_1">
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
            </Col>
            <Col md={6} className="hf_1">
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={6}>
          <Row>
            <Col md={6} className="hf_1">
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
            </Col>
            <Col md={6} className="hf_1">
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card >
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
              <Card css={{bgColor: "$green300"}} shadow="false">
                <Text>41&deg;C</Text>
                <Text>Cloudy</Text>
                <Text>2:30 | 28/05</Text>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
      </Collapse>
  );
}

export default HourlyForecast;
