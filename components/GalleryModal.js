import { TfiClose } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GalleryModal({
  images,
  modalOpen,
  selectedImg,
  handleClose,
}) {
  return (
    <>
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
            <TfiClose color="grey" size={35} strokeWidth={0.5} />
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
              modules={[Navigation, Pagination, Zoom, Virtual]}
              initialSlide={selectedImg}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              virtual
              pagination={{ clickable: true }}
              loop={true}
              zoom={true}
              style={{
                width: "100vw",
              }}
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    virtualIndex={index}
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
                        src={item.image}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}
