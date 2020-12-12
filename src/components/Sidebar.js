import React, { useState } from 'react';
import Nav from './Nav';
import TopNav from './TopNav';
import { Link } from 'gatsby';

export default function SideBar({ sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header">
        <div className="inner">
          <Link to="/">
            <span className="logo">Q</span>
          </Link>
          <Link to="/bio">
            <span>Bio</span>
          </Link>
          <Link to="/work">
            <span>Work</span>
          </Link>
          <TopNav onMenuClick={() => toggleHeader(!headerOpen)} />
        </div>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onClose={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
