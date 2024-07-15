import styles from "./Project1.module.css";

const cssStyle = {};
let greeting = "";
let time = new Date().getHours();
//time = time.getHours();

if (time >= 6 && time < 12) {
  greeting = "GOOD MORNING";
  cssStyle.color = "red";
} else if (time >= 12 && time < 18) {
  greeting = "GOOD AFTERNOON";
  cssStyle.color = "yellow";
} else {
  greeting = "GOOD NIGHT";
  cssStyle.color = "green";
}

const Project1 = () => {
  return (
    <>
      <div className={styles.divhead}>
        <h1>
          Hello, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};
export default Project1;
