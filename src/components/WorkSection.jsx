import { useState } from "react";
import NewWorkForm from "./NewWorkForm";

import AddIcon from "../assets/images/plus-square.svg?react";
import BriefcaseIcon from '../assets/images/briefcase.svg?react'


export default function WorkSection({
  workArray,
  removeWork,
  addWork,
  editWork,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editItem, setEditItem] = useState("");

  const handleToggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setEditItem(null); // Reset edit item when form is toggled
  };

  const handleEditFormVisibility = (item) => {
    setEditItem(item);
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="section work-section">
      <div className="header">
        <BriefcaseIcon />
        <h1>Work</h1>
        <span
          className={`hover-trigger ${isFormVisible ? "active" : ""}`}
          onClick={handleToggleFormVisibility}
        ></span>
      </div>
      {isFormVisible && (
        <NewWorkForm
          addWork={addWork}
          editWork={editWork}
          handleToggleFormVisibility={handleToggleFormVisibility}
          editItem={editItem}
        />
      )}
      {!isFormVisible && (
        <WorkDisplay
          workArray={workArray}
          removeWork={removeWork}
          handleEditFormVisibility={handleEditFormVisibility}
        />
      )}
      {!isFormVisible && (
        <button className="add-button" onClick={handleToggleFormVisibility}>
          <AddIcon/>
          Add a new education
        </button>
      )}
    </div>
  );
}

function WorkDisplay({ workArray, removeWork, handleEditFormVisibility }) {
  return (
    <div>
      {workArray.length > 0 ? (
        <ul>
          {workArray.map((item) => (
            <li className="form-display" key={item.id}>
              <div className="info">
                <p className="bold">{item.role}</p>
                <p>{item.name}</p>
                <p className="dates">
                  {item.startDate} - {item.endDate ? item.endDate : "Present"}
                </p>
              </div>

              <div className="display-buttons">
                <button
                  className="red-button"
                  onClick={() => removeWork(item.id)}
                >
                  Remove
                </button>
                <button
                  className="yellow-button"
                  onClick={() => handleEditFormVisibility(item)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="form-display">No Work details added yet.</p>
      )}
    </div>
  );
}
