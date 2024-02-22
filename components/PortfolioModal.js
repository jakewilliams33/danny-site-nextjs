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
        className="swiper-component"
        navigation={true}
        initialSlide={initialSlide}
        loop
        style={{
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
                  //container for white box
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className="white-background"
                  style={{
                    // white box background
                    backgroundColor: "white",
                    width: "80vw",
                    border: "solid black 3px",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    className="swiper-grid"
                    style={{
                      //main page content
                      display: "grid",
                      height: "100%",
                    }}
                  >
                    <img className="image-wide" src={item.image}></img>
                    <section>
                      <h1 className="band-name">{item.artist.toUpperCase()}</h1>
                      <h1 className="song-name">{item.title}</h1>
                      <div>
                        <br></br>
                        <div style={{ display: "flex" }}>
                          <img className="image-mobile" src={item.image}></img>
                          <div
                            style={{
                              flexDirection: "column",
                            }}
                          >
                            <p className="song-roles">
                              {item.roles.toString().replaceAll(", ", " / ")}
                            </p>
                            <br></br>
                            <p className="credit">
                              Mastered by Kane or someone
                            </p>
                          </div>
                          <br></br>
                        </div>

                        <p className="song-info">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </section>

                    <div
                      className="widget-bit"
                      style={{
                        //spotify bit
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        className={!hideIframe ? "spotify hidden" : "spotify"}
                      >
                        <LoadingSpinner
                          styleParams={{
                            position: "absolute",
                            left: "50%",
                            marginTop: "1%",
                            transform: "translate(-50%)",
                            zIndex: 10000,
                          }}
                        />
                      </div>
                      <div className="iframe-container">
                        <iframe
                          style={{
                            borderRadius: "12px",
                            margin: 0,
                          }}
                          className={hideIframe ? "spotify hidden" : "spotify"}
                          width="100%"
                          height="100%"
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
