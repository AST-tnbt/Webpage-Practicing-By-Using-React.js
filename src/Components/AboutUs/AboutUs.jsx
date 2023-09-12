import "./AboutUs.css";
import image from "../../Data/image";

export default function AboutUs() {
  return (
    <div className="about__page" id="about">
      <h2 className="about__title">About Us</h2>
      <p className="about__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vitae
        reprehenderit veritatis doloribus sint provident vero? Ullam repellendus
        assumenda voluptate perferendis eligendi! Neque nostrum velit in
        temporibus, architecto error possimus officiis minus sit ipsa eveniet.
      </p>
      <img src={image.signature} alt="Signature" className="signature" />
    </div>
  );
}
