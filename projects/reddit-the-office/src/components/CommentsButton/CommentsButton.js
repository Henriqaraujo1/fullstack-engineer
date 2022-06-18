// import { Comment } from "@styled-icons/material";
import { Comment } from "@styled-icons/material";
import React, { useState } from "react";
import {
  Comments,
  DivCommentsLink,
  IconComments,
  SpanComments,
  AuthorName,
  DivComments,
  DivCommentAuthor,
  IconAuthor,
  CommentsAuthor
} from "./CommentsButtonStyle";

export default function CommentsButton() {
  const [open, setOpen] = useState(false)
  return (
    <Comments>
      <DivCommentsLink onClick={() => {
        setOpen(!open)
      }}>
        <IconComments><Comment /></IconComments>
        <SpanComments>Comments</SpanComments>
      </DivCommentsLink>
      <DivComments open={open}>
      <DivCommentAuthor>
        <IconAuthor></IconAuthor>
        <AuthorName></AuthorName>
        <CommentsAuthor></CommentsAuthor>
      </DivCommentAuthor>
      </DivComments>
    </Comments>
  );
}
