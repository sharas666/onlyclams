import './App.css';
import React, { PureComponent } from 'react';
import Nav from './nav.js';
import Feed from './feed';
import Footer from './footer';
export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <div className="Content">
          <div className="PageNav">
            <Nav />
          </div>
          <div className="PageFeed">
            <Feed />
          </div>
          <div className="PageFooter">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
