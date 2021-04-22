/** @format */

import React, { useEffect, useState, useContext } from "react";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { MyContext } from "../../Container";
import "./Todo.scss";
import axios from "axios";

export default function Todo() {
  let [todos, setTodos] = useState([]);
  const { user, reset } = useContext(MyContext);
  let toDos = todos.length ? todos.filter((item) => !item.done) : [];
  let toDones = todos.length ? todos.filter((item) => item.done) : [];

  useEffect(() => {
    //onload get todos from database:
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/users/getTodos/${user._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((result) => {
        if (result.data.success) {
          setTodos(result.data.todos);
        } else {
          console.log(result);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  }, []);

  let addItem = (value) => {
    let item = { text: value, done: false };
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/users/addTodo/${user._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: item,
    })
      .then((result) => {
        if (result.data.success) {
          setTodos(result.data.updatedTodos);
        } else {
          console.log(result);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  };

  let updateItem = (value) => {
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/users/updateTodo/${user._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { value: value },
    })
      .then((result) => {
        if (result.data.success) {
          setTodos(result.data.updatedTodos);
        } else {
          console.log(result);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  };

  let deleteItem = (value) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_BASE_URL}/users/deleteTodo/${user._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { value: value },
    })
      .then((result) => {
        if (result.data.success) {
          setTodos(result.data.updatedTodos);
        } else {
          console.log(result);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  };

  return (
    <div className='app'>
      <ToDosContainer
        toDos={toDos}
        addItem={addItem}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
      <ToDonesContainer
        toDones={toDones}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}
