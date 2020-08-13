import React, { Suspense } from 'react'
import Clock from './components/Clock'
import Title from './components/Title'

const OutClickExample = React.lazy(() => import('./components/Accessiblity/OutClickExample'))

function App() {
  return (
    <div className="App">
      <div className="body">
        <Title subtitle="How are you?">
          <h1>Welcome to this page!</h1>
        </Title>
        <Clock />

        <Suspense fallback={<h1>LOADING INFORMATIONS</h1>}>
          <OutClickExample />
        </Suspense>
      </div>
    </div>
  );
}
//CHECKPOINT: https://pt-br.reactjs.org/docs/context.html
export default App;