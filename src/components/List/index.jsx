import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

class List extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const {todoList, updateTodo, deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todoList.map(item => {
            return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}

export default List
