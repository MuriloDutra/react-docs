import React from 'react'

const ComponentWithSubscription = withSubscription(FirstComponent, (DataSource, props) => DataSource.getData(props.id))


function withSubscription(WrappedComponent, selectData){// A função recebe um componente...
    // ...e retorna outro componente...
    return class extends React.Component{
        constructor(props){
            super(props)
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                data: selectData(DataSource, props)
            }
        }


        componentDidMount(){
            // ... que lida com a subscrição...
            DataSource.addChangeListener(this.handleChange)
        }


        componentWillUnmount(){
            DataSource.addChangeListener(this.handleChange)
        }


        handleChange(){
            this.setState({data: selectData(DataSource, this.props)})
        }


        render(){
            // ... e renderiza o componente encapsulado com os dados novos!
            // Note que nós passamos diretamente qualquer prop adicional
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}