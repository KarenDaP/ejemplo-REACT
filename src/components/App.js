import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExercisesNew'
import NotFound from '../pages/NotFound'

const App = () => (
        <BrowserRouter>
        <Routes>
            <Route exact path="/Exercises" element={<Exercises></Exercises>} />
            <Route exact path="/Exercises/new" element={<ExercisesNew></ExercisesNew>} />
            <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
        </BrowserRouter>
)


export default App