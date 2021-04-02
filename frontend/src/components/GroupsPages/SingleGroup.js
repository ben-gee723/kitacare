import React, { useState, useContext } from "react";
import SingleGroupEdit from "./SingleGroupEdit";

export default function SingleGroup(props) {
  const [showForm, setShowForm] = useState(false);

  const handleEdit = group => {
    setShowForm(!showForm);
    props.history.push({ pathname: "/editgroup", state: { group: group } });
  };

  const group = props.location.state.group;
  return (
    <div>
      {showForm && (
        <div>
          <SingleGroupEdit />
        </div>
      )}
      <>
        <h1>Groups</h1>
        <div>
          <div key={group._id}>
            <div>
              <h3>{group.groupName}</h3>
              <p>{group.description}</p>
            </div>
            <div>
              <button
                type='submit'
                value='edit'
                className='edit'
                onClick={() => handleEdit(group)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
