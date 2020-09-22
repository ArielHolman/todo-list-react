import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './todoComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      todos: []
    }
  }

// delete function needs to use set state

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    console.log("This is state", this.state.todos)
    this.setState({
      todos : [...this.state.todos, this.state.input],
      input: ''
    })
  }

  removeTodo = (i) => {
    console.log('remove function', i)
    const arrayOfTodos= this.state.todos
    arrayOfTodos.splice(i,1)
    this.setState({
      todos:[ ...arrayOfTodos]
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            <input value={this.state.input} onChange={this.handleChange}/>
            <button onClick={this.formSubmit}>Submit</button>
          </form>
          <TodoComponent todos={this.state.todos}
          removeTodo={(i) => this.removeTodo(i)} />
        </header>
      </div>
    )
  }
}

export default App;


// const clearTheList = () => {
//   const arrayOfTodos = document.getElementsByTagName("OL")
//   for (i = 0; i < arrayOfTodos.length; i++)
//       arrayOfTodos[i].innerHTML = null
// }