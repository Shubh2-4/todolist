import React, { useState } from 'react'
import './Todo.css'
import AddList from './AddList';

export default function TodoList() {
  let [todolist, setTodolist] = useState([]);
  let [inputValue, setInputValue] = useState('');

  let handleChange = (e) => {
    setInputValue(e.target.value);
  }

  let SaveTodoList = (event) => {
    event.preventDefault();
    if(!todolist.includes(inputValue)) {
      let final = [...todolist,inputValue]
      setTodolist(final);
      setInputValue("")
    }
    else {
      alert("Repetion not allowed");
    }
    
  }

  const handleDelete = (todo) => {
    let del = todolist.filter((item,i) => item !== todo)
    setTodolist(del);
  };

  return (
    <div>

      <div className='container1'>
        <h1>Todo List</h1>
        <form onSubmit={SaveTodoList}>     {/*Every work will be done under SaveTodoList  */}
          <input type="text" value={inputValue} onChange={handleChange}/>
          <button>Save</button>
        </form>

        <AddList todolist={todolist} deleteData={handleDelete}/>
      </div>
    </div>
  )
}
