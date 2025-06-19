import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          onDelete={() => deleteContact(index)}
          onEdit={(updatedContact) => editContact(index, updatedContact)}
        />
      ))}
    </div>
  );
}

export default ContactList;
