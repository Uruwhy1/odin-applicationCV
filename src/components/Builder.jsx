import "../styles/builder.css";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";

export default function Builder({
  phoneNumber,
  handlePhoneNumberChange,
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  address,
  handleAddressChange,
  educationArray,
  addEducation
}) {
  return (
    <div className="builder">
      <div>
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
      </div>
      <div className="section-margin">
        <EducationForm 
          educationArray={educationArray}
          addEducation={addEducation}
        />
      </div>
    </div>
  );
}
