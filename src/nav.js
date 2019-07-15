import React, { Component } from 'react';

export class Nav extends Component {

  classname() {
    return (this.props.active === true) ? 'nav active' : 'nav'
  }

  render() {
    return (
      <li className={this.classname()} onClick={() => { this.props.handler(this.props.destination) }}>{this.props.destination}</li>
    );
  }
}

export default Nav;
