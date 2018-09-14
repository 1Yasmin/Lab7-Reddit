import { combineReducers } from 'redux';
import post, * as fromPost from './post'
import comment, * as fromComment from './comment'

const reducer = combineReducers({ post, comment});

export default reducer;

export const getPost = (state, id) => fromPost.getPost(state.post, id);
export const getPosts = (state) => fromPost.getPosts(state.post);
export const getCommentIdsFromPost = (state, id) => fromPost.getCommentIdsFromPost(state.post, id);

export const getComment = (state, id) => fromComment.getComment(state.comment, id);
export const getComments = (state) => fromComment.getComments(state.comment);

// combine
export const getCommentsOfPost = (state, id) => {
    // get all comments
    const comments = getComments(state);
    // filter
    return comments.filter( comment => getCommentIdsFromPost(state, id).includes(comment.id) );
}