import React, { Component } from 'react';
import Comments from './components/comments/Comments.js';


//Основной скрипт
class App extends Component {
  render() {
    return (
      <div className="app">
          <Comments />
      </div>
    );
  }
}

export default App;
