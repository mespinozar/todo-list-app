import React, { Component } from 'react'
import './TodosScreen.css'
import InputValue from '../components/InputValue'
import Button from '../components/Button'

export default class TodosScreen extends Component {

  state={
    todos:[],
    newTodo:''
  }

  setNewTodo = (todo) => {
    this.setState({...this.state, newTodo:todo})
  }

  addTodoIntoList = async (e) => {
    e.preventDefault()
    await this.setState({...this.state, todos:[...this.state.todos, {id:this.state.todos.length,task:this.state.newTodo}]})
    this.setState({...this.state,newTodo:''})
  }

  removeFromList = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !==id);
    this.setState({...this.state,todos:filteredTodos})
    
  }


  render() {
    return (
      <div className="App App-header">
        <h1>Todo App</h1>
        <form>
          <InputValue
            title='Add new todos'
            value={this.state.newTodo}
            setValue={this.setNewTodo}
          />
          <Button
            handleClick={(e) => this.addTodoIntoList(e)}
            title='Add'
            type='submit'
          />
        </form>
        {this.state.todos.map(todo => (
          <div key={todo.id} className="d-flex justify-content-between" mt-4>
            <p>{todo.task}</p>
            <button onClick={() => this.removeFromList(todo.id) }>X</button>
          </div>
        ))}
      </div>
    )
  }
}
