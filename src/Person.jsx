import { useState } from "react";

function NameInput({ handler, label, placeholder, value }) {
  return (
    <label>
      {label}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handler}
      />
      ;
    </label>
  );
}

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: `${e.target.value || "John"}` });
  };

  const handleLastName = (e) => {
    setPerson({ ...person, lastName: `${e.target.value || "Doe"}` });
  };

  return (
    <>
      <NameInput
        handler={handleFirstName}
        label="First Name: "
        placeholder="John"
        value={person.firstName}
      />
      <NameInput
        handler={handleLastName}
        label="Last Name: "
        placeholder="Doe"
        value={person.lastName}
      />
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default Person;
