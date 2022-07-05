import React from "react";
import { DivHome, DivOrgTitle, IconGroup, TitleHome } from "./HomeStyle";

export default function Home() {
  console.log('teste')
  return (
    <DivHome>
      <DivOrgTitle>
        <IconGroup></IconGroup>
        <TitleHome></TitleHome>
      </DivOrgTitle>
    </DivHome>
  );
}
