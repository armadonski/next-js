import NavbarContainer from "../../hoc/navbarContainer";
import NavButton from "../navButton";
import Logo from "./logo";
import styles from "../../../styles/Navbar.module.css";

export default function Navbar(props) {
  return (
    <NavbarContainer>
      <Logo />
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
    </NavbarContainer>
  );
}
