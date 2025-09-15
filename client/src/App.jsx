import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <header>
        <h1><Link to="/">Sauti</Link></h1>
        <p>A Sanctuary for Survivor Voice</p>
        <nav className="tabs">
          <NavLink to="/journal">Journaling</NavLink>
          <NavLink to="/audio">Audio</NavLink>
          <NavLink to="/affirmations">Affirmations</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/safety">Safety</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
