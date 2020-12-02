import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Hello from './Components/Hello.react'

let container;

beforeEach(() => {
    //configurar o elemento do DOM como o alvo da renderização
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    //Limpar ao sair
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

test('renders with or without a name', () => {
    act(() => {
        render(<Hello name="Murilo" />, container)
    })
    expect(container.textContent).toBe('Hello, Murilo!')

    act(() => {
        render(<Hello name="Jenny" />, container)
    })
    expect(container.textContent).toBe('Hello, Jenny!')

    act(() => {
        render(<Hello name="Margaret" />, container)
    })
    expect(container.textContent).toBe('Hello, Margaret!')
})