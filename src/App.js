import {Component} from 'react'
import {v4} from 'uuid'
import ButtonsTag from './components/ButtonsTag'
import './App.css'
// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    task: '',
    category: tagsList[0].optionId,
    tasksList: [],
    activeID: '',
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value})
  }

  onChangeInput = event => {
    this.setState({task: event.target.value})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {task, category} = this.state
    const newDetails = {
      id: v4(),
      task,
      category,
      isTrue: false,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newDetails],
      task: '',
    }))
  }

  onUpdateBtns = id => {
    const {tasksList} = this.state

    const filteredData = tasksList.filter(each => each.category === id)
    this.setState({tasksList: filteredData})
    // this.setState(prevState => ({
    //   activeID: id,
    //   tasksList: prevState.tasksList.filter(each => {
    //     if (id === each.category) {
    //       return {...each, isTrue: !each.isTrue}
    //     }
    //     return each
    //   }),
    // }))
  }

  render() {
    const {category, task, tasksList, activeID} = this.state
    // const filteredList = tasksList.filter(data => {
    //     if (data.category === activeID && data.isTrue === true) {
    //         return data
    //     }

    // } )

    console.log()
    return (
      <div className="main-bg-container">
        <form onSubmit={this.onSubmitDetails} className="first-container">
          <h1 className="first-cont-heading">Create a task!</h1>

          <label className="label-text" htmlFor="task">
            Task
          </label>
          <input
            value={task}
            placeholder="Enter the task here"
            onChange={this.onChangeInput}
            className="input-container"
            id="task"
            type="text"
          />

          <label className="label-text" htmlFor="tags">
            tags
          </label>
          <select
            className="input-container"
            value={category}
            onChange={this.onChangeCategory}
            id="tags"
          >
            {tagsList.map(eachTag => (
              <option value={eachTag.optionId} key={eachTag.optionId}>
                {eachTag.displayText}
              </option>
            ))}
          </select>

          <button type="submit" className="add-btn">
            Add Task
          </button>
        </form>
        <div className="second-container">
          <h1 className="second-title">Tags</h1>
          <ul className="second-ul-container">
            {tagsList.map(eachItem => (
              <ButtonsTag
                onUpdateBtns={this.onUpdateBtns}
                data={eachItem}
                key={eachItem.optionId}
              />
            ))}
          </ul>
          <h1 className="second-title">Tasks</h1>
          {tasksList.length === 0 ? (
            <div className="no-tasks-container">
              <p className="no-tasks-title">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="tasks-ul-container">
              {tasksList.map(eachTask => (
                <li className="tasks-list-element">
                  <p className="tasks-name">{eachTask.task}</p>
                  <p className="task-category">{eachTask.category}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
