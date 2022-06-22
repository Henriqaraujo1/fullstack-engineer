import styled from "styled-components";

export const DivLoading = styled.div`
    display: flex;
    justify-content:center;
    padding: 10px;    
`

export const DivArticle = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const TitleArticle = styled.h2`
  margin-left: 15px;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const FigureArticle = styled.figure`
  width: 70%;
  margin: auto;
  /* height: 100%; */
`;
export const ImgArticle = styled.img`
  width: 100%;
  border-radius: 25px;
`;
export const FigCaptionAuthor = styled.figcaption`
  font-size: 0.9rem;
`;
export const SpanAuthor = styled.span`
  font-style: italic;
  font-size: 1rem;
  color: #fc3928;
`;
export const DivBtnComment = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const IconComments = styled.div`
  width: 15px;
  margin-right: 10px;
  color: #54b3d6;
`;

export const BtnComment = styled.button`
  height: 30px;
  border: 0 solid transparent;
  background-color: transparent;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #54b3d6;
  border-radius: 25px;
  color: #54b3d6;
  /* margin: 0 -0.25rem; */
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 150px 0 0 0 #54b3d6;
    color: #fff;
    cursor: pointer;
    ${IconComments} {
      color: #fff;
    }
  }
`;
