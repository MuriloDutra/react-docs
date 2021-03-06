import React, { createRef, Profiler, StrictMode } from 'react'
import Clock from './components/Clock'
import Title from './components/Title'
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import FancyButton from './components/REFs/FancyButton';
import NameForm from './components/UncontrolledComponents/NameForm';
import Counter from './components/ReactHooks/UseEffect/Counter.react';


class App extends React.Component {
  constructor(props){
    super(props)
    this.onRanderCallback = this.onRanderCallback.bind(this)
  }


  onRanderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions){
    /*console.log('id: ', id)//id - o prop "id" da árvore Profiler que acabou de atualizar 
    console.log('phase: ', phase)//phase - "mount" (se a árvore acabou de ser montada) ou "update" (se foi renderizada novamente)
    console.log('actualDuration: ', actualDuration)//actualDuration - tempo gasto renderizando a atualização enviada
    console.log('baseDuration: ', baseDuration)//baseDuration - tempo estimado para renderizar totalmente a subárvore sem memorização
    console.log('startTime: ', startTime)//startTime - quando o React começou renderizar essa atualização
    console.log('commitTime: ', commitTime)//commitTime - quando o React enviou essa atualização
    console.log('interactions: ', interactions)//interactions - um Set de interações pertencentes â essa atualização*/
  }


  render(){
    const buttonRef = createRef()

    return (
      <StrictMode>
        <Profiler id='mainProfiler' onRender={this.onRanderCallback}>
          <ErrorBoundary>
            <Title subtitle="How are you?">
              <h1>Welcome to this page!</h1>
            </Title>
            <Clock />
            <FancyButton ref={buttonRef} label="Click here!" />
            <NameForm />
            <Counter />
            
            {/*bubbles test*/}
            <div onClick={() => console.log("1")} style={{backgroundColor: 'red', width: 100}}>1 
              <div onClick={() => console.log("2")} style={{backgroundColor: 'yellow', width: 75}}>2
                <div onClick={() => console.log("3")} style={{backgroundColor: 'green', width: 50}}>3
                </div>
              </div>
            </div>
          </ErrorBoundary>
        </Profiler>
      </StrictMode>
    );
  }
}


//CHECKPOINT: https://pt-br.reactjs.org/docs/testing-recipes.html#mocking-modules
export default App