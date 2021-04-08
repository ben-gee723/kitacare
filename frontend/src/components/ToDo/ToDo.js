import React from "react";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './Todo.scss'
import {v4} from "uuid" 

console.log(localStorage);

class ToDo extends React.Component {
  state = {
    todoItems: [],
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
    let item = { id: v4(), text: value, done: false };
    let copystate = [...this.state.todoItems];
    copystate.push(item);
    this.setState(
      {
        todoItems: copystate,
      },
      () => {
        localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems));
      }
    );
  };

  updateItem = (id) => {
    let updatedItems = this.state.todoItems.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });

    this.setState({
      todoItems: updatedItems,
    },  () => {
      localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems));
    });
  };

  deleteItem=(id)=>{
     /*  let CopyState=[...this.state.todoItems] */
      let updatedData = this.state.todoItems.filter(item=>item.id!==id)
      this.setState({
        todoItems:updatedData
      },()=>{
        localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems));
      })
  }

  render() {
      
    let toDos = this.state.todoItems.filter((item) => !item.done);
    let toDones = this.state.todoItems.filter((item) => item.done);
    
    return (
      <BrowserRouter>
        <div className="app">
        
         
          <Switch>
              
            <Route exact path="/">
                
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
