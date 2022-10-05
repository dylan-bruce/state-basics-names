import React, { useState } from 'react'

function UserForm({ createUser }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", firstName, lastName, email);
    createUser({firstName, lastName, email});
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  //console.log("Current value of name:", name);
  //console.log("Current value of email:", email);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder='Enter your first name...'
          onChange={handleFirstNameChange}
          value={firstName}
        />
      </label>
      <label htmlFor="lastName">
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder='Enter your last name...'
          onChange={handleLastNameChange}
          value={lastName}
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          type="email"
          name="email"
          placeholder='Enter your email...'
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm