import React from 'react';
import './App.css';
import Header from './components/Header'
import Clock from './components/Clock'

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
      </div>
    </div>
  );
}

export default App;
