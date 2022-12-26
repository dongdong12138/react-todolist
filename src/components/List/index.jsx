import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <li>
          <label>
            <input type="checkbox"/>
            <span>吃饭</span>
          </label>
          <button className="btn btn-danger" style={{display: 'none'}}>删除</button>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
            <span>睡觉</span>
          </label>
          <button className="btn btn-danger" style={{display: 'none'}}>删除</button>
        </li>
      </ul>
    )
  }
}

export default List
