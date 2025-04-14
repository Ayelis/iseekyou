import React from 'react';

const ContactListPanel = ({ contacts }) => {
  const grouped = contacts.reduce((acc, contact) => {
    const group = contact.group || 'Ungrouped';
    if (!acc[group]) acc[group] = [];
    acc[group].push(contact);
    return acc;
  }, {});
const statusIcons = {
  online: '/images/on.png',
  chat:   '/images/chat.png',
  away:   '/images/away.png',
  na:     '/images/na.png',
  occupy: '/images/occupy.png',
  dnd:    '/images/dnd.png',
  offline:'/images/off.png',
};

  return (
    <div className="contact-panel"> {}
      {Object.entries(grouped).map(([groupName, groupContacts]) => (
        <div key={groupName} className="group"> {}
          <div className="group-title">{groupName}</div> {}
          {groupContacts
            .sort((a, b) => b.statusOrder - a.statusOrder)
            .map(contact => (
              <div key={contact.id} className={`contact ${contact.status}`}>
                <img
                  src={statusIcons[contact.status]} 
                  alt={contact.status}
                  className="status-icon"
                />
                {contact.name}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ContactListPanel;