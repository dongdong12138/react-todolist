import React, { Component } from 'react'
import './index.css'

class Header extends Component {
  handleKeyUp = (event) => {
    if (event.keyCode !== 13) return
    const todo = {id: '004', name: event.target.value, done: false}
    this.props.addTodo(todo)
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default Header
