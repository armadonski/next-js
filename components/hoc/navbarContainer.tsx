import styles from "../../styles/NavbarContainer.module.css";

export default function NavbarContainer(props) {
  return <div className={styles.navbarContainer}>{props.children}</div>;
}
