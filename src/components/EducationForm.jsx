import React, { useState } from "react";

export default function EducationForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="form">
      <div className="header">
        <h1>Education</h1>
        <span
          className={`hover-trigger ${isFormVisible ? 'active' : ""}`}
          onClick={handleToggleFormVisibility}
        ></span>
      </div>
      {isFormVisible && (
        <form className="form">
          <label className="recommended">
            School Name
            <input type="text" placeholder="School Name" />
          </label>
          <label className="recommended">
            Degree
            <input type="text" placeholder="Degree" />
          </label>
          <label className="recommended">
            Start Date
            <input type="date" />
          </label>
          <label className="recommended">
            End Date
            <input type="date" />
          </label>
        </form>
      )}
    </div>
  );
}
