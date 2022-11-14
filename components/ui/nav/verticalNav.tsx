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
        <NavButton link="https://www.linkedin.com/in/armando-gavrila-074530116/">
          <LinkedInIcon />
        </NavButton>
      </div>
    </NavbarContainer>
  );
}
