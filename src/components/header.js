import React from 'react'
import './styles/header.css'

const header = ({username}) => (
    <div className='container'>
        <header className='Fitness-User-Info'>
            <h1>Hello {username}!</h1>
            <p>Lets workout to get someone gains!</p>
        </header>
    </div>
)

export default header