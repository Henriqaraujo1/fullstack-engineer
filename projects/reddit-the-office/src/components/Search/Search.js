import React from "react";
import { Search } from "@styled-icons/material";
import {
  DivSearch,
  InputSearch,
  LabelSearch,
  SpanSearch,
  FormSearch,
} from "./SearchStyle";

export default function SearchReddit() {
  return (
    <DivSearch>
      <FormSearch>
        <LabelSearch>
          <SpanSearch>
            <Search />
          </SpanSearch>
          <InputSearch type="search" />
        </LabelSearch>
      </FormSearch>
    </DivSearch>
  );
}
