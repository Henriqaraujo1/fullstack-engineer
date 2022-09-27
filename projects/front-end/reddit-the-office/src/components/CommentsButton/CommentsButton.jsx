import React from "react";
import {
  AvatarAuthor,
  CommentAuthor,
  DivAvatar,
  DivComment,
  NameAuthor
} from "./CommentsButtonStyle";

export default function CommentsButton(props) {
  const { comment } = props;
  const types = [ 
    "adventurer",
    "avataaars",
    "croodles",
    "micah",
    "open-peeps",
  ]
  const avatar = types[Math.floor(Math.random() * types.length)]


  return (
    <DivComment>
      {console.log(comment.length)}
      <DivAvatar>
      <AvatarAuthor src={`https://avatars.dicebear.com/api/${avatar}/${comment.author}.svg`} />
      <NameAuthor>{comment.author}</NameAuthor>
      </DivAvatar>
      <CommentAuthor>{comment.body}</CommentAuthor>
    </DivComment>
  );
}
