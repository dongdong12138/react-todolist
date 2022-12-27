import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearDone = () => {
    this.props.clearDoneTodo()
  }

  render() {
    const {todoList} = this.props
    const doneCount = todoList.filter(item => item.done).length
    const total = todoList.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={total && doneCount === total} onChange={this.handleCheckAll}/>
        </label>
        <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
        <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
      </div>
    )
  }
}

export default Footer
