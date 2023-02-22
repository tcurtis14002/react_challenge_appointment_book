import React, { useState } from "react";

export const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((prevContacts) => {
      [...prevContacts];
    });
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
