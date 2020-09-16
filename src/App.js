import React, { createRef } from 'react'
import Clock from './components/Clock'
import Title from './components/Title'
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import FancyButton from './components/REFs/FancyButton';


class App extends React.Component {
  render(){
    const buttonRef = createRef()

    return (
      <ErrorBoundary>
        <Title subtitle="How are you?">
          <h1>Welcome to this page!</h1>
        </Title>
        <Clock />
        <FancyButton ref={buttonRef} label="Click here!" />
      </ErrorBoundary>
    );
  }
}


//CHECKPOINT: https://pt-br.reactjs.org/docs/integrating-with-other-libraries.html
export default App;