"use client";
import { react as About } from "../content/about.md";
import "../styles/globals.css";
import ImageBanner from "./ImageBanner";
import { useState } from "react";
import { attributes } from "../content/images.md";
import GalleryModal from "./GalleryModal";
let { images } = attributes;

export default function HomePage({ homePage }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section ref={homePage} style={{ height: "100vh" }}>
      <ImageBanner
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <GalleryModal
        images={images}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setSelectedImg={setSelectedImg}
        selectedImg={selectedImg}
      />
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
