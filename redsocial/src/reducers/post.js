import { combineReducers } from 'redux';

import * as types from '../Types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.POST_EDITED:
            {
                const { id, text } = action.payload;
                const comments = [];
                return {
                    ...state,
                    [id]: {
                        id,
                        text,
                        comments,
                        karma: 0,
                    }
                };
            }
         case types.COMMENT_ADDED: {
            const {id_post, id} = action.payload;
            const post = state[id_post];
            const comments = post.comments;
            return {
                ...state,
                [id_post]: {
                    ...post,
                    comments: [
                        ...comments,
                        id
                    ]
                }
            };
        }
      case types.UPVOTE_UPDATED:{
        const {id} = action.payload;
        const post = state[id];
        const karma = post.karma;
        return{
          ...state,
          [id]:{
            ...post,
            karma: post.karma +1,
          }
        }
        
      }
       case types.DOWNVOTE_UPDATED:{
        const {id} = action.payload;
        const post = state[id];
        const karma = post.karma;
        return{
          ...state,
          [id]:{
            ...post,
            karma: post.karma - 1,
          }
        }
        
      }
        default:
            {
                return state;
            }
    }
}

const order = (state = [], action) => {
    switch (action.type) {
      case types.POST_EDITED:
            {
                return [
                    ...state,
                    action.payload.id
                ];
            }

        default:
            {
                return state;
            }
    }
}


//Selectors
export const getPost = (state, id) => state.byId[id];
export const getPosts = (state) => state.order.map(
    id => getPost(state, id),
);
export const getCommentIdsFromPost = (state, id) => state.byId[id].comments;



//combine reducer 

const post_reducer = combineReducers({ byId, order });

export default post_reducer;