import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
  DivHome,
  DivOrgTitle,
  DivImg,
  IconGroup,
  TitleHome,
  DivLoadingPage
} from "./HomeStyle";
import { BarLoader } from "react-spinners";
import IconPage from "../../utils/images/iconpage.ico";
import Post from "../../components/Post/Post";
import {
  fetchPosts,
  selectFilteredPosts,
  fetchComments,
} from '../../store/redditSlice'

export default function Home() {
  const reddit = useSelector((state) => state.reddit);
  const {isLoading, error,selectedSubreddit} = reddit;
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

  if(isLoading) {
    return (
      <DivLoadingPage>
        <BarLoader size={15} speedMultiplier={1} color={"#EF0107"} width={1000} height={6} />
      </DivLoadingPage>
    )
  }


  if (error) {
    return (
      <>
        <h2> Failed to load Post. Sorry</h2>
      <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit))} />
      </>
      
    )
  }

  return (
    <DivHome>
      <DivOrgTitle>
        <DivImg>
          <IconGroup src={IconPage} alt="icon title"/>
        </DivImg>
        <TitleHome>The Office Reddit</TitleHome>
      </DivOrgTitle>      
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
