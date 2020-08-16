import React from 'react'
import Clock from './components/Clock'
import Title from './components/Title'


class App extends React.Component {

  render(){  
    return (
      <div className="App">
        <div className="body">
          <Title subtitle="How are you?">
            <h1>Welcome to this page!</h1>
          </Title>
          
          <Clock />
        </div>
      </div>
    );
  }
}


//CHECKPOINT: https://pt-br.reactjs.org/docs/context.html#updating-context-from-a-nested-component
export default App;