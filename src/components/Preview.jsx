import "../styles/preview.css";

export default function Preview({
  phoneNumber = { phoneNumber },
  fullName = { fullName },
  email = { email },
  address = { address },
  educationArray = {educationArray}
}) {
  return (
    <div className="preview">
      <h1>{fullName}</h1>
      <h1>{email}</h1>
      <h1>{phoneNumber}</h1>
      <h1>{address}</h1>
      <ul>{educationArray.map(item => {
        return <li key={item.id}>{item.school}</li>
      })}</ul>
    </div>
  );
}
