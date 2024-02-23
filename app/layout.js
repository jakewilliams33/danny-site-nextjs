import "../styles/globals.css";

export const metadata = {
  title: "Danny Blackburn",
  description: "Danny Blackburn - Producer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
