import { useState } from "react";

function ContactItem({ contact, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const handleSave = () => {
    onEdit({ ...contact, name, phone });
    setIsEditing(false);
  };

  return (
    <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm p-2 mb-3 gap-3">
      <img
        src={contact.avatar}
        alt="avatar"
        className="w-12 h-12 rounded-full object-cover border border-gray-300"
      />
      <div className="flex-1 item-center">
        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-2 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        ) : (
          <>
            <p className="text-base font-medium text-gray-800">
              {contact.name}
            </p>
            <p className="text-sm text-gray-500">{contact.phone}</p>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition"
          >
            Simpan
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded-md transition"
          >
            Edit
          </button>
        )}
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
