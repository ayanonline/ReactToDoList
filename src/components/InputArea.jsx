import React, { useState } from "react";

function InputArea(props) {
  const [newInput, setNewInput] = useState("");

  function inputHandle(event) {
    const value = event.target.value;
    setNewInput(value);
  }
  return (
    <div className="form">
      <input onChange={inputHandle} type="text" value={newInput} />
      <button
        onClick={() => {
          props.onClick(newInput);
          setNewInput("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputArea;
