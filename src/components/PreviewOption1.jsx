export default function Layout({
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
  return (
    <>
      <div className="left-side"></div>
      <div className="right-side">
        <h1 className="title">Curriculum Vitae</h1>
        <div className="header">
          <h3>Personal Information</h3>
        </div>
        <div className="information">
          <div className="left">
            {firstName && lastName && <p>Name</p>}
            {address && <p>Address</p>}
            {email && <p>Email</p>}
            {phoneNumber && <p>Phone Number</p>}
            {gender && <p>Gender</p>}
            {nationality && <p>Nationality</p>}
            {dateOfBirth && <p>Date of Birth</p>}
            {placeOfBirth && <p>Place of Birth</p>}
          </div>
          <div className="right">
            {firstName && lastName && <p>{firstName + " " + lastName}</p>}
            {address && <p>{address + " " + zipCode + " " + city}</p>}
            {email && <p>{email}</p>}
            {phoneNumber && <p>{phoneNumber}</p>}
            {gender && <p>{gender}</p>}
            {nationality && <p>{nationality}</p>}
            {dateOfBirth && <p>{dateOfBirth}</p>}
            {placeOfBirth && <p>{placeOfBirth}</p>}
          </div>
        </div>
        <div className="header">
          <h3>Work Experience</h3>
        </div>
        <ul>
          {workArray.map((item) => (
            <li className="information" key={item.id}>
              <p className="left">
                {item.startDate} - {item.endDate ? item.endDate : "Present"}
              </p>
              <div className="right">
                <p>{item.role}</p>
                <p className="normal-italics">{item.name + ", " + item.location}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="header">
          <h3>Education</h3>
        </div>
        <ul>
          {educationArray.map((item) => (
            <li className="information" key={item.id}>
              <p className="left">
                {item.startDate} - {item.endDate ? item.endDate : "Present"}
              </p>
              <div className="right">
                <p>{item.degree}</p>
                <p className="normal-italics">{item.school + ", " + item.location}</p>
              </div>
            </li>
          ))}
        </ul>      </div>
    </>
  );
}
