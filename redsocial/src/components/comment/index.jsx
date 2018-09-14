import React from 'react';
import { connect } from 'react-redux';
import './comment.css';
import * as selectores from '../../reducers';

const comment = ({
    text
}) => (
    <div className="comment">
        <p> { text } </p>
    </div>
);

export default connect(
    (state, { id }) => ({
        ...selectores.getComment(state, id),
    }),
    undefined,
)(comment);