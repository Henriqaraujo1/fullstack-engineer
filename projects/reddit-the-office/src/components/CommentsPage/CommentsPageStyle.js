import styled from 'styled-components';


export const DivCommentsArticle = styled.div`
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
