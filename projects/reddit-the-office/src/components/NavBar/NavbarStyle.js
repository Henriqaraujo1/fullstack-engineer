import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const DivNavBar = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  background-color: rgba(213, 145, 255, 0.8);
`;

export const ImgLogo = styled.img`
  width: 25%;
  border-radius: 100%;
  background-color: #000;
  margin-right: 5px;
`;
export const TitlePage = styled.span`
  font-size: 1.2em;
  /* text-align: center; */
`;
export const NavBarLink = styled(Link)`
  width: 15%;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  font-style: italic;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
