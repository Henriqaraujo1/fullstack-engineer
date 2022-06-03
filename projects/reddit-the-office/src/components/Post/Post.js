import React from "react";
import CommentsButton from "../CommentsButton/CommentsButton";
import UpDown from "../Up-Down/UpDown";
import {
  DivArticle,
  DivTop,
  FigCaptionAuthor,
  FigureArticle,
  ImgArticle,
  TitleArticle,
} from "./PostStyle";

export default function Post() {
  return (
    <DivArticle>
      <DivTop>
        <UpDown />
        <TitleArticle>Post 1</TitleArticle>
      </DivTop>
      <FigureArticle>
        <ImgArticle></ImgArticle>
        <FigCaptionAuthor>Post By Author</FigCaptionAuthor>
      </FigureArticle>
      <CommentsButton />
    </DivArticle>
  );
}
