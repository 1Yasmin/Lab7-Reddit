import * as types from '../types';

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

export const updateDownvote = karma => ({
    type: types.DOWNVOTE_UPDATED,
    payload: {
        karma,
    }
});

export const updateUpvote = karma => ({
    type: types.UPVOTE_UPDATED,
    payload: {
        karma,
    }
});

export const editPost = (
    id,
    text,
) => ({
    type: types.COMMENT_ADDED,
    payload: {
        id,
        text,
    }
});