import React from 'react';
import './App.css';
import Header from './components/Header'
import Clock from './components/Clock'
import Toggle from './components/Toggle'
import Greetings from './components/Greetings'
import Table from './components/Table'

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
        <Table numbers={[1, 2, 3, 4, 5]}/>
      </div>
    </div>
  );
}
//CHECKPOINT: https://pt-br.reactjs.org/docs/lists-and-keys.html#keys-must-only-be-unique-among-siblings 
export default App;