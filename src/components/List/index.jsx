import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

class List extends Component {
  render() {
    console.log('this.props:', this.props)
    return (
      <ul className="todo-main">
        <Item />
      </ul>
    )
  }
}

export default List
