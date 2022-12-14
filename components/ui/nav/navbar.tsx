import NavbarContainer from "../../hoc/navbarContainer";
import Logo from "../logo/logo";
import HorizontalNav from "./horizontalNav";
import Drawer from "./drawer";

export default function Navbar(props: { buttons: object; goTo: Function; }) {
  return (
    <NavbarContainer>
      <Logo />
      <Drawer open buttons={props.buttons} goTo={props.goTo} />
      <HorizontalNav buttons={props.buttons} goTo={props.goTo} />
    </NavbarContainer>
  );
}
