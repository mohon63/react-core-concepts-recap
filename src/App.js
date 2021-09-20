import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyComponent brand="MicroSoft" price="10000"></MyComponent>
      <MyComponent brand="Corola" price="122000"></MyComponent>
      <MyComponent brand="Sony" price="20000"></MyComponent>
      <MyComponent brand="Nokia" price="15000"></MyComponent>
    </div>
  );
}

function MyComponent(props) {
  const [points, setPoints] = useState(1);
  console.log(props);
  const myStyle = {
    backgroundColor: '#574180',
    color: 'white',
    border: '3px solid yellow',
    borderRadius: '10px',
    margin: '15px',
    padding: '5px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>Yo Yo mama! {props.brand}</h1>
      <h4>Asking money price: {props.price} , I have points: {points}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: 'magenta', fontWeight: 'bold' }}>I can write my own component</p>
    </div>
  )
}
export default App;
