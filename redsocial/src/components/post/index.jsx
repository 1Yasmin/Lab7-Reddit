import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as selectores from '../../reducers';
import * as actions from '../../actions';
import './post.css'

//import Comment from '../comment';
//import AddComment from '../addComment';

const Post = ({
    id,
    text,
    karma,
    commentList,
    onClickUp,
    onClickDown,
 }) => (
    <li className="post">
        <div className="points">
            <button className="upvote" onClick={onClickUp}>Upvote</button>
            <button className="downvote" onClick={onClickDown}>Downvote</button>
            <p className="karma"> karma: { karma } </p>
        </div>
        <p className="content"> { text } </p>
    </li>
);


export default connect(
    (state, { id }) => ({
        ...state.post.byId[id],
        commentList: selectores.getCommentsOfPost(state, id),
    }),
    (dispatch, {id}) => ({
      onClickUp: () => dispatch(actions.updateUpvote(id)),
      onClickDown: () => dispatch(actions.updateDownvote(id)),      
    }),
)(Post);