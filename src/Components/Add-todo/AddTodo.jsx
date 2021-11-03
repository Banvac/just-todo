import React from 'react';

const AddTodo = ({ addInpText, inputChangeHandler, addTodoItem }) => {

    return (
        <form  onSubmit={ addTodoItem } className="add-todo">
            <input placeholder="ENTER TODO NAME" value={ addInpText } onChange={ inputChangeHandler }/>

            <button className="btn" onClick={ addTodoItem }>ADD</button>
        </form>
    );
};

export default AddTodo;