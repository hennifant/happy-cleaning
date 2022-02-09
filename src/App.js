import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import { useState } from 'react';

export default function App() {
  const [rooms, setRooms] = useState([
    {
      text: 'Küche',
      description: 'Herd nicht vergessen',
      isDescriptonShown: true,
      isClean: false,
    },
    {
      text: 'Bad',
      description: 'Toilette vorher einweichen',
      isDescriptonShown: true,
      isClean: false,
    },
    {
      text: 'Schlafzimmer',
      description: 'Staubsaugen unter dem Bett',
      isDescriptonShown: true,
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      description: 'Kissen ausklopfen',
      isDescriptonShown: true,
      isClean: false,
    },
  ]);

  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isDescriptonShown, isClean }, index) => (
        <Room
          key={text}
          text={text}
          description={description}
          isDescriptonShown={isDescriptonShown}
          isClean={isClean}
          toggleStatus={event => {
            event.stopPropagation();
            setRooms([
              ...rooms.slice(0, index),
              { ...rooms[index], isClean: !isClean },
              ...rooms.slice(index + 1),
            ]);
          }}
        />
      ))}
    </main>
  );
}
