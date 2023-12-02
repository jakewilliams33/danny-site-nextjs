import "../styles/portfolio.css";
import { attributes } from "../content/portfolio.md";

export default function Portfolio({ portfolio }) {
  let { releases } = attributes;

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
          {releases.map((item, index) => {
            return (
              <div key={index} className="grid-product">
                <img src={item.image} />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
