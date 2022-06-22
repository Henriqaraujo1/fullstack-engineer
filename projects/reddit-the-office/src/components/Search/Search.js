import React, { useState, useEffect } from "react";
import { Search } from "@styled-icons/material";
import {
  DivSearch,
  InputSearch,
  LabelSearch,
  SpanSearch,
  FormSearch,
  BtnSearch,
} from "./SearchStyle";

import { setSearchTerm } from "../../store/redditSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function SearchReddit() {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [dispatch, searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <DivSearch>
      <FormSearch>
        <LabelSearch>
          <SpanSearch>
            <Search />
          </SpanSearch>
          <InputSearch
            type="search"
            value={searchTermLocal}
            onChange={onSearchTermChange}           
            // onSubmit={onSearchTermSubmit}  
          />
        </LabelSearch>
        <BtnSearch onClick={onSearchTermSubmit} />
      </FormSearch>
    </DivSearch>
  );
}
