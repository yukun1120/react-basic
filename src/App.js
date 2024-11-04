import './App.css';
import Title from './components/Title';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {
  const [taskList, setTaskList] = useState(() => {
    const savedTaskList = localStorage.getItem('taskList');
    return savedTaskList ? JSON.parse(savedTaskList) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('taskList', JSON.stringify(taskList));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [taskList]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
