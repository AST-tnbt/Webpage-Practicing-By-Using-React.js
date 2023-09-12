import "./Stats.css";
import data from "../../Data/data";

export default function Stats() {
  return (
    <section className="stats">
      {data.stats.map((stat, index) => {
        return (
          <div className="stats__item" key={index}>
            <img className="stats__icon" src={stat.img} alt="Stat icon" />
            <div className="stats__content">
              <span className="stats__value">{stat.value}</span>
              <span className="stats__title">{stat.title.toUpperCase()}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
