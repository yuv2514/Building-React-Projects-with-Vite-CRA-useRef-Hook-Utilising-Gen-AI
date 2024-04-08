import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
