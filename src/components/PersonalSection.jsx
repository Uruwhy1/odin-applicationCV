import "../styles/section.css";
import UserIcon from "../assets/images/user.svg?react";
import FileIcon from '../assets/images/file-text.svg?react'

export default function PersonalForm({
  phoneNumber,
  handlePhoneNumberChange,
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
  email,
  handleEmailChange,
  address,
  handleAddressChange,
  zipCode,
  handleZipCodeChange,
  city,
  handleCityChange,
  gender,
  handleGenderChange,
  nationality,
  handleNationalityChange,
  dateOfBirth,
  handleDateOfBirthChange,
  placeOfBirth,
  handlePlaceOfBirthChange,
}) {
  return (
    <div className="section">
      <div className="header">
        <UserIcon />
        <h1>Personal Information</h1>
      </div>

      <div className="form">
        <div className="two-columns">
          <label className="recommended">
            First Name
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="Lionel"
            />
          </label>
          <label className="recommended">
            Last Name
            <input
              type="text"
              value={lastName}
              placeholder="Messi"
              onChange={handleLastNameChange}
            />
          </label>
        </div>
        <div className="two-columns">
          <label className="recommended">
            Email Address
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="example@mail.com"
            />
          </label>
          <label className="recommended">
            Phone Number
            <input
              type="text"
              value={phoneNumber}
              placeholder="01234567"
              onChange={handlePhoneNumberChange}
              required
            />
          </label>
        </div>
        <label className="recommended">
          Address
          <input
            
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Messi's House"
          />
        </label>
        <div className="two-columns no-margin-bot">
          <label>
            Zip Code
            <input
              type="text"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="12345"
            />
          </label>
          <label>
            City
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Miami, Florida"
            />
          </label>
        </div>
        <div className="header second-header">
          <FileIcon />
          <h1>Additional Information</h1>
        </div>

        <div className="form no-margin">
          <div className="two-columns">
            <label>
              Gender
              <input
                type="text"
                value={gender}
                onChange={handleGenderChange}
                placeholder="Male"
              />
            </label>
            <label>
              Nationality
              <input
                type="text"
                value={nationality}
                onChange={handleNationalityChange}
                placeholder="Argentinian"
              />
            </label>
          </div>

          <div className="two-columns">
            <label>
              Date of Birth
              <input
                type="text"
                placeholder="10/03/1985"
                value={dateOfBirth}
                onChange={handleDateOfBirthChange}
              />
            </label>
            <label>
              Place of Birth
              <input
                type="text"
                placeholder="Buenos Aires, Argentina"
                value={placeOfBirth}
                onChange={handlePlaceOfBirthChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
