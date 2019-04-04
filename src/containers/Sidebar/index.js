import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="Sidebar">
        <NavLink to="/schedule">View Schedule</NavLink>
        <NavLink to="/avail-pairings">Available Pairings</NavLink>
      </aside>
    );
  }
}
