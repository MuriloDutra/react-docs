import React from 'react';
import './App.css';
import Header from './components/Header'
import Clock from './components/Clock'
import Reservation from './components/Reservation';


function App() {
  return (
    <div className="App">
      <div className="body">
        <Header title="Welcome to this page" />
        <Clock />
        <Reservation />
      </div>
    </div>
  );
}
//CHECKPOINT: https://pt-br.reactjs.org/docs/lists-and-keys.html#keys-must-only-be-unique-among-siblings 
export default App;