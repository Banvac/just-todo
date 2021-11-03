import React from "react";
import TodoItem from "../Todo-item";
import './TodoList.css';

function TodoList({ todoItems, delTodoItem, toggleItemProp }) {

    return (
        <div className="todo-list">
            { todoItems.map((todoItem, i) => {

                return <TodoItem key={ todoItem.id }
                                 id={ todoItem.id }
                                 important={ todoItem.important }
                                 done={ todoItem.done }
                                 num={ i + 1 }
                                 label={ todoItem.label }
                                 delTodoItem={() => delTodoItem(todoItem.id)}
                                 toggleItemProp={ toggleItemProp }
                />
            })}
        </div>
    );
}

export default TodoList;