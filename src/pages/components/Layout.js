import React from "react";
import Navbar from "./NavBar";
export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Copyright Aron legal team</p>
      </footer>
    </div>
  );
}
