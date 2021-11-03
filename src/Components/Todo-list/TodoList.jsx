import React from "react";
import TodoItem from "../Todo-item";
import './TodoList.css';

function TodoList({ todoItems, delTodoItem }) {

    return (
        <div className="todo-list">
            { todoItems.map((todoItem, i) => {

                return <TodoItem key={ todoItem.id }
                                 num={ i + 1 }
                                 label={ todoItem.label }
                                 delTodoItem={() => delTodoItem(todoItem.id)}
                />
            })}
        </div>
    );
}

export default TodoList;