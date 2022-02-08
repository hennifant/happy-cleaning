import './App.css';
import Room from './Room.js';

export default function App() {
  return (
    <main className="App">
      <Room text="Wohnzimmer" />
      <Room text="Küche" />
      <Room text="Bad" />
    </main>
  );
}
