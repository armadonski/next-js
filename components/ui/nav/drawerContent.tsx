import styles from "../../../styles/Drawer.module.css";
import NavButton from "../navButton";

export default function DrawerContent(props) {
  return (
    <div className={styles.drawer}>
      {props.buttons.map((item, key) => (
        <div key={key} className={styles.drawerItem}>
          <NavButton
            key={key}
            number={`0${key + 1}`}
            goTo={() => props.goTo(key)}
            closeDrawer={props.closeDrawer}
          >
            {item}
          </NavButton>
        </div>
      ))}
      <NavButton border link="/resume.pdf" closeDrawer={props.closeDrawer}>
        <div style={{ textAlign: "center" }}>Resume</div>
      </NavButton>
    </div>
  );
}
