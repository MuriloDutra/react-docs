import React from 'react'


class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }


    static getDerivedStateFromError(error) {
        // Deve retornar um novo objeto state, assim atualizando o state para que a próxima renderização mostre a UI alternativa.
        return { hasError: true};
    }

    componentDidCatch(error, errorInfo){
        /*
            Você também pode registrar o erro em um serviço de relatórios de erro
            reportErrorToSomewhere(error, errorInfo)
        */
        this.setState({error: errorInfo.componentStack})
    }


    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1>Algo deu errado!</h1>
                    <p>Error stack: {this.state.error}</p>
                </div>
            )
        }

        return this.props.children
    }
}


export default ErrorBoundary