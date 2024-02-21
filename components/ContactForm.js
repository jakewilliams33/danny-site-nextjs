export default function ContactForm() {
  return (
    <main style={{ width: "100%", minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "22px",
          paddingTop: "22px",
        }}
      >
        Contact
      </h1>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <form netlify="true" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"></input>
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </main>
  );
}
