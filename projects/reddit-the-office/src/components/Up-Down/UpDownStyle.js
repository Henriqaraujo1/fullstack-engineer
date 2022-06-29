import styled from "styled-components";

export const DivUpDown = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IconUp = styled.button`
  width: 30px;
  color: #5ec137;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(-4px);
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;    
  }
`;
export const CountLike = styled.div`
  /* height: 25px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SpanNumber = styled.span`
    font-size: 1rem;
  font-style: italic;
`;
export const IconDown = styled.div`
  width: 30px;
  color: #fd4d4b;
  background-color: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(4px);
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;    
  }
`;
