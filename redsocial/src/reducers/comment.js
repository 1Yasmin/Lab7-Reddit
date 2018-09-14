import { combineReducers } from 'redux';

import * as types from '../Types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.COMMENT_ADDED:
            {
                const { id, text } = action.payload;
                return {
                    ...state,
                    [id]: {
                        id: id,
                        text,
                    }
                };
            }

        default:
            {
                return state;
            }
    }
}


const order = (state = [], action) => {
    switch (action.type) {
        case types.COMMENT_ADDED:
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

//combine reducer
const comment = combineReducers({ byId, order });
export default comment;

//selectores
export const getComment = (state, id) => state.byId[id];
export const getComments = (state) => state.order.map(
    id => getComment(state, id),
);
