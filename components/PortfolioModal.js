import { Component, useEffect, useState } from "react";
import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiClose } from "react-icons/tfi";
import { LoadingSpinner } from "./LoadingSpinner";

export default function PortfolioModal({
  spotifyURLS,
  handleClose,
  initialSlide,
  releases,
  swiperOpen,
}) {
  const [hideIframe, setHideIframe] = useState(true);

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          zIndex: 29,
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0.8,
        }}
      >
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
          <TfiClose strokeWidth={0.5} color="grey" size={35} />
        </div>
      </div>
      <Swiper
        navigation={true}
        initialSlide={initialSlide}
        loop
        style={{
          height: "80vh",
          width: "100%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 30,
        }}
        modules={[Virtual, Navigation]}
        slidesPerView={1}
        virtual
        centeredSlides={true}
        spaceBetween={50}
        onSlideChange={() => setHideIframe(true)}
      >
        {releases.map((item, index) => {
          let spotifyurl = spotifyURLS[item.spotify];
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    width: "80vw",
                    border: "solid black 3px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "80%",
                    }}
                  >
                    <h2>{item.artist}</h2>
                    <h3>{item.title}</h3>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p>{item.roles.toString()}</p>
                    </div>
                    <img
                      src={item.image}
                      style={{ marginBottom: "20px", borderRadius: "12px" }}
                    ></img>
                    <div>
                      <div
                        className={!hideIframe ? "spotify hidden" : "spotify"}
                      >
                        <LoadingSpinner
                          styleParams={{
                            position: "absolute",
                            left: "50%",
                            marginTop: "2%",
                            transform: "translate(-50%)",
                            zIndex: 10000,
                          }}
                        />
                      </div>
                      <iframe
                        style={{ borderRadius: "12px" }}
                        className={hideIframe ? "spotify hidden" : "spotify"}
                        width="100%"
                        title="Spotify Embed: My Path to Spotify: Women in Engineering "
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        src={spotifyurl}
                        onLoad={() =>
                          setTimeout(() => {
                            setHideIframe(false);
                          }, 800)
                        }
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
