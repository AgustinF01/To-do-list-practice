import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    );
};

export default Task;