import { attributes } from "../content/images.md";

let { images } = attributes;

export default function ImageBanner({ setSelectedImg, setModalOpen }) {
  const handleClick = (index) => {
    setSelectedImg(index);
    setModalOpen(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
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
              onClick={() => handleClick(index)}
              style={{ backgroundImage: `url(${item.image})` }}
              className="slide"
            ></div>
          );
        })}
        {images.map((item, index) => {
          return (
            <div
              key={index + 100}
              onClick={() => handleClick(index)}
              style={{ backgroundImage: `url(${item.image})` }}
              className="slide"
            ></div>
          );
        })}
      </section>
    </>
  );
}
