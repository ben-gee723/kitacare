/** @format */

import React from "react";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Todo.scss";

console.log(localStorage);

//schema: todos:[{text:String,done:Boolean}]

class ToDo extends React.Component {
  state = {
    todos: [],
    todones: [],
  };

  componentDidMount() {
    //onload
    let data = localStorage.getItem("todoapp");
    if (data) {
      let convertedData = JSON.parse(data);
      this.setState({
        todoItems: convertedData,
      });
    }
  }

  addItem = (value) => {
    console.log(this, "this is from App");
    let item = { text: value, done: false };

    //fetch => update todos
  };

  updateItem = (value) => {
    //find value from todos and update its value as it is not!!
  };

  deleteItem = (value) => {
    //findAndDelete from database
  };

  render() {
    let toDos = this.state.todoItems.filter((item) => !item.done);
    let toDones = this.state.todoItems.filter((item) => item.done);

    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route exact path='/'>
              <ToDosContainer
                toDos={toDos}
                addItem={this.addItem}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />

              <ToDonesContainer
                toDones={toDones}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default ToDo;
