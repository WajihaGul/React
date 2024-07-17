import styles from "./Project2.module.css";
import React, { useState } from "react";

const Project2 = () => {
  const time = new Date().toUTCString();
  const [timeNow, setTime] = useState(time);

  const CurTime = () => {
    const newtime = new Date().toUTCString();
    setTime(newtime);
  };
  return (
    <>
      <h1>{timeNow}</h1>
      <button className={styles.btn} onClick={CurTime}>
        Current Time
      </button>
    </>
  );
};
export default Project2;
