import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Hello from './Components/Hello.react'
import pretty from 'pretty'

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

it('Should render a greeting', () => {
    act(() => {
        render(<Hello />, container)
    })
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot() /* ... gets filled automatically by jest ... */

    act(() => {
        render(<Hello name="Jenny" />, container)
    })
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot()

    act(() => {
        render(<Hello name="Margaret" />)
    })
    expect(container.innerHTML).toMatchInlineSnapshot()
})