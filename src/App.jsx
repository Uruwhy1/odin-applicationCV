import "./styles/app.css";
import "./styles/variables.css";
import Builder from "./components/Builder";
import Preview from "./components/Preview";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
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

  return (
    <div className="app">
      <Builder
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        fullName={fullName}
        handleFullNameChange={handleFullNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        address={address}
        handleAddressChange={handleAddressChange}
        educationArray={educationArray}
        addEducation={addEducation}
        removeEducation={removeEducation}
        editEducation={editEducation}
      />
      <Preview
        phoneNumber={phoneNumber}
        fullName={fullName}
        email={email}
        address={address}
      />
    </div>
  );
}
