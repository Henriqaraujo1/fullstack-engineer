import styled from "styled-components";

export const DivUpDown = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 15px;
`;
export const IconUp = styled.div`
  width: 100%;
  color: #5ec137;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(-4px);
  }
`;
export const CountLike = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-style: italic;
`;
export const SpanNumber = styled.span``;
export const IconDown = styled.div`
  width: 100%;
  color: #fd4d4b;
  background-color: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(4px);
  }
`;
