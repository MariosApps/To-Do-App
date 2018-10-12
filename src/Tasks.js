import React from 'react';



const Tasks = ({tasks, removeTask, addClass}) => {
    const tasksList = tasks.length ? (
        tasks.map(item => {
            return (
                <div key={item.id} className="collection-item">
                    <h5>{item.task}<i className="material-icons secondary-content" onClick={() => {removeTask(item.id)}}>delete</i></h5>
                </div>
            )
        })
    ) : (
        <div><h5 className="center collection-item">You don't have any tasks!</h5></div>
    )
    return(
            <div>{tasksList}</div>
    )
}


export default Tasks