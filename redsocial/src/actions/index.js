import * as types from '../Types';

export const addNewComment = (
    id_post,
    id,
    text,
) => ({
    type: types.COMMENT_ADDED,
    payload: {
        id_post,
        id,
        text,
    }
});

export const updateDownvote = (id) => ({
    type: types.DOWNVOTE_UPDATED,
    payload: {
      id,  
    }
});

export const updateUpvote = (id) => ({
    type: types.UPVOTE_UPDATED,
    payload: {
      id,  
    }
});

export const editPost = (
    id,
    text
) => ({
    type: types.POST_EDITED,
    payload: {
        id,
        text,
    }
});