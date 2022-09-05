import { useContext } from "react";

import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import WeatherContext from "../context/weatherContext";
import { motion } from "framer-motion";
import {BsSearch} from 'react-icons/bs';

function ToggleSearch(props) {
    const weatherCtx = useContext(WeatherContext);
    const onBeat = weatherCtx.getSearch;


  return (
    <motion.div>
      <Fab
        icon={<BsSearch />}
        onClick={onBeat}
      ></Fab>
    </motion.div>
  );
}

export default ToggleSearch;
