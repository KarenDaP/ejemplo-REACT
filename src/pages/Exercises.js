import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Header from '../components/header'
import Mas from '../components/Mas'

class Exercises extends React.Component {
    state = {
        data: [{
            "id": 1,
            "title": "Technique Guides",
            "description": "Learn amazing street workout and calisthenics",
            "img": "https://3.bp.blogspot.com/-XZ54osiMrKM/V8brZA1FM0I/AAAAAAAGBKg/sxEnAYrQeCcINo1SvA5XFG70ntxt7l2qACLcB/s1600/PERSONAS%2BHACIENDO%2BDEPORTES%2B%252839%2529.png",
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        },{
            "id": 2,
            "title": "Skills Training",
            "description": "Learn the secrets of bodyweight techniques",
            "img": "https://images.vexels.com/media/users/3/208268/isolated/preview/899f67b99c2e34c06d5ef43ee4d5bc82-caracter-de-ejercicio-hombre-feliz.png",
            "leftColor": "#17EAD9",
            "rightColor": "#6078EA"
        },{
            "id": 3,
            "title": "Strength Training",
            "description": "Train anytime, everywere and become a superhero!",
            "img": "https://images.vexels.com/media/users/3/136491/isolated/lists/5ecfc6015087e42a5deb98d549fafd85-hombre-haciendo-dibujos-animados-de-marat-n.png",
            "leftColor": "#FAD961",
            "rightColor": "#F76B1C"
        }]            
        } 

    render(){
        return (
            <div>
                <Header 
                username="r"
                />
                <ExerciseList
                    exercises={this.state.data}
                />
                <Mas 
                />
            </div>)
    }
}


export default Exercises