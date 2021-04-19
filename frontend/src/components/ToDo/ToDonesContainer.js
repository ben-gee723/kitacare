/** @format */

import React from "react";

export default function ToDonesContainer({ toDones, updateItem, deleteItem }) {
  return (
    <div className='todones-container'>
      <h3>Done:</h3>
      {toDones.map((todone) => {
        return (
          <div className='todones-item' key={todone.text}>
            <div className='dones'>{todone.text}</div>
            <div>
              <button className='btn' onClick={() => updateItem(todone.text)}>
                {" "}
                &#8635;{" "}
              </button>
              <button className='btn' onClick={() => deleteItem(todone.text)}>
                {" "}
                &#x2718;{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
