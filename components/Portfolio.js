import "../styles/portfolio.css";
import { attributes } from "../content/portfolio.md";
import { useEffect, useState } from "react";

import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiClose } from "react-icons/tfi";

export default function Portfolio({ portfolio }) {
  let { releases } = attributes;
  const [swiperOpen, setSwiperOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(null);
  const [spotifyURLS, setSpotifyURLS] = useState({});

  const [hideIframe, setHideIframe] = useState(true);

  const handleOpen = (selectedRelease) => {
    setInitialSlide(selectedRelease);
    setSwiperOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSwiperOpen(false);
    setInitialSlide(null);
    document.body.style.overflow = "visible";
  };

  const callAPI = async (url, title) => {
    try {
      const res = await fetch(`https://open.spotify.com/oembed?url=${url}`);
      const data = await res.json();

      return { url: data.iframe_url, title: title };
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let obj = {};
    releases.forEach((item) => {
      let title = item.title;

      callAPI(item.spotify, title).then(({ url, title }) => {
        obj[title] = url;
      });
    });
    setSpotifyURLS(obj);
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", width: "100%", position: "relative" }}
      ref={portfolio}
    >
      {swiperOpen && (
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
              let spotifyurl = spotifyURLS[item.title];
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

                        <iframe
                          style={{ borderRadius: "12px" }}
                          className={hideIframe ? "spotify hidden" : "spotify"}
                          width="100%"
                          height="152"
                          title="Spotify Embed: My Path to Spotify: Women in Engineering "
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          src={spotifyurl}
                          onLoad={() =>
                            setTimeout(() => {
                              setHideIframe(false);
                            }, 200)
                          }
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Portfolio
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <section
          className="grid-collection"
          style={{
            width: "90%",
          }}
        >
          {releases.map((item, index) => {
            return (
              <div key={index} className="grid-product">
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleOpen(index);
                  }}
                  src={item.image}
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
