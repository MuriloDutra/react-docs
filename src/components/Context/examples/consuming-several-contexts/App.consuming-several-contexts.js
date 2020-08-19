import React, { Component, createContext } from 'react'


const ThemeContext = createContext('ligth')
const UserContext = createContext({
    name: 'Guest'
})


class App extends Component{
    render(){
        const { signedInUser, theme } = this.props

        // Componente App fornece os valores inicias do context
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}


function Layout(){
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    )
}


// Um componente pode consumir vários contexts.
function Content(){
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
}