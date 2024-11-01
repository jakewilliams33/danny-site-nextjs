"use client";

import "../styles/globals.css";
import { useState, useRef } from "react";
import Menu from "../components/Menu.js";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import Portfolio from "../components/Portfolio.js";
import HomePage from "../components/HomePage.js";
import LiveSessions from "../components/LiveSessions.js";
import ContactForm from "../components/ContactForm.js";

export default function IndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const portfolio = useRef(null);
  const homePage = useRef(null);
  const liveSessions = useRef(null);
  const contactForm = useRef(null);

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
      <h3
        style={{
          color: "blue",
          zIndex: 90000,
          position: "fixed",
          top: 0,
          right: 0,
        }}
      ></h3>
      <main style={{ overflow: "hidden" }}>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrollToSection={scrollToSection}
          portfolio={portfolio}
          homePage={homePage}
          liveSessions={liveSessions}
          contactForm={contactForm}
        />

        <main className="all-container">
          <HomePage homePage={homePage} portfolio={portfolio} />
          {/*----------- end of front page -------------  */}
          <Portfolio portfolio={portfolio} />
          <LiveSessions liveSessions={liveSessions} />
          <ContactForm contactForm={contactForm} />
        </main>
      </main>
    </>
  );
}
