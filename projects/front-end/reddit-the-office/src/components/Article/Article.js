import React from "react";
import {
  DivArticle,
  DivTop,
  FigCaptionAuthor,
  FigureArticle,
  ImgArticle,
  TitleArticle,
} from "./ArticleStyle";

export default function Article() {
  return (
    <DivArticle>
      <DivTop>
        {/* <UpDown /> */}
        <TitleArticle></TitleArticle>
      </DivTop>
      <FigureArticle>
        <ImgArticle></ImgArticle>
        <FigCaptionAuthor></FigCaptionAuthor>
      </FigureArticle>
      {/* <Comments /> */}
    </DivArticle>
  );
}
