import { useState } from "react";
import NewEducationForm from "./NewEducationForm";
import AddIcon from "../assets/images/plus-square.svg?react";
import "../styles/section-two.css";

export default function EducationSection({
  educationArray,
  removeEducation,
  addEducation,
  editEducation,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editItem, setEditItem] = useState("");

  const handleToggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setEditItem(null);
  };

  const handleEditFormVisibility = (item) => {
    setEditItem(item);
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="section">
      <div className="header">
        <h1>Education</h1>
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
      {!isFormVisible && (
        <button className="add-button" onClick={handleToggleFormVisibility}>
          <AddIcon />
          Add a new education
        </button>
      )}
    </div>
  );
}

function EducationDisplay({
  educationArray,
  removeEducation,
  handleEditFormVisibility,
}) {
  return (
    <div>
      {educationArray.length > 0 ? (
        <ul>
          {educationArray.map((item) => (
            <li className="form-display" key={item.id}>
              <div className="info">
                <p className="bold">{item.degree}</p>
                <p>{item.school}</p>
                <p className="dates">
                  {item.startDate} - {item.endDate ? item.endDate : "Present"}
                </p>
              </div>
              <div className="display-buttons">
                <button
                  className="red-button"
                  onClick={() => removeEducation(item.id)}
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
        <p className="form-display">No education details added yet.</p>
      )}
    </div>
  );
}
