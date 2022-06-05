import React from 'react'

class ExercisesForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        const {onChange, form} = this.props
        return(
           <div className = "container">
               <form 
                    onSubmit={this.handleSubmit}
               >
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "title"
                            type = "text"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                       />
                   </div>
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "description"
                            type = "text"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                       />
                    </div>
                    <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "img"
                            type = "text"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                       />
                   </div>
                   <div className = "form-row">
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "leftColor"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                       </div>
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "rightColor"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
                            />
                       </div>
                    </div>
                <button
                    className = "btn btn-primary"
                    type = "submit"
                >
                    Submit
                </button>   
               </form>
           </div>
        )
    }
}

export default ExercisesForm