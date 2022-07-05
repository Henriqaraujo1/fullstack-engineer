import React from "react";
import {
  AuthorName,
  DivCommentAuthor,
  DivComments,
  DivCommentsArticle,
  IconAuthor,
  IconComments,
  SpanComments,
} from "./CommentsStyle";

export default function Comments() {
  return (
    <>
      <DivComments>
        <IconComments></IconComments>
        <SpanComments></SpanComments>
      </DivComments>
      <DivCommentsArticle>
        <DivCommentAuthor>
          <IconAuthor></IconAuthor>
          <AuthorName></AuthorName>
          <Comments></Comments>
        </DivCommentAuthor>
      </DivCommentsArticle>
    </>
  );
}
