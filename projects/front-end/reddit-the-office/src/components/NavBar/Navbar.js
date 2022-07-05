import React from "react";
import {
  DivLogo,
  DivNavBar,
  ImgLogo,
  Nav,
  NavBarLink,
  TitlePage,
} from "./NavbarStyle";
import Logo from "../../utils/images/mike.png";

const NavBar = () => {
  return (
    <DivNavBar>
        <NavBarLink to="/">
            <ImgLogo src={Logo} />
            <TitlePage>Reddit The Office</TitlePage>
          
        </NavBarLink>
        {/* <Search /> */}
    </DivNavBar>
  );
};

export default NavBar;
