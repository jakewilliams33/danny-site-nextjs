"use client";

import "../styles/globals.css";
import { useState, useRef } from "react";
import Menu from "../components/Menu.js";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import Portfolio from "../components/Portfolio.js";
import HomePage from "../components/HomePage.js";

export default function IndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const portfolio = useRef(null);
  const homePage = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main style={{ overflowX: "hidden" }}>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrollToSection={scrollToSection}
          portfolio={portfolio}
          homePage={homePage}
        />

        <main className="all-container">
          <HomePage homePage={homePage} />
          {/*----------- end of front page -------------  */}
          <Portfolio portfolio={portfolio} />
        </main>
      </main>
    </>
  );
}
