import styles from "../../../styles/Content.module.css";
import { animated, useSpring } from "react-spring";
import ContentItems from "./contentItems";

export default function Content(props) {
  const navStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: Math.floor(Math.random() * 1000),
  });

  return (
    <animated.div className={styles.content} style={navStyle}>
      <div className={styles.title}>
        <h1>
          <span className="coloredText">0{props.number}</span>. {props.title}
        </h1>
        <div className={`${styles.horizontalLine} lineColor`}></div>
      </div>
      {props.children}
      {props.items ? <ContentItems items={props.items} /> : null}
    </animated.div>
  );
}
