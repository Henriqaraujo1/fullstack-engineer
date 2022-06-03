import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const DivComments = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  margin: auto;

`;

export const IconComments = styled.div`
  width: 30%;
  margin-right: 10px;
  color: #54b3d6;

`;

export const SpanComments = styled.span`
    /* color: #000; */
    /* ${IconComments}:hover & {
        color: #fff;
    } */
`;

export const DivCommentsLink = styled(Link)`
  width: 15%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;  
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #54b3d6;
  border-radius: 25px;
    color: #54b3d6;
    margin: 0 -.25rem;
    padding: 0 .20rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

    &:hover {
        box-shadow: inset 110px 0 0 0 #54b3d6;
        color: #fff;
        ${IconComments} {
            color: #fff;
        }
    }
`;
