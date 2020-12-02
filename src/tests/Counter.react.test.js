import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Counter from '../components/ReactHooks/UseEffect/Counter.react'

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

it('can render and update a counter', () => {
    //Teste da primeira renderização e componentDidMount
    act(() => {
        ReactDOM.render(<Counter />, container)
    })

    const button = container.querySelector('button')
    const label = container.querySelector('p')
    
    expect(document.title).toBe('You clicked 0 times')
    expect(label.textContent).toBe('You clicked 0 times')

    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })

    expect(document.title).toBe('You clicked 1 times')
    expect(label.textContent).toBe('You clicked 1 times')
})