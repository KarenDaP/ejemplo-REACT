import React from 'react'
import './styles/Mas.css'
import add from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/Exercises/new">
        <img src={add} className="figure_img-add" alt="exercise"/>
    </Link>
)

export default AddButton