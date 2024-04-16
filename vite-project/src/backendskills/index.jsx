import React, { useEffect } from "react";
import "./index.css";
import axios from "axios";

const BackendSkills = () => {
  const [list, setList] = React.useState([]);
  const getFrontenSkills = () => {
    axios
      .get(`http://localhost:3000/Skill`)
      .then(function (response) {
        setList(response.data.data.filter((el) => el.domain === "backend"));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    getFrontenSkills();
  }, []);

  console.log(list)
  return (
    <section id="backskills" className="skills">
      <div className="skills-title">
        <h2>Back-end Skills</h2>
      </div>
      <div className="skills-container">
        <div className="skills-field">
          <h2>Technologies</h2>
          {list.map((item, index) => (
            <div className="skill" key={index} >
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
          <div className="skill-level">
            <div className="desc">
              <h3>PHP </h3>
              <span>60%</span>
            </div>
            <div className="progress-bar" style={{ "--progress": "60%" }}></div>
          </div>
          <div className="skill-level">
            <div className="desc">
              <h3>MysQl</h3>
              <span>40% </span>
            </div>
            <div className="progress-bar" style={{ "--progress": "40%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendSkills;
