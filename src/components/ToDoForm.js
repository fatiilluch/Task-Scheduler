import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title : '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); //evento que evita refrescar la pagina
        this.props.onAddTodo(this.state);
        console.log('sending data...');
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }

    handleInput(e) {            // se ejecuta cada vez que haga un cambio dentro del input text
        const { value, name } = e.target;
        console.log(value, name);
        this.setState(
            {
                [name]: value
            }
        ); 
    }


    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body" >
                    <div className="form-group ">
                        <input 
                            type="text" 
                            onChange={this.handleInput} 
                            name="title" 
                            className="form-control" 
                            placeholder="Title">
                        </input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            onChange={this.handleInput} 
                            name="responsible" 
                            className="form-control" 
                            placeholder="Responsible"></input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            onChange={this.handleInput} 
                            name="description" 
                            className="form-control" 
                            placeholder="Description"></input>
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option> low </option>
                            <option> medium </option>
                            <option> high </option>
                            <option> urgent </option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary"> Guardar </button>
                </form>
            </div>
        ) 
    }
}

export default TodoForm;