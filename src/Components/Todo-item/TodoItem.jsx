import React from 'react';

const TodoItem = ({ label, delTodoItem, num }) => {

    return (
        <div className="todo-item">
            <span>{ num }</span><span>{ label }</span><button onClick={ delTodoItem }>DEL</button>
        </div>
    );
};

export default TodoItem;