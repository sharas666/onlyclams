import React, { PureComponent } from 'react';
import './feed.css';
import FeedItem from './feedItem.js';
import ProfileBox from './profileBox';
import TwitchPlayer from './twitchPlayer.js';

export default class Feed extends PureComponent {
  render() {
    return (
      <div className="Feed">
        <FeedItem item={<ProfileBox />} />
        <FeedItem item={<TwitchPlayer />} />
      </div>
    );
  }
}
