import "./Skill.css";
import image from "../../Data/image";
import data from "../../Data/data";

export default function Skill() {
  return (
    <div
      className="skill-page"
      style={{
        backgroundImage: `url(${image.skills_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="skill__tile">Professional Skills</h2>
      <div className="content">
        <div className="left-page">
          <ul className="list-skill">
            {data.skills.map((skill, index) => {
              return (
                <li className="skill-item" key={index}>
                  {skill.title} &nbsp; ({skill.value})
                  <div className="skill-percent-horizon">
                    <div
                      className="percent-bar"
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-page"></div>
      </div>
    </div>
  );
}
