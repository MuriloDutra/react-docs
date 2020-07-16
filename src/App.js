import React from 'react'
import './App.css'
import Clock from './components/Clock'
import Title from './components/Title'
import Glossario from './components/Accessiblity/Glossario'
import Form from './components/Accessiblity/Form/Forms'


function App() {
  return (
    <div className="App">
      <div className="body">
        <Title subtitle="How are you?">
          <h1>Welcome to this page!</h1>
        </Title>
        <Clock />
        <Glossario />
        <Form />
      </div>
    </div>
  );
}
//CHECKPOINT: https://pt-br.reactjs.org/docs/accessibility.html#mouse-and-pointer-events 
export default App;