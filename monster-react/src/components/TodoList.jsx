import React, { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newTask.trim()) {
            setTasks([...tasks, newTask])
            setNewTask("")
        }
    };

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }


    return (
        <div>
            <h1>Todo List</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newTask} placeholder='Add a new Todo' />
                <button type='submit'>Add Todo</button>
            </form>

            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList