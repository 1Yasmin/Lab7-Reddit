import React from 'react';
import AddPost from '../addPost';
import Tablero from '../tablero';

import './App.css';

const App = () => {
    return (
        <div className="app">
          <AddPost/>
          <Tablero/>
        </div>
    );
}

export default App;