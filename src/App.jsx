import React, { useState } from "react";
import uuid from "react-uuid";
import Heading from "./components/Heading";
import InputArea from "./components/InputArea";
import TodoItem from "./components/TodoItem";

function App() {
  const [lists, setLists] = useState([]);
  //Add item
  function addItem(newInput) {
    newInput &&
      setLists((prevValue) => {
        return [...prevValue, newInput];
      });
  }

  //Delete item
  function deleteItem(id) {
    setLists((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <InputArea onClick={addItem} />
      <div className="list">
        <ul>
          {lists.map((item, index) => (
            <TodoItem
              text={item}
              key={uuid()}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
