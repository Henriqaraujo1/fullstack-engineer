import styled from "styled-components";

export const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* margin-left: 15px; */
`;
export const LabelSearch = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormSearch = styled.form``;

export const SpanSearch = styled.button`
  width: 40px;
  border: 0.5 solid #000;
  border-radius: 100%;
  margin-left: 5px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(4px);
  }
`;

export const BtnSearch = styled.button`
  position: relative;
  left: -60px;
  width: 10%;
  border-radius: 100%;
  border: none;
  background-color: transparent;
  display: ${({ show }) => (show ? "flex" : "none")};
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(4px);
  }
`;

export const InputSearch = styled.input`
  height: 35px;
  width: 100%;
  font-size: 1rem;
  padding: 10px;
  border-radius: 25px;
  border: 0.5px solid #000;
`;
