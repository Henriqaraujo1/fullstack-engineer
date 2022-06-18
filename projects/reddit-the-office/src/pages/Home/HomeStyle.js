import styled from "styled-components";

export const DivHome = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin: 5px auto;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 90%;
    }
`;  
export const DivOrgTitle = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    justify-content: flex-start;
    margin-bottom: 10px;
    align-items: center;
`;

export const DivImg = styled.div`
    width: 25%;
    padding: 10px;
`

export const IconGroup = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #000;
`;
export const TitleHome = styled.h1`
  font-size: 2rem;
`;