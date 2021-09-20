import logo from './logo.svg';
import './App.css';

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
  console.log(props);
  const myStyle = {
    backgroundColor: '#574180',
    color: 'white',
    border: '3px solid yellow',
    borderRadius: '10px',
    margin: '15px',
    padding: '5px'
  }
  return (
    <div style={myStyle}>
      <h1>Yo Yo mama! {props.brand}</h1>
      <p>Asking money: {props.price}</p>
      <p style={{ color: 'magenta', fontWeight: 'bold' }}>I can write my own component</p>
    </div>
  )
}
export default App;
