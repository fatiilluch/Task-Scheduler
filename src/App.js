import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

import {todos} from './toDos.json'
import TodoForm from './components/ToDoForm';
console.log(todos);
// import Navigation from './components/Navigation';

class App extends Component {

  constructor () {
    super();  // esto se pone para poder heredar toda la funcionalidad que nos trae el componente de react
    this.state = {    // estado de los datos en tiempo real
     todos: todos
    };
    this.agregarTareas = this.agregarTareas.bind(this);
  }

  agregarTareas(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  borrarTarea(index){
    if (window.confirm('Estas seguro de que queres borrar? ')){
    this.setState(
      {
        todos: this.state.todos.filter((todo, i ) => {
          return i != index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className= "col-md-4">
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3> {todo.title} </h3>
              <span className="badge rounded-pill bg-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p> {todo.description} </p>
              <mark> {todo.responsible} </mark>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.borrarTarea.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand text-white"> 
            Tasks   
            <span className="badge rounded-pill bg-light text-dark ms-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4"> 
            {todos}
          </div>
        </div>

        <div className="container">
          <div className="row mt-4"> 
            <TodoForm onAddTodo={this.agregarTareas}> </TodoForm> 
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;


// classname: para evitar conflictos entre class App y class de CSS

// una clase es la representacion de una parte de mi aplicacion
// puedo tener una clase App (mi app actual)
//             una clase Chat, que se encargue de encapsular los chats nomas 
//             una clase navigation, que es para la navegacion 


/*
  return (
      <div className="App">
        <Navigation titulo="Hola Mundo" />
        <Navigation titulo="Tengo sueño zzz" />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );

    siendo Navigation.js un component con:

    <nav className="navbar navbar-dark bg-dark">
      <a href="" className="text-white"> 
        Tasks
      </a>
    </nav>
*/