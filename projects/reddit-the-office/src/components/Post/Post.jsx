import { Comment } from "@styled-icons/material";
import PropagateLoader from "react-spinners/PropagateLoader";
import React, { useState } from "react";
import CommentsButton from "../CommentsButton/CommentsButton";
import UpDown from "../Up-Down/UpDown";
import {
  BtnComment,
  DivArticle,
  DivBtnComment,
  DivLoading,
  DivTop,
  FigCaptionAuthor,
  FigureArticle,
  IconComments,
  ImgArticle,
  SpanAuthor,
  TitleArticle,
} from "./PostStyle";

export default function Post(props) {
  const [loading, setLoading] = useState(true);
  const { post, onToggleComments } = props;

  const renderComment = () => {
    if (post.errorComments) {
      return (
        <div>
          <p>Error Loading comments</p>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <DivLoading>
          <PropagateLoader size={15} speedMultiplier={1} />
        </DivLoading>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <CommentsButton comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  };

  return (
    <DivArticle key={post.id}>
      <DivTop>
        <UpDown post={post} />
        {/* <AvatarAuthor src={`https://avatars.dicebear.com/api/adventurer/${post.author}`} /> */}
        <TitleArticle>{post.title}</TitleArticle>
      </DivTop>
      <FigureArticle>
        <ImgArticle src={post.url}></ImgArticle>
        <FigCaptionAuthor>
          Post By <SpanAuthor>{post.author}</SpanAuthor>
        </FigCaptionAuthor>
      </FigureArticle>
      <DivBtnComment>
        <BtnComment
          onClick={() => {
            onToggleComments(post.permalink);
            setLoading(!loading);
          }}
        >
          <IconComments>
            <Comment />
          </IconComments>
          Comments {post.num_comments}
        </BtnComment>
      </DivBtnComment>
      {renderComment()}
    </DivArticle>
  );
}
