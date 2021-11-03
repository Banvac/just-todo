import React, { useState } from "react";
import TodoList from "../Todo-list/TodoList";
import AddTodo from "../Add-todo";
import Filter from "../Filter";
import Search from "../Search";
//import './App.css';

function App() {

    const [todoItems, setTodoItems] = useState([
        {id: 0, label: "Find a brain", important: true, done: false},
        {id: 1, label: "Drink coffee with girlfriends", important: false, done: false},
        {id: 2, label: "Become a neural network", important: false, done: true},
        {id: 3, label: "Resist the chaos", important: false, done: true},
        {id: 4, label: "Make a lot of money", important: true, done: false},
    ]);

    const [addInpText, setAddInpText] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

    const inputChangeHandler = (e) => setAddInpText(e.target.value);

    const delTodoItem = (id) => {
        setTodoItems(todoItems.filter(item => item.id !== id));
    }

    const addTodoItem = (e) => {
        e.preventDefault();

        if (addInpText) {
            const todoItem = {};

            todoItem.id = new Date().getMilliseconds();
            todoItem.label = todoItems.label = addInpText;

            setAddInpText('');
            setTodoItems([...todoItems, todoItem]);
        }
    }

    const changeFilter = (event) => {
        setFilterBy(event.target.value);
    }

    const setSearchWord = (e) => {
        setSearchBy(e.target.value);
    }

    const filteredItems = () => {
        let result = todoItems;

        if (filterBy) result = result.filter(item => item[filterBy]);

        if (searchBy) result = result.filter(item => item.label.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase()));

        return result;
    }

  return (
    <div className="App">
        <div className="todo-wrapper">
            <h1>Do something already</h1>
            <hr/>
            <Filter filterBy={ filterBy } changeFilter={ changeFilter }/>
            <hr/>
            <input type="text" placeholder="Search" onChange={ setSearchWord }/>
            <Search setSearchWord={ setSearchWord } />
            <hr/>
            <TodoList todoItems={ filteredItems() } delTodoItem={ delTodoItem }/>
            <hr/>
            <AddTodo addTodoItem={ addTodoItem } inputChangeHandler={ inputChangeHandler } addInpText={ addInpText }/>
            <hr/>
        </div>
    </div>
  );
}

export default App;
