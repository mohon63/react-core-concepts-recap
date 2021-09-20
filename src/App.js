import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="MicroSoft" price="10000"></MyComponent>
      <MyComponent brand="Corola" price="122000"></MyComponent>
      <MyComponent brand="Sony" price="20000"></MyComponent>
      <MyComponent brand="Nokia" price="15000"></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>Users Loaded {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(porps) {
  const myStyle2 = {
    backgroundColor: 'rgb(2 49 60)',
    color: 'white',
    border: '3px solid yellow',
    borderRadius: '10px',
    margin: '15px',
    padding: '5px'
  }
  return (
    <div style={myStyle2}>
      <h2>Name: {porps.name}</h2>
      <p>Call me baby!!!: {porps.phone}</p>
    </div>
  )
}

function MyComponent(porps) {
  const [points, setPoints] = useState(1);
  // console.log(props);
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
      <h1>Yo Yo mama! {porps.brand}</h1>
      <h4>Asking money price: {porps.price} , I have points: {points}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: 'magenta', fontWeight: 'bold' }}>I can write my own component</p>
    </div>
  )
}
export default App;
