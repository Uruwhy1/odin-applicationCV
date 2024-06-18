import React, { useState } from "react";

export default function EducationForm({ addEducation }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = { school, degree, startDate, endDate };

    addEducation(newEducation);

    setSchool("");
    setDegree("");
  };

  return (
    <div className="form">
      <div className="header">
        <h1>Education</h1>
        <span
          className={`hover-trigger ${isFormVisible ? "active" : ""}`}
          onClick={handleToggleFormVisibility}
        ></span>
      </div>
      {isFormVisible && (
        <form className="form" onSubmit={handleSubmit}>
          <label className="recommended">
            School Name
            <input
              type="text"
              placeholder="School Name"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </label>
          <label className="recommended">
            Degree
            <input
              type="text"
              placeholder="Degree"
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
            />
          </label>
          <label className="recommended">
            Start Date
            <input
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </label>
          <label className="recommended">
            End Date
            <input
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </label>
          <button className="submit">Save</button>
        </form>
      )}
    </div>
  );
}
