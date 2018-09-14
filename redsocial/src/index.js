import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';
import * as actions from './actions';

const store = configureStore();

console.log(store.getState());
store.dispatch(actions.editPost("7", "Es el primer post."));
store.dispatch(actions.updateUpvote("7"));
store.dispatch(actions.updateUpvote("7"));
store.dispatch(actions.updateDownvote("7"));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();