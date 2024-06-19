import "../styles/builder.css";
import "../styles/builder-forms.css"
import PersonalForm from "./PersonalSection";
import EducationSection from "./EducationSection";

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
  addEducation,
  removeEducation
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
        <EducationSection 
          educationArray={educationArray}
          addEducation={addEducation}
          removeEducation={removeEducation}
        />
      </div>
    </div>
  );
}
