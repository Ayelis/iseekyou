import React from 'react';
import ContactListPanel from './components/ContactListPanel';
import TitleBar from './components/TitleBar';

const sampleContacts = [
  { id: 1, name: 'Pete', group: 'Online', status: 'online', statusOrder: 2 },
  { id: 2, name: 'Grace', group: 'Online', status: 'chat', statusOrder: 2 },
  { id: 3, name: 'Steph', group: 'Online', status: 'away', statusOrder: 1 },
  { id: 4, name: 'Ruth', group: 'Online', status: 'na', statusOrder: 1 },
  { id: 5, name: 'Max', group: 'Online', status: 'dnd', statusOrder: 1 },
  { id: 6, name: 'Richie', group: 'Offline', status: 'offline', statusOrder: 0 },
];

function App() {
  return (
    <div className="retro-window">
      <TitleBar />
      <ContactListPanel contacts={sampleContacts} />
    </div>
  );
}

export default App;
