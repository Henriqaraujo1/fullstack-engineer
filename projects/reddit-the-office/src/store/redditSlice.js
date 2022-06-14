import {createSlice, createSelector} from '@reduxjs/toolkit';
import { getDataReddit } from '../api/Api';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
};

const redditSlice = createSlice({
    name: 'redditPost',
    initialState,
    reducers: {
        setPost(state, action) {
            state.posts = action.payload;
        },
        startGetPost(state){
            state.isLoading = true;
            state.error = false;
        },
        getPostSuccess(state,action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
                .showingComments;
        },
        startGetComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
                .showingComments;
            if(!state.posts[action.payload].showingComments) {
                return
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        }
    }
});

export const {
    setPost,
    startGetPost,
    getPostFailed,
    getPostSuccess,
    setSearchTerm,
    toggleShowingComments,
    getCommentsFailed,
    getCommentsSuccess
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPost());
        const posts = await getDataReddit(subreddit);

        const postWithMetaData = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,                        
        }));
        dispatch(getPostSuccess(postWithMetaData));
    } catch(error) {
        dispatch(getPostFailed());
    }
};

export const fetchComments = (index, permaLink) => async (dispatch) => {
    try{
        dispatch(startGetComments(index));
        const comments = await getPostComments(permaLink);
        dispatch(getCommentsSuccess({index, comments}));
    } catch(erorr) {
        dispatch(getCommentsFailed(index));
    }
};

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm( state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) => {
    state.reddit.selectSubreddit;
}

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if(searchTerm !== ''){
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
                

    return posts;
    }
);