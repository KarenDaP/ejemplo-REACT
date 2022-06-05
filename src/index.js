//const element = document.createElement('h1')
//element.innerText = 'Hola mundo'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App></App>)