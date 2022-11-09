import NavButton from "../navButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../../styles/Drawer.module.css";
import { useState } from "react";
import DrawerContent from "./drawerContent";

export default function Drawer(props) {
  const [open, setOpen] = useState(false);

  const openDrawerHandler = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <div className={styles.drawer}>
      <div className={styles.drawerButton}>
        <NavButton border goTo={openDrawerHandler}>
          <MenuIcon />
        </NavButton>
      </div>
      {open ? (
        <DrawerContent
          buttons={props.buttons}
          goTo={props.goTo}
          closeDrawer={openDrawerHandler}
        />
      ) : null}
    </div>
  );
}
