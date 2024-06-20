import "../styles/preview.css";

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
}) {
  return (
    <div className="preview">
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{email}</h1>
      <h1>{phoneNumber}</h1>
      <h1>{address}</h1>
      <h1>{zipCode}</h1>
      <h1>{city}</h1>
      <h1>{gender}</h1>
      <h1>{nationality}</h1>
      <h1>{dateOfBirth}</h1>
      <h1>{placeOfBirth}</h1>

    </div>
  );
}
