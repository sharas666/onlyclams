import React, { PureComponent } from 'react';
import './navButton.js';
import NavButton from './navButton.js';
import './nav.css';

export default class Nav extends PureComponent {
  render() {
    return (
      <div className="Nav">
        <NavButton title="Twitch" link="https://www.twitch.tv/clammy" />
        <NavButton title="Twitter" link="https://twitter.com/ImClammy" />
        <NavButton title="Discord" link="https://discord.com/invite/UHnEDFX" />
      </div>
    );
  }
}
