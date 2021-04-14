import React from 'react'

export default class NotHere extends React.Component {

    state = {
        inputFieldValue: ""
    }

    render() {
        return (
            <div >

                <div >
                    <h3>Tasks:</h3>
                    {this.props.childrenHere.map(child => {
                        return (
                            <div className="todo-item" key={child.id}>
                                <p>{child.firstName, child.lastName}</p>
                                <div className="actions">
                                    <button className="btn" onClick={() => this.props.updateChild(child.id)} > &#10004; </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}