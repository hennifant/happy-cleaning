import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  const rooms = [
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
      isClean: true,
    },
  ];
  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isDescriptonShown, isClean }) => (
        <Room
          key={text}
          text={text}
          description={description}
          isDescriptonShown={isDescriptonShown}
          isClean={isClean}
        />
      ))}
    </main>
  );
}
