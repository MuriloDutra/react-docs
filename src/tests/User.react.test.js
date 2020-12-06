import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import User from './Components/User'

let container;
beforeEach(() => {
    // configurar o elemento do DOM como o alvo da renderização
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    //Limpar na saída
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('renders user data', async () => {
    const testUser = {
        name: 'Luke Skywalker',
        height: "172",
        homeworld: 'http://swapi.dev/api/planets/1/'
    }

    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(testUser)
        })
    )

    await act(async () => {
        render(<User id="1"/>, container)
    })

    expect(container.querySelector('summary').textContent).toBe(testUser.name)
    expect(container.querySelector('strong').textContent).toBe(testUser.height)
    expect(container.querySelector('p').textContent).toBe(testUser.homeworld)

    global.fetch.mockRestore()
})