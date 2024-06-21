import "../styles/preview.css";
import "../styles/option1.css";
import "../styles/print.css";
import LayoutOption1 from "./PreviewOption1.jsx";

export default function Preview({
  phoneNumber,
  firstName,
  lastName,
  email,
  address,
  zipCode,
  city,
  gender,
  nationality,
  dateOfBirth,
  placeOfBirth,
  educationArray,
  workArray,
}) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="preview">
        <LayoutOption1
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
      </div>
      <button className="print green-button" onClick={handlePrint}>
        Print
      </button>
    </>
  );
}
