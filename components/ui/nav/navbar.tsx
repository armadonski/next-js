import NavbarContainer from "../../hoc/navbarContainer";
import Logo from "./logo";
import HorizontalNav from "./horizontalNav";
import Drawer from "./drawer";

export default function Navbar(props) {
  return (
    <NavbarContainer>
      <Logo />
      <Drawer open buttons={props.buttons} goTo={props.goTo} />
      <HorizontalNav buttons={props.buttons} goTo={props.goTo} />
    </NavbarContainer>
  );
}
