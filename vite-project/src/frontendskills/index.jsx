import React, { useEffect } from "react";
import "./index.css";
import axios from "axios";

const FrontendSkills = () => {
  const [list, setList] = React.useState([]);
  const getFrontenSkills = () => {
    axios
      .get(`http://localhost:3000/Skill`)
      .then(function (response) {
        setList(response.data.data.filter(el=> el.domain ==="frontend"));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };

  useEffect(() => {
    getFrontenSkills();
  }, []);

  return (
    <section id="frontSkills" className="skills">
      <div className="skills-title">
        <h2>Frontend Skills</h2>
      </div>
      <div className="skills-container">
        <div className="skills-field">
          <h2>Technologies</h2>
          {list.map((item, index) => (
            <div className="skill" key={index}>
              <img src={item.icon} alt="icon" />
              <div className="skill-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-level">
          <h2>Coding skills</h2>
          {list.map((item, index) => (
            <div className="skill-level" key={index}>
              <div className="desc">
                <h3>{item.name}</h3>
                <span>{item.level}%</span>
              </div>
              <div
                className="progress-bar"
                style={{ "--progress": `${item.level}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendSkills;
