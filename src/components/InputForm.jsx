import React, { useState, useEffect } from 'react';

const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState('');

    useEffect(() => {
        console.log("taskList updated:", taskList);
        setInputText('');
    }, [taskList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([
          ...taskList,
          {
            id: taskList.length + 1,
            text: inputText
          }
        ]);
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputText(newValue);
    }
    return (
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
          />
          <button>
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
      </div>
    )
};

export default InputForm;