// import { Comment } from "@styled-icons/material";
import { Comment } from "@styled-icons/material";
import React from "react";
import {
  DivComments,
  DivCommentsLink,
  IconComments,
  SpanComments,
} from "./CommentsButtonStyle";

export default function CommentsButton() {
  return (
    <DivComments>
      <DivCommentsLink to="/post">
        <IconComments><Comment /></IconComments>
        <SpanComments>Comments</SpanComments>
      </DivCommentsLink>
    </DivComments>
  );
}
