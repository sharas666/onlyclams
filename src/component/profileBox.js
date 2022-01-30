import React, { PureComponent } from 'react';
import profile from './profile.PNG';
import logo from './logo.png';
import './profileBox.css';

export default class ProfileBox extends PureComponent {
  render() {
    return (
      <div className="ProfileBox">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="profile">
          <img className="clip-circle" src={profile} alt="profile" />
        </div>
        <div className="profileText">
          <h1>Clammy</h1>
          <h2>@Clammy</h2>
        </div>
      </div>
    );
  }
}
