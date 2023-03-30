import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>Pypcior Warrior</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects/test">test</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
      </div>
    </nav>
  );
}
