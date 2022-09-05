import { Text } from "@nextui-org/react";
import { Card } from "@nextui-org/react";

import { motion } from "framer-motion";

import {BsArrowUp, BsArrowDown} from 'react-icons/bs';
import "./HeroCard.css";
import HeroAnimation from "./HeroVariables";

const CLEAR_DAY = "90deg, #00bdfe, #00c8fe, #5adeff";
const CLOUDY = "90deg, #e8e8e8, #f5e4f4, #f7f7ec, #c0dfff";
const PARTLY_CLOUDY_DAY = "90deg, #C1F0F9, #92E3E9, #73C7D0";
const RAIN = "90deg, #ced2c8, #89bf9a, #679883";
const CLEAR_NIGHT = "90deg, #f8c0d8, #f880b0, #885090 ";
const PARTLY_CLOUDY_NIGHT = "90deg, #fa9ac7, #5a2d42";
const WIND = "90deg, #F9FFE8, #EBFFC1";
const SNOW = "90deg, #ecfffd, #a0e6ec";
const FOG = "90deg, #e6d4c3, #fbecda";
const SLEET = "90deg, #CFCECD, #5C848C";

const iconName = [
  CLEAR_DAY,
  CLEAR_DAY,
  CLEAR_DAY,
  PARTLY_CLOUDY_DAY,
  PARTLY_CLOUDY_DAY,
  PARTLY_CLOUDY_DAY,
  PARTLY_CLOUDY_DAY,
  CLOUDY,
  CLOUDY,
  FOG,
  FOG,
  FOG,
  RAIN,
  RAIN,
  RAIN,
  RAIN,
  RAIN,
  RAIN,
  RAIN,
  CLOUDY,
  CLOUDY,
  PARTLY_CLOUDY_DAY,
  SNOW,
  SNOW,
  SNOW,
  SLEET,
  SLEET,
  SLEET,
  SLEET,
  SLEET,
  SLEET,
  CLEAR_DAY,
  SNOW,
  WIND,
  CLEAR_NIGHT,
  CLEAR_NIGHT,
  PARTLY_CLOUDY_NIGHT,
  PARTLY_CLOUDY_NIGHT,
  CLEAR_NIGHT,
  CLOUDY,
  RAIN,
  RAIN,
  RAIN,
  RAIN,
  CLOUDY,
  SNOW
];

function HeroCard(props) {
  return (
    <motion.div 
      initial={{y: "50%", opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.2, ease: "easeInOut"}}
    >
      <Card css={{ linearGradient: iconName[props.icon]}} shadow="false" animate={{scale: 1.1}}>
      <div className="hero_absolute">
        <Text css={{ mb: "5px" }}>{props.name}</Text>
        <div className="hero_tmp">
          <Text h1 css={{ fontSize: "40px" }}>
            {props.temp}&deg;C
          </Text>
          <Card css={{ bgBlur: "#ffffff" }}>
            <Text b>{props.text}</Text>
          </Card>
        </div>
        <div className="hero_xs">
          <Card css={{ bgBlur: "#ffffff", mr: "10px" }}>
          <Text b><BsArrowUp className="hero_icons" />{Math.round((props.lo - 32) * 5/9)}&deg;C</Text>
            <Text b><BsArrowDown className="hero_icons" />{Math.round((props.hi - 32) * 5/9)}&deg;C</Text>
          </Card>
          <Card css={{ bgBlur: "#ffffff" }}>
            <Text b>RealFeel</Text>
            <Text b>{props.realfeel}&deg;C</Text>
          </Card>
        </div>
      </div>
      <div className="icon">
        <HeroAnimation iconId={props.icon} />
      </div>
    </Card>
    </motion.div>
  );
}

export default HeroCard;
