import React, { Component } from "react";
import Markdown from "react-markdown";
import "./App.css";

import content from './content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Vladimir Chervanev</h1>
        </header>
        <Markdown source={content.main} />
      </div>
    );
  }
}

export default App;
