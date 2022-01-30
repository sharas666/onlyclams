import React, { PureComponent } from 'react';
import './footer.css';

export default class Footer extends PureComponent {
  handleClick = () => {
    window.open('https://twitch.tv/Clammy/subscribe');
  };
  render() {
    return (
      <div className="Footer">
        <div className="FooterLabel">Subscription</div>
        <button className="FooterButton" onClick={this.handleClick}>
          Subscribe
        </button>
      </div>
    );
  }
}
