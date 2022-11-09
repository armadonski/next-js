import NavbarContainer from "../../hoc/navbarContainer";
import NavButton from "../navButton";
import styles from "../../../styles/Navbar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function VerticalNav(props) {
  const navStyle = [styles.mainNav, styles.vertical];

  return (
    <NavbarContainer>
      <div className={navStyle.join(" ")}>
        <NavButton link="#">
          <LinkedInIcon />
        </NavButton>
        <NavButton link="#">
          <GitHubIcon />
        </NavButton>
        <NavButton link="#">
          <InstagramIcon />
        </NavButton>
      </div>
    </NavbarContainer>
  );
}
