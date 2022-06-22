import React from "react";
import {
  DivNavBar,
  ImgLogo,
  NavBarLink,
  TitlePage,
} from "./NavbarStyle";
import Logo from "../../utils/images/mike.png";
import SearchReddit from "../Search/Search";

const NavBar = () => {
  return (
    <DivNavBar>
        <NavBarLink to="/">
            <ImgLogo src={Logo} />
            <TitlePage>Reddit The Office</TitlePage>
        </NavBarLink>
        <SearchReddit />
    </DivNavBar>
  );
};

export default NavBar;
