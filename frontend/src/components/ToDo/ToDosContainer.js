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
                        <div className='actions'>
                            <input type="text" name="todo" onChange={(e)=>this.setState({inputFieldValue:e.target.value})}/>
                            <button className="btn" type="submit" value="Add">Add </button> 
                        </div>    
                    </label>
                                  
                </form>

                <div className="todos">
                    <h3>Tasks:</h3>
                    {this.props.toDos.map(todo=>{
                        return(
                            <div className="todo-item" key={todo.id}> 
                                <div>{todo.text}</div>
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