import styled from "styled-components";


function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] = randomRgbColor();
 
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
 
    return "#" + hr + hg + hb;
}

export const DivComment = styled.div`
  width: 100%;
  border: 1px solid black;
  box-shadow: rgba(240, 46, 170, 0.4) 0px 3px, rgba(240, 46, 170, 0.3) 0px 6px,
    rgba(240, 46, 170, 0.2) 0px 9px, rgba(240, 46, 170, 0.1) 0px 12px,
    rgba(240, 46, 170, 0.05) 0px 15px;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const DivAvatar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;
export const AvatarAuthor = styled.img`
  width: 10%;
  border-radius: 100%;
  background-color: ${randomHexColor()};
`;
export const NameAuthor = styled.h5`
  display: flex;
  align-items: center;
`;
export const CommentAuthor = styled.p``;
