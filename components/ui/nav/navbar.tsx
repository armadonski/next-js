import NavbarContainer from "../../hoc/navbarContainer";
import Logo from "./logo";
import HorizontalNav from "./horizontalNav";
import Drawer from "./drawer";

export default function Navbar(props) {
  return (
    <NavbarContainer>
      <Logo />
      <HorizontalNav buttons={props.buttons} goTo={props.goTo} />
      <Drawer open buttons={props.buttons} goTo={props.goTo} />
    </NavbarContainer>
  );
}
