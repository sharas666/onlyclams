import React, { PureComponent } from 'react';
import './navButton.css';

export default class NavButton extends PureComponent {
  handleClick = () => {
    window.open(this.props.link);
  };
  render() {
    return (
      <div class="wrapper">
        <button className="NavButton" onClick={this.handleClick}>
          <div className="ButtonText">{this.props.title}</div>
        </button>
      </div>
    );
  }
}
