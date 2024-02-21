"use client";
import { react as About } from "../content/about.md";
import "../styles/globals.css";
import ImageBanner from "./ImageBanner";
import { useState } from "react";
import { attributes } from "../content/images.md";
let { images } = attributes;

export default function HomePage({ homePage }) {
  return (
    <section ref={homePage} style={{ height: "100vh" }}>
      <ImageBanner />

      <div
        style={{
          fontSize: "20px",
          padding: "20px 20px 0 20px",
        }}
      >
        <About />
      </div>
    </section>
  );
}
