import React from "react";
import {
  AuthorName,
  DivCommentAuthor,
  DivCommentsArticle,
  IconAuthor,
  CommentsAuthor
} from "./CommentsPageStyle";

export default function CommentsPage() {
  return (
    <DivCommentsArticle>
      <DivCommentAuthor>
        <IconAuthor></IconAuthor>
        <AuthorName></AuthorName>
        <CommentsAuthor></CommentsAuthor>
      </DivCommentAuthor>
    </DivCommentsArticle>
  );
}
