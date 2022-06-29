import React, { useState, useEffect } from "react";
import { Close, Search } from "@styled-icons/material";
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
  const [show, setShow] = useState(false)

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

  const onSearchBlank = () => {
    setSearchTermLocal(searchTermLocal)
  }

  return (
    <DivSearch>
      <FormSearch>
        <LabelSearch>
          
          <InputSearch
            value={searchTermLocal}
            onChange={onSearchTermChange}
            onSubmit={onSearchTermSubmit}
            
            onClick={() => {
              setShow(!show)
            }}
          />
          <SpanSearch onClick={onSearchTermSubmit}>
            <Search />
          </SpanSearch>
          <BtnSearch onClick={onSearchBlank} show={show}>
            <Close />
          </BtnSearch>
          
          
        </LabelSearch>
      </FormSearch>
    </DivSearch>
  );
}
