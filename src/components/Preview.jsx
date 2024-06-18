import "../styles/preview.css";

export default function Preview({
  phoneNumber = { phoneNumber },
  fullName = { fullName },
  email = { email },
  address = { address },
}) {
  return (
    <div className="preview">
      <h1>{fullName}</h1>
      <h1>{email}</h1>
      <h1>{phoneNumber}</h1>
      <h1>{address}</h1>
    </div>
  );
}
