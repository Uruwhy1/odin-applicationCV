import { useState, useEffect } from "react";

export default function EducationForm({
  addEducation,
  editEducation,
  handleToggleFormVisibility,
  editItem,
}) {
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (editItem) {
      setSchool(editItem.school);
      setLocation(editItem.location)
      setDegree(editItem.degree);
      setStartDate(editItem.startDate);
      setEndDate(editItem.endDate);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = { school, location, degree, startDate, endDate };

    if (editItem) {
      newEducation.id = editItem.id;
      editEducation(newEducation);
    } else {
      addEducation(newEducation);
    }

    handleToggleFormVisibility();
    console.log("XD");
  };

  return (
    <form className="edu-form form" onSubmit={handleSubmit}>
      <div className="two-columns">
      <label className="required">
        School Name
        <input
          type="text"
          placeholder="The Odin School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
      </label>
      <label className="required">
        Location
        <input
          type="text"
          placeholder="New York"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>
      </div>
      <label className="required">
        Degree
        <input
          type="text"
          placeholder="JavaScript Foundations Course"
          onChange={(e) => setDegree(e.target.value)}
          value={degree}
          required
        />
      </label>
      <div className="two-columns">
        <label className="required">
          Start Date
          <input
            type="text"
            placeholder="Jan 2005"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            required
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            placeholder="Present"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />
        </label>
      </div>
      <div className="buttons">
        <button type="submit" className="green-button">
          Save
        </button>
        <button className="red-button" onClick={handleToggleFormVisibility}>
          Close
        </button>
      </div>
    </form>
  );
}
