import "./styles/app.css";
import "./styles/variables.css";
import PersonalForm from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import WorkSection from "./components/WorkSection";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // PERSONAL SECTION STUFF
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = e.target.value.replace(/\D/g, ""); // remove non numbers
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  // EDUCATION SECTION STUFF
  const [educationArray, setEducationArray] = useState([
    {
      id: 1,
      school: "School Test",
      degree: "Elementary School",
      startDate: "20/04/2023",
      endDate: "23/05/2029",
    },
  ]);
  const addEducation = (newEducation) => {
    const educationWithId = { ...newEducation, id: uuidv4() }; // add uuid
    setEducationArray((prevEducationArray) => [
      ...prevEducationArray,
      educationWithId,
    ]);
  };
  const removeEducation = (id) => {
    setEducationArray((prevArray) =>
      prevArray.filter((entry) => entry.id !== id)
    );
  };
  const editEducation = (updatedEducation) => {
    setEducationArray((prevArray) =>
      prevArray.map((entry) =>
        entry.id === updatedEducation.id ? updatedEducation : entry
      )
    );
  };

  // WORK SECTION STUFF
  const [workArray, setWorkArray] = useState([
    {
      id: 1,
      name: "Netflix",
      role: "Data Analyst",
      startDate: "20/04/2023",
      endDate: "23/05/2029",
    },
  ]);

  const addWork = (newWork) => {
    const workWithId = { ...newWork, id: uuidv4() }; // add uuid
    setWorkArray((prevWorkArray) => [...prevWorkArray, workWithId]);
  };
  const removeWork = (id) => {
    setWorkArray((prevArray) => prevArray.filter((entry) => entry.id !== id));
  };
  const editWork = (updatedWork) => {
    setWorkArray((prevArray) =>
      prevArray.map((entry) =>
        entry.id === updatedWork.id ? updatedWork : entry
      )
    );
  };

  return (
    <div className="container">
        <PersonalForm
          phoneNumber={phoneNumber}
          handlePhoneNumberChange={handlePhoneNumberChange}
          fullName={fullName}
          handleFullNameChange={handleFullNameChange}
          email={email}
          handleEmailChange={handleEmailChange}
          address={address}
          handleAddressChange={handleAddressChange}
        />
      {false && (
        <div>
          <EducationSection
            educationArray={educationArray}
            addEducation={addEducation}
            removeEducation={removeEducation}
            editEducation={editEducation}
          />
        </div>
      )}
      {false && (
        <div>
          <WorkSection
            workArray={workArray}
            addWork={addWork}
            removeWork={removeWork}
            editWork={editWork}
          />
        </div>
      )}
    </div>
  );
}
