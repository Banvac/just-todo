import React from 'react';
import './TodoItem.css';

const TodoItem = ({id, label, delTodoItem, num, toggleItemProp, important, done }) => {
    let class_Name = "todo-item";

    if (important) class_Name += " important";
    if (done) class_Name += " done";

    return (
        <div className={ class_Name }>
            <span>{ num }</span>
            <span>{ label }</span>
            <button onClick={() => toggleItemProp(id, 'important') }>IMPORTANT</button>
            <button onClick={() => toggleItemProp(id, 'done') }>DONE</button>
            <button onClick={ delTodoItem }>DEL</button>
        </div>
    );
};

export default TodoItem;