import "./styles/variables.css";

import ArrowRight from "./assets/images/arrow-right.svg?react";
import ArrowLeft from "./assets/images/arrow-left.svg?react";

import PersonalForm from "./components/PersonalSection";
import EducationSection from "./components/EducationSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import Preview from "./components/Preview.jsx";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function App() {
  const [currentView, setCurrentView] = useState(0);

  const handleNextViewChange = (e) => {
    e.target.blur();

    if (currentView == 2) return;
    else setCurrentView(currentView + 1);
  };
  const handlePrevViewChange = (e) => {
    e.target.blur();
    setCurrentView(currentView - 1);
  };

  // PERSONAL SECTION STUFF
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = e.target.value.replace(/\D/g, ""); // remove non numbers
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleZipCodeChange = (e) => setZipCode(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleNationalityChange = (e) => setNationality(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
  const handlePlaceOfBirthChange = (e) => setPlaceOfBirth(e.target.value);

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
      {currentView == 0 && (
        <PersonalForm
          phoneNumber={phoneNumber}
          handlePhoneNumberChange={handlePhoneNumberChange}
          firstName={firstName}
          lastName={lastName}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          email={email}
          handleEmailChange={handleEmailChange}
          address={address}
          handleAddressChange={handleAddressChange}
          zipCode={zipCode}
          handleZipCodeChange={handleZipCodeChange}
          city={city}
          handleCityChange={handleCityChange}
          gender={gender}
          handleGenderChange={handleGenderChange}
          nationality={nationality}
          handleNationalityChange={handleNationalityChange}
          dateOfBirth={dateOfBirth}
          handleDateOfBirthChange={handleDateOfBirthChange}
          placeOfBirth={placeOfBirth}
          handlePlaceOfBirthChange={handlePlaceOfBirthChange}
        />
      )}
      {currentView == 1 && (
        <EducationSection
          educationArray={educationArray}
          addEducation={addEducation}
          removeEducation={removeEducation}
          editEducation={editEducation}
        />
      )}
      {currentView == 1 && (
        <WorkSection
          workArray={workArray}
          addWork={addWork}
          removeWork={removeWork}
          editWork={editWork}
        />
      )}
      {currentView == 2 && (
        <Preview
          phoneNumber={phoneNumber}
          firstName={firstName}
          lastName={lastName}
          email={email}
          address={address}
          zipCode={zipCode}
          city={city}
          gender={gender}
          nationality={nationality}
          dateOfBirth={dateOfBirth}
          placeOfBirth={placeOfBirth}

          educationArray={educationArray}
          workArray={workArray}
        />
      )}
      {currentView !== 2 && (
        <button
          className="next-slide orange-button"
          onClick={handleNextViewChange}
        >
          {currentView == 1 ? "Final Result" : "Next Form"}
          <ArrowRight />
        </button>
      )}

      {currentView !== 0 && (
        <button className="previous-slide" onClick={handlePrevViewChange}>
          <ArrowLeft />
          Previous Form
        </button>
      )}
    </div>
  );
}

/*   
  
  */
