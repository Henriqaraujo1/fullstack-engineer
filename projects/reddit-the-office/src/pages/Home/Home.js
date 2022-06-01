import React from "react";
import {
  DivHome,
  DivOrgTitle,
  DivImg,
  IconGroup,
  TitleHome,
} from "./HomeStyle";
import IconPage from "../../utils/images/iconpage.ico";
import Article from "../../components/Article/Article";
export default function Home() {
  console.log("teste");
  return (
    <DivHome>
      <DivOrgTitle>
        <DivImg>
          <IconGroup src={IconPage} alt="icon title"/>
        </DivImg>
        <TitleHome>The office Reddit</TitleHome>
      </DivOrgTitle>
      <Article />
      <Article />
    </DivHome>
  );
}
