import styles from "./Project3.module.css";
import React, { useState } from "react";

const Project3 = () => {
  let time = new Date().toLocaleTimeString();

  const [clock, setClock] = useState(time);

  const updateClock = () => {
    setClock(new Date().toLocaleTimeString());
  };
  setInterval(updateClock, 1000);

  return (
    <>
      <div className={styles.div}>
        <h1>{clock}</h1>
      </div>
    </>
  );
};
export default Project3;
