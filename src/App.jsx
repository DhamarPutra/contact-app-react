import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const editContact = (index, updatedContact) => {
    const newContacts = [...contacts];
    newContacts[index] = updatedContact;
    setContacts(newContacts);
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
  );

  return (
    <div className="w-screen min-h-screen p-4 flex items-start justify-center bg-gradient-to-br from-indigo-700 to-gray-900">
      <div className="w-96 rounded-lg bg-gradient-to-tl from-gray-900 to-indigo-700 shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Tambah Kontak
        </h1>
        <ContactForm addContact={addContact} />
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Daftar Kontak
        </h1>
          <input
            type="text"
            placeholder="Cari kontak..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        <div className="max-h-80 overflow-y-auto pr-1">
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
