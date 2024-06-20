import { useState } from "react";
import NewEducationForm from "./NewEducationForm";
import arrowRight from "../assets/images/arrow-right.svg";


export default function EducationSection({
  educationArray,
  removeEducation,
  addEducation,
  editEducation
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
        <h1>Education</h1>
        <span
          className={`hover-trigger ${isFormVisible ? "active" : ""}`}
          onClick={handleToggleFormVisibility}
        ></span>
      </div>
      {isFormVisible && (
        <NewEducationForm
        addEducation={addEducation}
        editEducation={editEducation}
        handleToggleFormVisibility={handleToggleFormVisibility}
        editItem={editItem}
        />
      )}
      {!isFormVisible && (
        <EducationDisplay
          educationArray={educationArray}
          removeEducation={removeEducation}
          handleEditFormVisibility={handleEditFormVisibility}
        />
      )}
    </div>
  );
}

function EducationDisplay({ educationArray, removeEducation, handleEditFormVisibility }) {
  
  return (
    <div>
      {educationArray.length > 0 ? (
        <ul>
          {educationArray.map((item) => (
            <li className="education-display" key={item.id}>
              <h2>{item.degree}</h2>
              <p>{item.school}</p>
              <div className="dates">
                <p>{item.startDate}</p>
                <img src={arrowRight} alt="" />
                <p>{item.endDate}</p>
              </div>
              <div className="display-buttons">
                <button className="red-button" onClick={() => removeEducation(item.id)}>
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
        <p>No education details added yet.</p>
      )}
    </div>
  );
}
