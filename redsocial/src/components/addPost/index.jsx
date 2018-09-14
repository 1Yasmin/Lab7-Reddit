import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {v4} from 'uuid';

import './addPost.css'

const AddPost =({
  onSubmit,
}) => (
  <form onSubmit={(event)=>{
        onSubmit(this.text.value);
        this.text.value = "";
        event.preventDefault();
    }} className = 'add_form'>
        <input className="text" ref={node => this.text = node} placeholder="Contenido del Post"  />
        <input className="add_p" type="submit" value="Publicar" />
    </form>
)


export default connect(
    undefined,
    dispatch => ({
        onSubmit: (text) => {
            const id = v4();
            dispatch(actions.editPost(id, text));
        },
    }),
  )(AddPost);