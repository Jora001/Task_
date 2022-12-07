import React, {useState, useEffect} from 'react';
import './AddTask.css';
import {FaCheck, FaPlusCircle, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap-v5';

function AddTask() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input , setInput] = useState('');
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input
    }
    setTodos([todo, ...todos]);
  }
  const addToProgress = (id) => {
    const item = todos.find(x => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  }
  const deleteTodo = (id) => {
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  }
  const addtoCompleted = (id) => {
    const item = inprogress.find(x => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter(x => x.id !== id);
    setInprogress(filterarray);
  }
  useEffect(() => {

  }, [todos, inprogress])

  return (
    <div className="App_">
      <div className="container_">
        <h3 className="title_">ToDo List App</h3>
        <form className="form_todo_">
          <input type="text" className="form-control_" onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Todo" name="text"/>
          <button type="button" className="btn_" onClick={() => addTodo()}><FaPlusCircle className="icon"/></button>
        </form>
        <div className="todos_wrapper_">
         <div className="todos_list_">
           <h3 className="todo_title_">Todos List</h3>
           {todos.map((item, index) => 
            <div className="todo_card_" key={item.id}>
              <p className="card_text_">{item.text}</p>
              <FaCheck onClick={() => addToProgress(item.id)} className="icon-check-todo"/>
              <FaTrash onClick={() => deleteTodo(item.id)} className="icon-trash-todo"/>
            </div>
           )}
         </div>
         <div className="todos_list_">
           <h3 className="todo_title_">InProgress</h3>
           {inprogress.map((item, index) =>
            <div className="progress_card_" key={item.key}>
              <p className="card_text_">{item.text}</p>
              <FaCheck onClick={() => addtoCompleted(item.id)} className="icon-progress-todo"/>
            </div>
           )}
         </div>
         <div className="todos_list_">
           <h3 className="todo_title_">Completed</h3>
           {completed.map((item, index) => 
            <div className="completed_card_" key={item.id}>
              <p className="card_text_">{item.text}</p>
            </div>
           )}
         </div>
        </div>
      </div>
     <Link  className="nav-link_00" to="/profile">Back</Link>
    </div>
  );
}

export default AddTask;