import React from 'react'
import {ThemeContext} from './theme-context'
import { themes } from "../dynamic-context/theme-context"
import ThemeToggleButton from './theme-toggler-button'


class App extends React.Component {
  constructor(props){
    super(props)
    
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: 
          state.theme === themes.dark
            ? themes.light
            : themes.dark
      }))
    }


    // Estado também contém a função de atualização
    // Passando para o provedor de contexto
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }


  render(){
    // Todo o estado é passado para o provedor
    return (
        <ThemeContext.Provider value={this.state}>
            <Content />
        </ThemeContext.Provider>
    );
  }
}


function Content(){
  return(  
    <div>
      <ThemeToggleButton />
    </div>
  )
}


export default App;