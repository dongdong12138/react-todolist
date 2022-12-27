import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  state = {
    todoList: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打代码', done: false},
    ]
  }

  addTodo = (data) => {
    const {todoList} = this.state
    this.setState({todoList: [data, ...todoList]})
  }

  updateTodo = (id, done) => {
    const {todoList} = this.state
    const newTodoList = todoList.map(item => {
      if (item.id === id) return {...item, done}
      else return item
    })
    this.setState({todoList: newTodoList})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todoList={todoList} updateTodo={this.updateTodo}/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App
