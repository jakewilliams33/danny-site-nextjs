import "../styles/globals.css";
import "../styles/menu.css";
import "../styles/swiper.css";

const Menu = ({
  menuOpen,
  setMenuOpen,
  scrollToSection,
  portfolio,
  homePage,
  liveSessions,
  contactForm,
}) => {
  const handleClick = (page) => {
    setMenuOpen(false);
    scrollToSection(page);
    document.body.style.overflow = "visible";
  };

  return (
    <nav
      style={{ overflow: "auto" }}
      className={menuOpen ? "menu-container open" : "menu-container"}
    >
      <ul>
        <li onClick={() => handleClick(homePage)}>Home</li>
        <li onClick={() => handleClick(portfolio)}>Portfolio</li>
        <li onClick={() => handleClick(liveSessions)}>Live Sessions</li>
        <li onClick={() => handleClick(contactForm)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
