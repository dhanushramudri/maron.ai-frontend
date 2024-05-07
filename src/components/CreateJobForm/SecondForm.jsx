import React, { useState } from "react";
import "./CreateJobForm.css";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleRight } from "react-icons/fa6";

const SecondForm = () => {
  const [education, setEducation] = useState("");

  const [requiredExperience, setRequiredExperience] = useState("");
  const [TechnicalSkill, setTechnicalSkill] = useState("");
  const [TechnicalSkills, setTechnicalSkills] = useState([]);

  const handleTechnicalSkillChange = (e) => {
    setTechnicalSkill(e.target.value);
  };
  const handleAddTechnicalSkill = () => {
    if (TechnicalSkill.trim() !== "") {
      setTechnicalSkills([...TechnicalSkills, TechnicalSkill]);
      setTechnicalSkill("");
    }
  };
  const handleRemoveSkill = () => {
    setTechnicalSkills(TechnicalSkills.slice(0, -1));
  };
  const [SoftSkill, setSoftSkill] = useState("");
  const [SoftSkills, setSoftSkills] = useState([]);

  const handleSoftSkillChange = (e) => {
    setSoftSkill(e.target.value);
  };

  const handleAddSoftSkill = () => {
    if (SoftSkill.trim() !== "") {
      setSoftSkills([...SoftSkills, SoftSkill]);
      setSoftSkill("");
    }
  };

  const handleRemoveSoftSkill = (index) => {
    setSoftSkills(SoftSkills.filter((_, idx) => idx !== index));
  };

  return (
    <form>
      <h1 htmlFor="description">Job Description</h1>
      <textarea type="text" id="description" name="description" required />
      <h1 htmlFor="responsibilites">Responsibilities</h1>
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
      <h1>Skills</h1>

      {TechnicalSkills.length > 0 && (
        <div className="skills_div">
          {TechnicalSkills.map((s, idx) => {
            return (
              <div key={idx}>
                {s}{" "}
                <button>
                  <RxCross2 onClick={handleRemoveSkill} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      <label htmlFor="skills">
        Technical Skills:
        <div className="skills_btn">
          <input
            type="text"
            value={TechnicalSkill}
            placeholder="Enter required skills"
            onChange={handleTechnicalSkillChange}
          />
          <FaRegCircleRight onClick={handleAddTechnicalSkill} className="btn" />
        </div>
      </label>
      <label htmlFor="skills">
        Soft Skills:
        {SoftSkills.length > 0 && (
          <div className="skills_div">
            {SoftSkills.map((s, idx) => {
              return (
                <div key={idx}>
                  {s}{" "}
                  <button onClick={() => handleRemoveSoftSkill(idx)}>
                    <RxCross2 />
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <div className="skills_btn">
          <input
            type="text"
            value={SoftSkill}
            placeholder="Enter soft skills"
            onChange={handleSoftSkillChange}
          />
          <FaRegCircleRight onClick={handleAddSoftSkill} className="btn" />
        </div>
      </label>
    </form>
  );
};

export default SecondForm;
