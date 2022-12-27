import React, { Component } from 'react'
import './index.css'

class Item extends Component {
  state = {mouse: false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  render() {
    const {mouse} = this.state
    const {name, done} = this.props
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : ''}} onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}

export default Item
