import React from 'react'
import Clock from './components/Clock'
import Title from './components/Title'
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';


class App extends React.Component {
  render(){
    return (
      <ErrorBoundary>
        <Title subtitle="How are you?">
          <h1>Welcome to this page!</h1>
        </Title>
        <Clock />
      </ErrorBoundary>
    );
  }
}


//CHECKPOINT: https://pt-br.reactjs.org/docs/fragments.html
export default App;