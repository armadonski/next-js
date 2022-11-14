import NavButton from "../navButton";
import styles from "../../../styles/ButtonList.module.css";

export default function contentButtons(props) {
  return (
    <div className={styles.buttons}>
      {props.buttons.map((item, key) => (
        <div key={key} className={styles.button}>
          <NavButton key={key} border link={item.link}>
            {item.display}
          </NavButton>
        </div>
      ))}
    </div>
  );
}
