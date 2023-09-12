import image from "../../Data/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="navigation">
      <img className="logo" src={image.logo} alt="Logo" />
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#about">ABOUT</a>
        </li>
        <li className="nav__item">
          <a href="#works">WORK</a>
        </li>
        <li className="nav__item">
          <a href="#process">PROCESS</a>
        </li>
        <li className="nav__item">
          <a href="#services">SERVICES</a>
        </li>
        <li className="nav__item">
          <a href="#comments">COMMENTS</a>
        </li>
        <li className="nav__item">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </header>
  );
}
