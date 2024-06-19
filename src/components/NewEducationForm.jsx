import { useState } from "react";

export default function EducationForm({addEducation, handleToggleFormVisibility }) {

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = { school, degree, startDate, endDate };

    addEducation(newEducation);
    handleToggleFormVisibility()

    setSchool("");
    setDegree("");
  };

  return (
    <form className="form edu-form" onSubmit={handleSubmit}>
      <label className="required">
        School Name
        <input
          type="text"
          placeholder="School Name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
      </label>
      <label className="required">
        Degree
        <input
          type="text"
          placeholder="Degree"
          onChange={(e) => setDegree(e.target.value)}
          value={degree}
          required
        />
      </label>
      <label className="recommended">
        Start Date
        <input
          type="text"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />
      </label>
      <label className="recommended">
        End Date
        <input
          type="text"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />
      </label>
      <div className="buttons">
        <button className="green-button">Save</button>
        <button className="red-button" onClick={handleToggleFormVisibility}>Close</button>
      </div>
    </form>
  );
}
