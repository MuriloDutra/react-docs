import React from 'react'
import Clock from './components/Clock'
import Title from './components/Title'
import OutClickExample from './components/Accessiblity/OutClickExample'


function App() {
  return (
    <div className="App">
      <div className="body">
        <Title subtitle="How are you?">
          <h1>Welcome to this page!</h1>
        </Title>
        <Clock />
        <OutClickExample />
      </div>
    </div>
  );
}
//CHECKPOINT: https://pt-br.reactjs.org/docs/code-splitting.html
export default App;