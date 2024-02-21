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
      <form
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <label for="name">Name</label>
        <input type="text" name="name" id="name"></input>
        <label for="inputEmail">Email</label>
        <input type="email" name="email" id="inputEmail"></input>
        <label for="message">Message</label>
        <input type="text" name="message" id="message"></input>
      </form>
    </main>
  );
}
