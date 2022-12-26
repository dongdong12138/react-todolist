import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

class Header extends Component {
  handleKeyUp = (event) => {
    let { value } = event.target
    value = value.trim()
    if (event.keyCode !== 13) return
    if (!value) return
    const todo = {id: nanoid(), name: value, done: false}
    this.props.addTodo(todo)
    event.target.value = ''
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
