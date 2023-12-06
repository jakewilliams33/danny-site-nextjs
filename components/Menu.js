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
}) => {
  const handleClick = (page) => {
    setMenuOpen(false);
    scrollToSection(page);
  };

  return (
    <nav className={menuOpen ? "menu-container open" : "menu-container"}>
      <ul>
        <li onClick={() => handleClick(homePage)}>Home</li>
        <li onClick={() => handleClick(portfolio)}>Portfolio</li>
        <li onClick={() => handleClick(liveSessions)}>Live Sessions</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
