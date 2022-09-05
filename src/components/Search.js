import { useRef } from "react";

import { Button, Input, Link, Text } from "@nextui-org/react";
import { Fragment } from "react";
import { motion } from "framer-motion";

import "./Search.css";

function Search(props) {
  const locationRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const entLocation = locationRef.current.value;
    props.onFormSubmit(entLocation);
  }

  function removeHandler() {
    localStorage.removeItem("location");
  }

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
      >
        <Text h3>WeatherFeeds</Text>
        <form className="form" onSubmit={submitHandler}>
          <Input
            ref={locationRef}
            css={{ minWidth: "320px", mw: "500px" }}
            clearable
            type="text"
            shadow="false"
            placeholder="Enter your location here!"
            bordered
          ></Input>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              css={{ mt: "10px", mw: "200px" }}
              flat
              color="error"
              type="submit"
            >
              Search
            </Button>
          </motion.div>
        </form>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link color="error" onClick={removeHandler}>
            Remove stored locations
          </Link>
        </motion.div>
      </motion.div>
    </Fragment>
  );
}

export default Search;
