import "../styles/portfolio.css";

export default function Portfolio({ portfolio }) {
  return (
    <div style={{ minHeight: "100vh" }} ref={portfolio}>
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
          <div className="grid-product">
            <img src="images/0.png" />
          </div>
          <div className="grid-product">
            <img src="images/1.png" />
          </div>

          <div className="grid-product">
            <img src="images/3.png" />
          </div>
          <div className="grid-product">
            <img src="images/4.png" />
          </div>
          <div className="grid-product">
            <img src="images/5.png" />
          </div>
          <div className="grid-product">
            <img src="images/6.png" />
          </div>
        </section>
      </div>
    </div>
  );
}
