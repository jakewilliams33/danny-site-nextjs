"use client";

import "../styles/globals.css";
import { useState } from "react";
import Menu from "../components/Menu.js";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import { react as About } from "../content/about.md";

export default function IndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main style={{ height: "700vh", overflowX: "hidden" }}>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} />
        <main style={{ marginLeft: "70px" }}>
          <img
            alt="danny in the studio"
            style={{
              width: "100vw",
              objectFit: "cover",
              height: "50vh",
              filter: "grayscale(100%)",
              borderBottom: "solid 1px black",
              objectPosition: "0% 45%",
            }}
            src="/images/danny.jpg"
          />
          <div
            style={{
              fontSize: "30px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <About />
          </div>
        </main>
      </main>
    </>
  );
}
