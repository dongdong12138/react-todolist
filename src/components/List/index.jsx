import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

class List extends Component {
  render() {
    const {todoList} = this.props
    return (
      <ul className="todo-main">
        {
          todoList.map(item => {
            return <Item key={item.id} {...item}/>
          })
        }
      </ul>
    )
  }
}

export default List
