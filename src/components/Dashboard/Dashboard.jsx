import React, { useState } from "react";
import Header from "../Header/Header";
import "./Dashboard.css";
import { FiFolderPlus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [createJob, setCreateJob] = useState(false);
  const handleClick = () => {
    setCreateJob(true);
  };
  if (createJob) {
    return (window.location.href = "/dashboard/create-job");
  }

  return (
    <div>
      <Header />
      <div className="dashboard">
        <p
          style={{
            fontSize: "25px",
            color: "#384181",
            fontWeight: 700,
            marginLeft: "10%",
            marginTop: "2%",
          }}
        >
          Posted Jobs
        </p>
        <div className="create_job_container">
          <FiFolderPlus size={30} color={"#384181"} />
          <h4 className="nojobs_txt">No Jobs</h4>
          <p className="getstarted_txt">Get started by creating jobs</p>
          <button className="create_job_btn" onClick={handleClick}>
            <GoPlus style={{ color: "white" }} fontSize="20px" />
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
