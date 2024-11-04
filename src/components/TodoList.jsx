import React from 'react';

const TodoList = ({taskList, setTaskList}) => {

    const handleDelete = (id) => {
        console.log("task delete", id);
        setTaskList(taskList.filter((task) => task.id !== id));
    }

    const handleComplete = (id) => {
        console.log("task complete", id);
        setTaskList(taskList.map((task) => {
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }
            return task;
        }));
    }

    return (
        <div className="todoList">
            <div className="todo-items">
                {taskList.map((task, index) => (
                    <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
                        <div className="todoText">
                              <span>{task.text}</span>
                        </div>
                        <div className="icons">
                          <button onClick={() => handleComplete(task.id)}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button onClick={() => handleDelete(task.id)}>
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TodoList;