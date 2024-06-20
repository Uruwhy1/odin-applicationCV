import { useState } from "react";
import NewWorkForm from "./NewWorkForm";
import arrowRight from "../assets/images/arrow-right.svg";


export default function WorkSection({
  workArray,
  removeWork,
  addWork,
  editWork
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editItem, setEditItem] = useState('')

  const handleToggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setEditItem(null); // Reset edit item when form is toggled
  };

  const handleEditFormVisibility = (item) => {
    setEditItem(item)
    setIsFormVisible(!isFormVisible);
  };



  return (
    <div className="form">
      <div className="header">
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
              <h2>{item.role}</h2>
              <p>{item.name}</p>
              <div className="dates">
                <p>{item.startDate}</p>
                <img src={arrowRight} alt="" />
                <p>{item.endDate}</p>
              </div>
              <div className="display-buttons">
                <button className="red-button" onClick={() => removeWork(item.id)}>
                  Remove
                </button>
                <button className="yellow-button" onClick={() => handleEditFormVisibility(item)}>
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Work details added yet.</p>
      )}
    </div>
  );
}
