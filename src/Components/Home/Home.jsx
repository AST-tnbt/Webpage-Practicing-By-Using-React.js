import Header from "../Header/Header";
import "./Home.css";
import image from "../../Data/image";

export default function Home() {
  return (
    <div
      className="home_page"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${image.header_bg}) center/cover no-repeat`,
      }}
    >
      <Header />
      <div className="content_box">
        <h2 className="home__title">We Design and Develop</h2>
        <p className="home__content">
          We are a new design studio based in USA. We have over 20 years of
          combined experience, and know a thing or two about designing websites
          and mobile apps.
        </p>
        <button className="contact-btn">CONTACT US</button>
      </div>
    </div>
  );
}
