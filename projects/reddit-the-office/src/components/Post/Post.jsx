import React from "react";
import CommentsButton from "../CommentsButton/CommentsButton";
import UpDown from "../Up-Down/UpDown";
import {
  DivArticle,
  DivTop,
  FigCaptionAuthor,
  FigureArticle,
  ImgArticle,
  SpanAuthor,
  TitleArticle,
} from "./PostStyle";

export default function Post(props) {
  const { post, onToggleComments} = props;
  return (
    <DivArticle key={post.id}>
      
      <DivTop>
        <UpDown post={post}/>
        <TitleArticle>{post.title}</TitleArticle>
      </DivTop>
      <FigureArticle>
        <ImgArticle src={post.url}></ImgArticle>
        <FigCaptionAuthor>Post By <SpanAuthor>{post.author}</SpanAuthor></FigCaptionAuthor>
      </FigureArticle>
      <CommentsButton post={post.num_comments}/>
    </DivArticle>
  );
}
