import React, { useState } from "react";
import "./CreateJobForm.css";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleRight } from "react-icons/fa6";

const SecondForm = () => {
  const [education, setEducation] = useState("");

  const [requiredExperience, setRequiredExperience] = useState("");
  const [TechnicalSkill, setTechnicalSkill] = useState("");
  const [TechnicalSkills, setTechnicalSkills] = useState([]);

  const [languageName, setLanguageName] = useState("");
  const [languageProficiency, setLanguageProficiency] = useState("");
  const [Languages, setLanguages] = useState([]);

  const [certification, setCertification] = useState("");
  const [certifications, setCertifications] = useState([]);
  const [preferredQualifications, setPreferredQualifications] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [benefit, setBenefit] = useState("");
  const [benefits, setBenefits] = useState([]);

  console.log(companyOverview);

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
    setSoftSkills(SoftSkills.slice(0, -1));
  };
  const handleLanguageNameChange = (e) => {
    setLanguageName(e.target.value);
  };

  const handleLanguageProficiencyChange = (e) => {
    setLanguageProficiency(e.target.value);
  };

  const handleAddLanguage = () => {
    if (languageName.trim() !== "" && languageProficiency.trim() !== "") {
      const language = {
        name: languageName,
        proficiency: parseInt(languageProficiency, 10),
      };
      setLanguages([...Languages, language]);
      setLanguageName("");
      setLanguageProficiency("");
    }
  };

  const handleRemoveLanguage = () => {
    const updatedLanguages = Languages.slice(0, -1);
    setLanguages(updatedLanguages);
  };

  const handleCertificationChange = (e) => {
    setCertification(e.target.value);
  };

  const handleAddCertification = () => {
    if (certification.trim() !== "") {
      setCertifications([...certifications, certification]);
      setCertification("");
    }
  };

  const handleRemoveCertification = (index) => {
    setCertifications(certifications.slice(0, -1));
  };
  const handleAddBenefits = () => {
    if (benefit.trim() !== "") {
      setBenefits([...benefits, benefit]);
      setBenefit("");
    }
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
          placeholder="Enter required education"
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
        <div className="skills_input_container">
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
        <div className="skills_input_container">
          <input
            type="text"
            value={SoftSkill}
            placeholder="Enter soft skills"
            onChange={handleSoftSkillChange}
          />
          <FaRegCircleRight onClick={handleAddSoftSkill} className="btn" />
        </div>
      </label>
      <label htmlFor="languages">
        Language Proficiency:
        {Languages.length > 0 && (
          <div className="skills_div">
            {Languages.map((language, idx) => {
              return (
                <div key={idx}>
                  {language.name} - {language.proficiency}%{" "}
                  <button onClick={() => handleRemoveLanguage(idx)}>
                    <RxCross2 />
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <div className="skills_input_container">
          <input
            type="text"
            value={languageName}
            placeholder="Enter language"
            onChange={handleLanguageNameChange}
          />
          <input
            type="number"
            value={languageProficiency}
            placeholder="Enter proficiency (%)"
            onChange={handleLanguageProficiencyChange}
          />
          <FaRegCircleRight onClick={handleAddLanguage} className="btn" />
        </div>
      </label>
      <h1>Certifications</h1>
      <label htmlFor="certification">
        {certifications.length > 0 && (
          <div className="skills_div">
            {certifications.map((cert, idx) => {
              return (
                <div key={idx}>
                  {cert}{" "}
                  <button onClick={() => handleRemoveCertification(idx)}>
                    <RxCross2 />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="skills_input_container">
          <input
            type="text"
            value={certification}
            onChange={handleCertificationChange}
            placeholder="Enter certification"
          />
          <FaRegCircleRight onClick={handleAddCertification} className="btn" />
        </div>
      </label>
      <h1>Preferred Qualifications</h1>
      <label htmlFor="preferred">
        <input
          type="text"
          id="preferred"
          name="preferred"
          value={preferredQualifications}
          onChange={(e) => setPreferredQualifications(e.target.value)}
          placeholder="Enter preferred qualifications (*optional)"
        />
      </label>
      <h1>Company Overview</h1>
      <textarea
        type="text"
        id="companyOverview"
        name="companyOverview"
        value={companyOverview}
        onChange={(e) => setCompanyOverview(e.target.value)}
        required
        placeholder="Optionally, you can provide an overview of the company, its culture, values, and mission"
      />
      <h1>Benefits</h1>
      <label htmlFor="benefits">
        {benefits.length > 0 && (
          <div className="skills_div">
            {benefits.map((cert, idx) => {
              return (
                <div key={idx}>
                  {cert}{" "}
                  <button onClick={() => handleRemoveCertification(idx)}>
                    <RxCross2 />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="skills_input_container">
          <input
            type="text"
            value={benefit}
            onChange={(e) => setBenefit(e.target.value)}
            placeholder="Enter benefits"
          />
          <FaRegCircleRight onClick={handleAddBenefits} className="btn" />
        </div>
      </label>
    </form>
  );
};

export default SecondForm;
