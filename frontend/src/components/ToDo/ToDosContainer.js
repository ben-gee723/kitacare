import React from 'react'

export default class ToDosContainer extends React.Component {

   state={
       inputFieldValue:""
   }

   addData=(e)=>{
    e.preventDefault()
    console.log(this, "from Child todoscontainer")
    this.props.addItem(this.state.inputFieldValue)

   }

   render(){
       return (
        <div className="todos-container">
            
                <form className="todo-form" onSubmit={this.addData}>
                
                    <label className="input-item">
                    <h3>Task List:</h3>
                    <br/>
                        <input type="text" name="todo" onChange={(e)=>this.setState({inputFieldValue:e.target.value})}/>
                    </label>
                    <input className="btn" type="submit" value="Add"/>
                </form>

                <div className="todos">
                    <h3>Tasks:</h3>
                    {this.props.toDos.map(todo=>{
                        return(
                            <div className="todo-item" key={todo.id}> 
                                <p>{todo.text}</p>
                                <div className="actions">
                                    <button className="btn" onClick={ ()=>this.props.updateItem(todo.id) } > &#10004; </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
   }
    
}