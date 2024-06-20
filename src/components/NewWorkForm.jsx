import { useState, useEffect } from "react";

export default function EducationForm({
  addWork,
  editWork,
  handleToggleFormVisibility,
  editItem,
}) {
  const [name, setName] = useState("");
  const [role, setrole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setrole(editItem.role);
      setStartDate(editItem.startDate);
      setEndDate(editItem.endDate);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWork = { name, role, startDate, endDate };

    if (editItem) {
      newWork.id = editItem.id;
      editWork(newWork);
    } else {
      addWork(newWork);
    }

    handleToggleFormVisibility();
  };

  return (
    <form className="section edu-form" onSubmit={handleSubmit}>
      <label className="required">
        Company
        <input
          type="text"
          placeholder="Facebook"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="required">
        Role
        <input
          type="text"
          placeholder="Data Analyst"
          onChange={(e) => setrole(e.target.value)}
          value={role}
          required
        />
      </label>
      <label className="recommended">
        Start Date
        <input
          type="text"
          placeholder="01/01/0001"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />
      </label>
      <label className="recommended">
        End Date
        <input
          type="text"
          placeholder="09/09/9999"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />
      </label>
      <div className="buttons">
        <button className="green-button">Save</button>
        <button className="red-button" onClick={handleToggleFormVisibility}>
          Close
        </button>
      </div>
    </form>
  );
}
