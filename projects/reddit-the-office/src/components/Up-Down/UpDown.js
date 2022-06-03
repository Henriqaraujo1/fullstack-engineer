import { ThumbDown, ThumbUp } from "@styled-icons/material";
import React from "react";
import {
  CountLike,
  DivUpDown,
  IconDown,
  IconUp,
  SpanNumber,
} from "./UpDownStyle";

export default function UpDown() {
  return (
    <DivUpDown>
      <IconUp>
        <ThumbUp />
      </IconUp>
      <CountLike>
        <SpanNumber>35K</SpanNumber>
      </CountLike>
      <IconDown>
        <ThumbDown />
      </IconDown>
    </DivUpDown>
  );
}
