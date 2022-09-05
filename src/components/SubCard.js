import { Text } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import {WiUmbrella, WiStrongWind, WiHumidity, WiSunrise, WiSunset, WiFog} from "react-icons/wi";
import { motion } from "framer-motion";
import "./SubCard.css";

function SubCard(props) {

  function dateCovert(date) {
    var date = new Date(date);
    return(
      date.getHours() + ":" + date.getMinutes()
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: "50%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{opacity: 0, y:"50%"}}>
      <Card shadow="false" css={{ bgColor: "$blue100", mb: "3px" }}>
        <div className="sub_holder">
          
          <Text color="$blue800"><WiUmbrella className="sub_icons" size="20px"/> Rain</Text>
          <Text h5 color="$blue800">{props.prec} inches</Text>
        </div>
      </Card>
      <Card shadow="false" css={{ bgColor: "$purple100", mt: "3px", mb: "3px"  }}>
        <div className="sub_holder">
          <Text color="$purple800"><WiStrongWind className="sub_icons" size="20px"/> Wind</Text>
          <Text h5 color="$purple800">{props.wind} | {props.windSpeed}</Text>
        </div>
      </Card>
      <Card shadow="false" css={{ bgColor: "$green100", mt: "3px", mb: "3px"  }}>
        <div className="sub_holder">
          <Text color="$green800"><WiHumidity className="sub_icons" size="20px" /> Humidity</Text>
          <Text h5 color="$green800">{props.humidity}%</Text>
        </div>
      </Card>
      <Card shadow="false" css={{ bgColor: "$yellow100", mt: "3px", mb: "3px"  }}>
        <div className="sub_holder">
          <Text color="$yellow800"><WiSunrise className="sub_icons" size="20px" /> Sunrise</Text>
          <Text h5 color="$yellow800">{dateCovert(props.rise)}</Text>
        </div>
      </Card>
      <Card shadow="false" css={{ bgColor: "$red100", mt: "3px", mb: "3px"  }}>
        <div className="sub_holder">
          <Text color="$red800"><WiSunset className="sub_icons" size="20px" /> Sunset</Text>
          <Text h5 color="$red800">{dateCovert(props.set)}</Text>
        </div>
      </Card>
      <Card shadow="false" css={{ bgColor: "$cyan100", mt: "3px", mb: "3px"  }}>
        <div className="sub_holder">
          <Text color="$cyan800"><WiFog className="sub_icons" size="20px" /> Visibility</Text>
          <Text h5 color="$cyan800">{props.visibility} km</Text>
        </div>
      </Card>
      </motion.div>
  );
}

export default SubCard;
