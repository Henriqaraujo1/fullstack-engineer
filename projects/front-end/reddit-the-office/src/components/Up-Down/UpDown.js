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
      <IconUp></IconUp>
      <CountLike>
        <SpanNumber></SpanNumber>
      </CountLike>
      <IconDown></IconDown>
    </DivUpDown>
  );
}
