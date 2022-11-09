import NavButton from "../navButton";
import styles from "../../../styles/HorizontalNav.module.css";

export default function HorizontalNav(props) {
  return (
    <div className={styles.mainNav}>
      {props.buttons.map((item, key) => (
        <NavButton
          key={key}
          number={`0${key + 1}`}
          goTo={() => props.goTo(key)}
        >
          {item}
        </NavButton>
      ))}
      <NavButton border link="http://www.google.ro">
        <span>Resume</span>
      </NavButton>
    </div>
  );
}
