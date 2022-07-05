import { ThumbDown, ThumbUp } from "@styled-icons/material";
import React, {useState} from "react";
import {
  CountLike,
  DivUpDown,
  IconDown,
  IconUp,
  SpanNumber,
} from "./UpDownStyle";

export default function UpDown(props) {
  const { post } = props;
  const [up, setUp] = useState(post.ups)

  const incrementUp = () => {
      setUp(up + 1)    
  }
  const decrementUp = () => {
    setUp(up - 1)
  }

  return (
    <DivUpDown>
      <IconUp onClick={incrementUp}>
        <ThumbUp />
      </IconUp>
      <CountLike>
        <SpanNumber>{up}</SpanNumber>
      </CountLike>
      <IconDown onClick={decrementUp}>
        <ThumbDown />
      </IconDown>
    </DivUpDown>
  );
}
