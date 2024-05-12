import React, { useRef, useState } from "react";
import "./CreateJobForm.css";
import { Slider } from "@mui/material";

const ThirdForm = () => {
  const [skills, setSkills] = useState(30);
  const [problemSolving, setProblemSolving] = useState(30);
  const [communication, setCommunication] = useState(30);
  const [teamWork, setTeamWork] = useState(30);
  const [cultureFit, setCultureFit] = useState(30);
  const [customRankingValue, setCustomRankingValue] = useState("");
  const customRankingHandler = (e) => {
    e.preventDefault();
    setCustomRankingValue(e.target.value);
  };

  console.log(customRankingValue);
  return (
    <div className="thirdform_container">
      <h2>Customize Ranking Criteria</h2>
      <form action="submit" style={{ width: "100%" }}>
        <div className="slider_container">
          <label htmlFor="slider1">Skills</label>
          <p>
            Assign a weight to job-specific skills; higher values prioritize
            candidates with a stronger skill set. Recommended range: 30-60.
          </p>
          <Slider
            onChange={(e) => {
              e.preventDefault();
              setSkills(e.target.value);
            }}
            name="slider1"
            aria-label="Experience"
            defaultValue={30}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider_container">
          <label htmlFor="slider2">Problem Solving</label>

          <p>
            Assign a weight to problem-solving abilities; higher values
            prioritize candidates with better analytical and critical thinking
            skills. Recommended range: 10-30.
          </p>
          <Slider
            onChange={(e) => {
              e.preventDefault();
              setProblemSolving(e.target.value);
            }}
            name="slider2"
            defaultValue={30}
            aria-label="Problem Solving"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider_container">
          <label htmlFor="slider3">Communication</label>
          <p>
            Assign a weight to effective communication; higher values prioritize
            candidates with stronger verbal and written communication skills.
            Recommended range: 10-30.
          </p>
          <Slider
            onChange={(e) => {
              e.preventDefault();
              setCommunication(e.target.value);
            }}
            name="slider3"
            defaultValue={30}
            aria-label="Communication"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider_container">
          <label htmlFor="slider4">Team Work</label>
          <p>
            Assign a weight to teamwork capabilities; higher values prioritize
            candidates who excel at collaboration and adaptability. Recommended
            range: 10-30.
          </p>
          <Slider
            onChange={(e) => {
              e.preventDefault();
              setTeamWork(e.target.value);
            }}
            name="slider4"
            defaultValue={30}
            aria-label="Team work"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider_container">
          <label htmlFor="slider5">Culture Fit</label>
          <p>
            Assign a weight to cultural fit; higher values prioritize candidates
            who align with company values and work environment. Recommended
            range: 10-30.
          </p>
          <Slider
            onChange={(e) => {
              e.preventDefault();
              setCultureFit(e.target.value);
            }}
            name="slider5"
            defaultValue={30}
            aria-label="Culture Fit"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="slider_container">
          <label htmlFor="slider6">Custom Ranking</label>
          <p>Tell us what we should focus on. (Optional)</p>
          <input
            onChange={customRankingHandler}
            placeholder="What should we focus on"
          />
        </div>
        <button className="form1_btn" type="submit">
          {" "}
          Next
        </button>
      </form>
    </div>
  );
};

export default ThirdForm;
