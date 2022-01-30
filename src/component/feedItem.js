import React, { PureComponent } from 'react';
import './feedItem.css';

export default class FeedItem extends PureComponent {
  render() {
    return <div className="FeedItem">{this.props.item}</div>;
  }
}
