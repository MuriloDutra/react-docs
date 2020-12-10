import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Contact from './Components/Contact.react'

jest.mock('./Components/Map.react', () => {
    return function DummyMap(props){
        return (
            <div data-testid="map">
                {props.center.lat}:{props.center.long}
            </div>
        )
    }
})

let container = null;
beforeEach(() => {
    //configurar o elemento do DOM como o alvo da renderização
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('Should render contact information', () => {
    const center = { lat: 0, long: 0 }
    act(() => {
        render(
            <Contact
                name='Murilo Dutra'
                email='murilo@example.com'
                site='http://google.com'
                center={center}
            />,
            container
        )
    })

    expect(
        container.querySelector("[data-testid='email']").getAttribute('href')
    ).toEqual('mailTo: murilo@example.com')

    expect(
        container.querySelector("[data-testid='site']").getAttribute('href')
    ).toEqual('http://google.com')

    expect(
        container.querySelector("[data-testid='map']").textContent
    ).toEqual('0:0')
})