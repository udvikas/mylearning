import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [firstName, setFirstName] = useState(() => {
    window.localStorage.getItem("showFirstName") 
  });

  const [lastName, setLastName] = useState(() => {
    window.localStorage.getItem("showLastName")
  });

  const firstNameHandler = (e) => setFirstName(e.target.value);
  const lastNameHandler = (e) => setLastName(e.target.value);

  useEffect(() => {
    window.localStorage.setItem("showFirstName", firstName);
    window.localStorage.setItem("showLastName", lastName);
  });

  return (
    <div>
      <input value={firstName} onChange={firstNameHandler} />
      <input value={lastName} onChange={lastNameHandler} />
      <p>
        <span>
          {firstName} {lastName}
        </span>
      </p>
    </div>
  );
};

export default Greeting;
