import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { useState } from "react";
import "../styles/live-sessions.css";
import { TfiClose } from "react-icons/tfi";
import { attributes } from "../content/live-sessions.md";

let { videourls } = attributes;

export default function LiveSessions({ liveSessions }) {
  const [videoUrl, setVideoUrl] = useState("");

  const handleClick = (item) => {
    setVideoUrl(item);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setVideoUrl(null);
    document.body.style.overflow = "visible";
  };

  return (
    <div ref={liveSessions} style={{ minHeight: "100vh", width: "100%" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "22px",
          paddingTop: "22px",
        }}
      >
        Live Sessions
      </h1>
      {videoUrl && (
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
            overflow: "auto",
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
            className="close-button"
          >
            <TfiClose strokeWidth={0.5} size={35} />
          </div>
        </div>
      )}
      {videoUrl && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 100,
            width: "90vw",
            height: "50vw",
            display: "flex",
            justifyContent: "center",
            maxWidth: "900px",
            maxHeight: "500px",
          }}
        >
          <ReactPlayer width="100%" height="100%" controls url={videoUrl} />
        </div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <section
          className="picture-grid"
          style={{
            width: "95%",
          }}
        >
          {videourls.map((item, index) => {
            return (
              <div
                key={index}
                className="grid-box"
                onClick={() => {
                  handleClick(item);
                }}
                style={{ position: "relative" }}
              >
                <img
                  src={`https://img.youtube.com/vi/${item
                    .split("=")
                    .pop()
                    .slice(0, 11)}/hqdefault.jpg`}
                ></img>
                <svg
                  height="100%"
                  version="1.1"
                  viewBox="0 0 68 48"
                  width="100%"
                  className="play-icon"
                >
                  <path
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    fill="#f00"
                  ></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
