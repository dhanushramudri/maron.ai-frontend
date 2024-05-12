import React, { useState } from "react";
import "./CreateJobForm.css";
import SecondForm from "./SecondForm";
import Editor from "./ThirdForm";
import ThirdForm from "./ThirdForm";

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
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [thirdForm, setThirdForm] = useState(false);

  const handleSubmit = async (e) => {
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
    try {
      const response = await fetch(
        "http://localhost:5000/dashboard/create-job",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
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
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini ",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const handleLocationChange = (e) => {
    const inputLocation = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().startsWith(inputLocation)
    );
    setFilteredCountries(filteredCountries);
    setLocation(inputLocation);
  };

  const handleCountrySelection = (country) => {
    setLocation(country);
    setFilteredCountries([]);
  };

  return (
    <div>
      {secondForm ? (
        <SecondForm />
      ) : (
        <div style={{ margin: "0 10%" }}>
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#0056b3" }}>Create a Job</h2>
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
                onChange={handleLocationChange}
                required
              />
              <ul className="country-dropdown">
                {filteredCountries.map((country, index) => (
                  <li
                    key={index}
                    onClick={() => handleCountrySelection(country)}
                    style={{
                      backgroundColor: "#f9f9f9",
                      padding: "5px",
                    }}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </label>
            <button className="form1_btn" type="submit">
              Next
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
