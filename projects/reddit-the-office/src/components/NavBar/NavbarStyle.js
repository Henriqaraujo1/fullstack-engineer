import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const DivNavBar = styled.div`
  height: max-content;
  border: 1px solid black;
  /* padding: 10px; */
  display: flex;
  background-color: rgba(213, 145, 255, 0.8);
`;


export const ImgLogo = styled.img`
  width: 20%;
  border-radius: 100%;
  background-color: #000;
`;
export const TitlePage = styled.span`
  font-size: 1.2rem;
`;
export const NavBarLink = styled(Link)`
  width: 20%;
  height: 50%;
  padding: 10px;
  display: flex;
  margin: auto;
  /* justify-content: flex-start; */
  align-items: center;
  text-decoration: none;
  font-style: italic;
  color: black;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 60%;
  }
`;
