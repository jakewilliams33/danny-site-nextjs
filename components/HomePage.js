"use client";
import { react as About } from "../content/about.md";
import "../styles/globals.css";
import ImageBanner from "./ImageBanner";

export default function HomePage({ homePage, portfolio }) {
  const handleClick = (page) => {
    scrollToSection(page);
    document.body.style.overflow = "visible";
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

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
        <br></br>
        <p>
          Check out some records I've worked on{" "}
          <a
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => handleClick(portfolio)}
          >
            here!
          </a>
        </p>
      </div>
    </section>
  );
}
