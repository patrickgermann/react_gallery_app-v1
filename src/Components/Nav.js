import React from 'react';

import { Route, NavLink, Redirect } from 'react-router-dom';

const Nav = () => (
  <div className="main-nav">
    <ul>
      <li><NavLink to={`?search=cats`}>Cats</NavLink></li>
      <li><NavLink to={`?search=dogs`}>Dogs</NavLink></li>
      <li><NavLink to={`?search=computers`}>Computers</NavLink></li>
    </ul>
  </div>
);

export default Nav;