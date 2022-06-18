import { ThumbDown, ThumbUp } from "@styled-icons/material";
import React from "react";
import {
  CountLike,
  DivUpDown,
  IconDown,
  IconUp,
  SpanNumber,
} from "./UpDownStyle";

export default function UpDown(props) {
  const { post } = props
  return (
    <DivUpDown>
      <IconUp>
        <ThumbUp />
      </IconUp>
      <CountLike>
        <SpanNumber>{post.ups}</SpanNumber>
      </CountLike>
      <IconDown>
        <ThumbDown />
      </IconDown>
    </DivUpDown>
  );
}
