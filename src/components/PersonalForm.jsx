import { useState } from "react";

export default function PersonalForm({
  phoneNumber,
  handlePhoneNumberChange,
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  address,
  handleAddressChange,
}) {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleToggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="form">
      <div className="header">
        <h1>Personal Information</h1>
        <span
          className={`hover-trigger ${isFormVisible ? 'active' : ""}`}
          onClick={handleToggleFormVisibility}
        ></span>
      </div>

      {isFormVisible && (
        <>
          <label className="recommended">
            Full Name
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Lionel Messi"
            />
          </label>
          <label className="recommended">
            Email
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
              placeholder="555-555-5555"
              onChange={handlePhoneNumberChange}
              required
            />
          </label>
          <label className="recommended">
            Address
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="City, Province"
            />
          </label>
        </>
      )}
    </div>
  );
}
