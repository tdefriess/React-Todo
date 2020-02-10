import React from 'react';

const Todo = props => {
    return (
        <div
            oncClick={() => props.toggleItem(props.item.id)}
            className = {`items${props.item.completed ? ' purchased' : ''}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;