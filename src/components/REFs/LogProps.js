import React, { forwardRef } from 'react'

export function logProps(WrappedComponent){

    class LogProps extends React.Component{
        componentDidMount(){
            console.log('props: ', this.props)
        }
        
        render(){
            const {forwardedRef, ...rest} = this.props

            return <WrappedComponent ref={forwardedRef} {...rest} />
        }
    }

    
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
    
    /*
        Se você nomear a função de renderização, DevTools também irá incluir seu nome: 
            function forwardRefFunction(props, ref) {
                return <LogProps {...props} forwardedRef={ref} />;
            }
            return forwardRef(forwardRefFunction)
    */
}