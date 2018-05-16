import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from './Tweet.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1 className="title">DON'T PANIC</h1>
          <Tweet/>
        </header>

        <section>
          <h1>Douglas Adams Tweet Generator</h1>
          <blockquote className="flt-right">
         In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
          </blockquote>
          <p>
            Born in England in 1952, Douglas Adams became one of the top science fiction humorists in the world. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>


        </section>
      </div>
    );
  }
}

export default App;
