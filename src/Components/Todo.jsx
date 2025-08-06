import React, { useState } from 'react';
import './todo.css';
function Todo(){
const [tasks, setTasks] = useState([
    'Hit the gym',
    'Pay bills',
    'Meet George',
    'Buy eggs',
    'Read a book',
    'Organize office'
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  const toggleCheck = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { text: task.text, checked: !task.checked } : task
    );
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h2>My To Do List</h2>
      <div className="header">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addTask} className="addBtn">Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span onClick={() => removeTask(index)} className="close">×</span>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default Todo;