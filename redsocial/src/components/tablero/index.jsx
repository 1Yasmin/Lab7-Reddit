import React from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../reducers';

import Post from '../post';


const Tablero = ({
    posts
}) => (
    <ul>
        {
            posts.map(
                ({ id }) => <Post key={id} id={id} />
            )
        }
    </ul>
);

export default connect(
    state => ({
        posts: selectores.getPosts(state),
    }), 
    undefined,
)(Tablero);