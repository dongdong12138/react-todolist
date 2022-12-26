import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
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
        <div className="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>
            <span>已完成0</span> / 全部2
          </span>
          <button className="btn btn-danger">清除已完成任务</button>
        </div>
      </div>
    </div>
  )
}

export default App
