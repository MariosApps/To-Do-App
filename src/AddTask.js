import React, { Component } from 'react';


class AddTask extends Component {
    state = {
        task: ''
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            task: ''
        })
    } 
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add new task" onChange={this.handleChange} value={this.state.task}/>
                </form>
            </div>
        )
    }
}

export default AddTask