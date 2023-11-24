import "../styles/globals.css";
import "../styles/menu.css";

const Menu = ({ menuOpen }) => {
  return (
    <nav className={menuOpen ? "menu-container open" : "menu-container"}>
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Live Sessions</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
