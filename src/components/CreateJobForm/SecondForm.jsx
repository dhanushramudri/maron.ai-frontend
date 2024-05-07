import React, { useState } from "react";
import "./CreateJobForm.css";
import { RxCross2 } from "react-icons/rx";

const SecondForm = () => {
  const [education, setEducation] = useState("");

  const [requiredExperience, setRequiredExperience] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  console.log(education, requiredExperience);

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };
  const handleAddSkill = () => {
    if (skill.trim() !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };
  return (
    <form>
      <h1 htmlFor="description">Job Description:</h1>
      <textarea type="text" id="description" name="description" required />
      <h1 htmlFor="responsibilites">Responsibilities:</h1>
      <label htmlFor="education">
        Education:
        <input
          type="text"
          value={education}
          placeholder="placeholder"
          onChange={(e) => setEducation(e.target.value)}
        />
      </label>
      <label htmlFor="experience">
        Experience Required (Years)*
        <input
          type="number"
          value={requiredExperience}
          onChange={(e) => setRequiredExperience(e.target.value)}
          min="0"
          max="20"
          required
        />
      </label>
      <div className="skills_div">
        {skills.map((s, idx) => {
          return (
            <div key={idx}>
              {s}{" "}
              <button>
                <RxCross2 />
              </button>
            </div>
          );
        })}
      </div>
      <label htmlFor="skills">
        Skills:
        <input
          type="text"
          value={skill}
          placeholder="Enter required skills"
          onChange={handleSkillChange}
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </label>
    </form>
  );
};

export default SecondForm;
