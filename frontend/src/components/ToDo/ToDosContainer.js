/** @format */

import React, { useState } from "react";

export default function ToDosContainer(props) {
  let [inputFieldValue, setInputFieldValue] = useState("");

  let addData = (e) => {
    e.preventDefault();
    props.addItem(inputFieldValue);
  };
  return (
    <div className='todos-container'>
      <form className='todo-form' onSubmit={addData}>
        <h3>Task List:</h3>
        <label className='input-item'>
          <div className='actions'>
            <label>
              <input
                type='text'
                name='todo'
                onChange={(e) => setInputFieldValue(e.target.value)}
                className='input-todo'
              />
              <button className='btn' type='submit' value='Add'>
                Add{" "}
              </button>
            </label>
          </div>
        </label>
      </form>

      <div className='todos'>
        <h3>Tasks:</h3>
        {props.toDos.map((todo) => {
          return (
            <div className='todo-item' key={todo._id}>
              <div>{todo.text}</div>
              <div className='actions'>
                <button
                  className='btn'
                  onClick={() => props.updateItem(todo.text)}>
                  {" "}
                  &#10004;{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
