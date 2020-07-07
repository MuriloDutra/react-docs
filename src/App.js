import React from 'react';
import './App.css';
import Header from './components/Header'
import Clock from './components/Clock'
import Reservation from './components/Reservation';
import Calculator from './components/Calculator';


function App() {
  return (
    <div className="App">
      <div className="body">
        <Header title="Welcome to this page" />
        <Clock />
        <Reservation />
        <Calculator />
      </div>
    </div>
  );
}
//CHECKPOINT: https://pt-br.reactjs.org/docs/composition-vs-inheritance.html 
export default App;