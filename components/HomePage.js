"use client";

import { react as About } from "../content/about.md";
import "../styles/globals.css";
import ImageBanner from "./ImageBanner";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TfiClose } from "react-icons/tfi";

export default function HomePage({ homePage }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(selectedImg);

  const handleClose = () => {
    setModalOpen(false);
    setSelectedImg(null);
    document.body.style.overflowY = "visible";
  };

  return (
    <section ref={homePage} style={{ height: "100vh" }}>
      <ImageBanner
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {modalOpen && (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 270,
              padding: "3px",
              margin: "8px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <TfiClose color="grey" size={35} />
          </div>
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
              top: 0,
              left: 0,
              zIndex: 100,
              opacity: 0.95,
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              top: 30,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 200,
            }}
          >
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              initialSlide={selectedImg}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              zoom={true}
              style={{
                width: "100vw",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                  }}
                  className="swiper-zoom-container"
                >
                  <img
                    style={{
                      maxWidth: "75%",
                      maxHeight: "120vh",
                      display: "block",
                      margin: "auto",
                      cursor: "zoom-in",
                    }}
                    src="images/danny.jpg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                  }}
                  className="swiper-zoom-container"
                >
                  <img
                    style={{
                      maxWidth: "75%",
                      maxHeight: "120vh",
                      display: "block",
                      margin: "auto",
                      cursor: "zoom-in",
                    }}
                    src="images/drums.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                  }}
                  className="swiper-zoom-container"
                >
                  <img
                    style={{
                      maxWidth: "75%",
                      maxHeight: "120vh",
                      display: "block",
                      margin: "auto",
                      cursor: "zoom-in",
                    }}
                    src="images/danny2.jpg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                  }}
                  className="swiper-zoom-container"
                >
                  <img
                    style={{
                      maxWidth: "75%",
                      maxHeight: "120vh",
                      display: "block",
                      margin: "auto",
                      cursor: "zoom-in",
                    }}
                    src="images/studio.png"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}

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
