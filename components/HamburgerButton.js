import "../styles/globals.css";
import "../styles/hamburger.css";

const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div
      role="presentation"
      onClick={handleMenuOpen}
      onKeyDown={handleMenuOpen}
      className={!menuOpen ? "hamburger-section" : "hamburger-section open"}
    >
      <div className="hamburger-container">
        <div className="hamburger-lines top"></div>
        <div className="hamburger-lines middle"></div>
        <div className="hamburger-lines bottom"></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
