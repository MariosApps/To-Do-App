import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks : [
      { task: 'Learn React', id: 1},
      { task: 'Find Job', id: 2}
    ]
  }
  removeTask = (id) => {
    let tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    })
    this.setState({
      tasks: tasks
    })
  }

  addTask = (task) => {
    task.id = Math.random();
    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="red-text text-darken-2 center">To-Do-List</h2>
        <div className="collection">
          <Tasks tasks={this.state.tasks} removeTask={this.removeTask} addClass={this.addClass}/>
        </div>
        <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
