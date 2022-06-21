import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
  DivHome,
  DivOrgTitle,
  DivImg,
  IconGroup,
  TitleHome,
} from "./HomeStyle";
import IconPage from "../../utils/images/iconpage.ico";
import Post from "../../components/Post/Post";
import {
  fetchPosts,
  selectFilteredPosts,
  fetchComments,
} from '../../store/redditSlice'

export default function Home() {
  const reddit = useSelector((state) => state.reddit);
  const {selectedSubreddit} = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  function onToggleComments(index) {
    const getComments = (permaLink) => {
      dispatch(fetchComments(index, permaLink));
    };

    return getComments;
  }

  return (
    <DivHome>
      <DivOrgTitle>
        <DivImg>
          <IconGroup src={IconPage} alt="icon title"/>
        </DivImg>
        <TitleHome>The office Reddit</TitleHome>
      </DivOrgTitle>
      {console.log(posts)}
      {posts.map((post, index) => (
        <Post 
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </DivHome>
  );
}
