import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <i className="fab fa-github" /> {this.props.title}
      </nav>
    );
  }
}

export default Navbar;
