import React, { useState } from "react";
import "./CreateJobForm.css";
import SecondForm from "../SecondForm";

const Form = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [currency, setCurrency] = useState("CAD");
  const [salaryType, setSalaryType] = useState("Hourly");
  const [team, setTeam] = useState("No team");
  const [workplaceType, setWorkplaceType] = useState("On-Site");
  const [jobType, setJobType] = useState("Full-time");
  const [positions, setPositions] = useState(1);
  const [closingDate, setClosingDate] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [secondForm, setSecondForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example, sending data to the backend
    console.log("Form submitted:", {
      jobTitle,
      minSalary,
      maxSalary,
      currency,
      salaryType,
      team,
      workplaceType,
      jobType,
      positions,
      closingDate,
      skills,
      location,
    });

    setSecondForm(true);

    // Clear form fields
    // Optionally, you can clear the form fields after submission
    // setJobTitle('');
    // setMinSalary(0);
    // setMaxSalary(0);
    // setCurrency('CAD');
    // setSalaryType('Hourly');
    // setTeam('No team');
    // setWorkplaceType('On-Site');
    // setJobType('Full-time');
    // setPositions(1);
    // setClosingDate('');
    // setSkills('');
    // setLocation('');
  };

  return (
    <div>
      {!secondForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Job Title*
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Min Salary
            <input
              type="number"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              step="1000"
            />
          </label>
          <label>
            Currency
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="CAD">CAD</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
          <label>
            Max Salary
            <input
              type="number"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              step="1000"
            />
          </label>
          <label>
            Salary Type
            <select
              value={salaryType}
              onChange={(e) => setSalaryType(e.target.value)}
            >
              <option value="Hourly">Hourly</option>
              <option value="Weekly">Weekly</option>

              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </label>
          <label>
            Select Team
            <select value={team} onChange={(e) => setTeam(e.target.value)}>
              <option value="No team">No team</option>
            </select>
          </label>
          <label>
            Workplace Type
            <select
              value={workplaceType}
              onChange={(e) => setWorkplaceType(e.target.value)}
            >
              <option value="On-Site">On-Site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </label>
          <label>
            Job Type
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Number of Positions
            <input
              type="number"
              value={positions}
              onChange={(e) => setPositions(e.target.value)}
              min="1"
            />
          </label>
          <label>
            Closing Date
            <input
              type="date"
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
            />
          </label>
          <label>
            Skills
            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </label>
          <label>
            Location*
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <button className="form1_btn" type="submit">
            Create Job
          </button>
        </form>
      ) : (
        <SecondForm />
      )}
    </div>
  );
};

export default Form;
