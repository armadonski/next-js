import styles from "../../../styles/Content.module.css";
import { animated, useSpring } from "react-spring";

export default function Content(props) {
  const navStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: Math.floor(Math.random() * 1000),
  });

  return (
    <animated.div style={navStyle}>
      <div className={styles.title}>
        <h1>
          <span className="coloredText">0{props.number}</span>. {props.title}
        </h1>
        <div className={`${styles.horizontalLine} lineColor`}></div>
      </div>
      {props.children}
    </animated.div>
  );
}
