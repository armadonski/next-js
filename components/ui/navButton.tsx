import { animated, useSpring } from "react-spring";
import styles from "../../styles/Button.module.css";

export default function NavButton(props) {
  const buttonStyles = [styles.button, props.border ? styles.border : null];
  const navStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: Math.floor(Math.random() * 500),
  });

  const onClickHandler = () => {
    props.goTo();
    if (props.closeDrawer) {
      props.closeDrawer();
    }
  };

  return (
    <animated.a
      style={navStyle}
      onClick={onClickHandler}
      className={buttonStyles.join(" ")}
      href={props.link}
    >
      {props.number ? (
        <span className={styles.textColored}>{props.number}.</span>
      ) : null}
      {props.children}
    </animated.a>
  );
}
