import data from "../../Data/data";
import "./Services.css";

export default function Services() {
  return (
    <section className="service" id="services">
      {data.services.map((service, index) => {
        return (
          <div className="service__item" key={index}>
            <img src={service.img} alt="" className="service__icon" />
            <h3 className="service__title">{service.title}</h3>
            <p className="service__content">{service.text}</p>
          </div>
        );
      })}
    </section>
  );
}
