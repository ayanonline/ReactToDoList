import React from "react";

function TodoItem(props) {
  return (
    <>
      <li>
        {props.text}{" "}
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoItem;
