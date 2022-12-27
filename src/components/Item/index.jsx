import React, { Component } from 'react'
import './index.css'

class Item extends Component {
  state = {mouse: false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  handleCheck = (id) => {
    return (event) => {
      const { checked } = event.target
      this.props.updateTodo(id, checked)
    }
  }

  render() {
    const {mouse} = this.state
    const {id, name, done} = this.props
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : ''}} onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}

export default Item
