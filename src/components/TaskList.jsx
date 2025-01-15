import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import Task from './Task';

const TaskList = ({ tasks, toggleTask, deleteTask, setTasks }) => {
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setTasks((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={tasks} strategy={rectSortingStrategy}>
                <div className="task-grid">
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default TaskList;