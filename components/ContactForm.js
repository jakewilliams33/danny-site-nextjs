import "../styles/contact-form.css";
import { react as ContactText } from "../content/contact-text.md";
import { useState } from "react";

export default function ContactForm({ contactForm }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="contact-form"
      ref={contactForm}
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "22px",
          paddingTop: "22px",
        }}
      >
        Contact
      </h1>
      <div className="contact-text-container">
        <ContactText />
      </div>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <div className="form-container">
          {submitted ? (
            <p>Thank you, your message has been sent.</p>
          ) : (
            <form
              action={() => setSubmitted(true)}
              netlify="true"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact"></input>
              <p>
                <label>
                  Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message:{" "}
                  <span
                    role="textbox"
                    contentEditable="true"
                    name="message"
                    className="textarea"
                  ></span>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
