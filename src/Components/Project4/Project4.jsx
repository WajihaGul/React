import { useState } from "react";
import styles from "./Project4.module.css";

const Project4 = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();

  const fixName = (event) => {
    setName(event.target.value);
  };

  const appearName = () => {
    setFullName(name);
  };
  return (
    <div className={styles.divv}>
      <h1 className={styles.head1}>Hello {fullName}</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter your name here"
        value={name}
        onChange={fixName}
      />
      <button className={styles.button} onClick={appearName}>
        Click Me
      </button>
    </div>
  );
};

export default Project4;
