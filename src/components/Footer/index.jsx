import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
  render() {
    const { todoList } = this.props
    const doneCount = todoList.filter(item => item.done).length
    const total = todoList.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

export default Footer
