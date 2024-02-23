import { attributes } from "../content/images.md";
import { useState } from "react";
import GalleryModal from "./GalleryModal";
import { enableBackButton, useBackClose } from "../hooks/useBackClose";

let { images } = attributes;

export default function ImageBanner() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    enableBackButton();
    setModalOpen(false);
    setSelectedImg(null);
    document.body.style.overflowY = "visible";
  };

  const handleOpen = (index) => {
    useBackClose(handleClose);
    setSelectedImg(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <GalleryModal
        images={images}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setSelectedImg={setSelectedImg}
        selectedImg={selectedImg}
        handleClose={handleClose}
      />
      <section
        className="image-grid"
        style={{
          gridTemplateColumns: `repeat(${images.length * 2}, 1fr)`,
          width: `${33.37 * (images.length * 2)}%`,
        }}
      >
        {images.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleOpen(index)}
              style={{
                backgroundImage: `url(${item.image})`,
                borderRight: "1px solid black ",
              }}
              className="slide"
            ></div>
          );
        })}
        {images.map((item, index) => {
          return (
            <div
              key={index + 100}
              onClick={() => handleOpen(index)}
              style={{ backgroundImage: `url(${item.image})` }}
              className="slide"
            ></div>
          );
        })}
      </section>
    </>
  );
}
