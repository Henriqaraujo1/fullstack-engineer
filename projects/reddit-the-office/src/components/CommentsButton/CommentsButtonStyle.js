import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Comments = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
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

export const DivCommentsLink = styled.div`
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
        cursor: pointer;
        ${IconComments} {
            color: #fff;
        }
    }
`;

export const DivComments = styled.div`
    width: 100%;
    display: ${({open}) => (open ? "flex" : "none")};
    border: 1px solid black;
`;
export const DivCommentAuthor = styled.div``;
export const IconAuthor = styled.div`
    width: 10%;
    border: 1px solid darkblue;
`;
export const AuthorName = styled.h4``;
export const CommentsAuthor = styled.p``;

