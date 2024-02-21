import "../styles/portfolio.css";
import { attributes } from "../content/portfolio.md";
import { useEffect, useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { enableBackButton, useBackClose } from "../hooks/useBackClose";

export default function Portfolio({ portfolio }) {
  let { releases } = attributes;
  const [swiperOpen, setSwiperOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(null);
  const [spotifyURLS, setSpotifyURLS] = useState({});

  const handleOpen = (selectedRelease) => {
    useBackClose(handleClose);
    setInitialSlide(selectedRelease);
    setSwiperOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    enableBackButton();
    setSwiperOpen(false);
    setInitialSlide(null);
    document.body.style.overflow = "visible";
  };

  useEffect(() => {
    let obj = {};
    releases.forEach((item) => {
      const url = new URL(item.spotify);
      obj[
        item.spotify
      ] = `https://open.spotify.com/embed${url.pathname}${url.search}&utm_source=oembed`;
    });
    setSpotifyURLS(obj);
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", width: "100%", position: "relative" }}
      ref={portfolio}
    >
      {swiperOpen && (
        <PortfolioModal
          swiperOpen={swiperOpen}
          spotifyURLS={spotifyURLS}
          handleClose={handleClose}
          initialSlide={initialSlide}
          releases={releases}
        />
      )}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "22px",
          paddingTop: "22px",
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
            width: "95%",
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
