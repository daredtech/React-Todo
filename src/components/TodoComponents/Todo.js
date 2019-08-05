import React from 'react';


const Todo = (props) => {

    const {id, task, completed} = props;

    return(
        <div className = 'todo-item'
            id = {id}
            completed = {completed}
            onClick = {() => props.toggleItem({id})}
        >
            <p> {task}</p>
        </div>
    )
}

 export default Todo;