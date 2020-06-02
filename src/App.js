import React from 'react';
import './App.css';
import Header from './components/Header'
import Clock from './components/Clock'
import Toggle from './components/Toggle'
import Greetings from './components/Greetings'

function App() {
  function pureFunction(value01, value02){
    return value01 + value02;
  }

  function impureFunction(account, amount){
    account.total -= amount;
  }

  return (
    <div className="App">
      <div className="body">
        <Header title="Welcome to this page" />
        <Clock />
        <Toggle />
        <Greetings isLoggedIn={true}/>
      </div>
    </div>
  );
}

export default App;
