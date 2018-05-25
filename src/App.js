import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet.js'
import './Tweet.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">DON'T PANIC</h1>

          <Tweet/>
        </header>

        <section>
          <h1>Douglas Adams Tweet Generator</h1>
          <blockquote className="flt-right">
         In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
          </blockquote>
          <p>
            Born in England in 1952, Douglas Adams is one of the great humorists of the twentieth century. His unique style and wit has garnered the admiration of people the world over. 
          </p>

          <p>
          This generator uses Adam's Hitchhiker's Guide to the Galaxy series as a corpus to generate sentences from. The text is structured as a second order Markov chain which allows the computer to generate random sentences that seem to carry some grammatical structure. This is due to the fact that Markov chains preserve the order that words appear in. 
          </p>
          <p>
            Currently this generator does not save starting and ending tokens. This feature however is coming in the near future. Also planned for the near future is to compare this algorithm with a skip-gram neural network to see which does a better job. 
          </p>
        </section>
      </div>
    );
  }
}

export default App;
