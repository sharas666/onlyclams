import React, { PureComponent } from 'react';

export default class TwitchPlayer extends PureComponent {
  render() {
    return (
      <div className="TwitchPlayer">
        <div class="iframe-container">
          <iframe
            title="twitch stream"
            src="https://player.twitch.tv/?channel=clammy&parent=onlyclams.vercel.app"
            frameborder="0"
            allowfullscreen="true"
            scrolling="no"
            height="378"
            width="620"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
}
