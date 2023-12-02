export default function ImageBanner({
  selectedImg,
  setSelectedImg,
  modalOpen,
  setModalOpen,
}) {
  const imageLookup = ["danny.jpg", "drums.png", "danny2.jpg", "studio.png"];

  const handleClick = (e) => {
    const clickedImage = e.target.style.backgroundImage
      .split("/")
      .pop()
      .split('"')[0];

    setSelectedImg(imageLookup.indexOf(clickedImage));
    setModalOpen(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      <section className="image-grid">
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/danny.jpg)" }}
          className="slide1 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/drums.png)" }}
          className="slide2 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/danny2.jpg)" }}
          className="slide3 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/studio.png)" }}
          className="slide4 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/danny.jpg)" }}
          className="slide1 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/drums.png)" }}
          className="slide2 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/danny2.JPG)" }}
          className="slide3 slide"
        ></div>
        <div
          onClick={handleClick}
          style={{ backgroundImage: "url(images/studio.png)" }}
          className="slide4 slide"
        ></div>
      </section>
    </>
  );
}
