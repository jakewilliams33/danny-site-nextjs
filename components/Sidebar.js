"use client";

import "../styles/globals.css";
import "../styles/sidebar.css";
import HamburgerMenu from "../components/HamburgerButton";

if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
}

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="sidebar">
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="side-text">
          &nbsp; DANNY BLACKBURN &nbsp;&nbsp;&nbsp; DANNY BLACKBURN
          &nbsp;&nbsp;&nbsp; DANNY BLACKBURN &nbsp;&nbsp;&nbsp; DANNY BLACKBURN
          &nbsp;&nbsp;&nbsp; DANNY BLACKBURN &nbsp;&nbsp;&nbsp; DANNY BLACKBURN
          &nbsp;&nbsp;&nbsp; DANNY BLACKBURN &nbsp;&nbsp;&nbsp; DANNY BLACKBURN
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
