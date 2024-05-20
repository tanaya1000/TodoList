import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todolist, settodoList] = useState([]);

  const addTodo = () => {
    // settodoList([...todolist, todo]); //works asynchrously taking time to execute
    // console.log("1234", todolist);

    //works syncho
    settodoList((todolist) => {
      const updatedList = [...todolist, todo];
      console.log(updatedList);
      setTodo("");
      return updatedList;
    });
  };

  const removeTodo = (i) => {
    const updatedlistData = todolist.filter((ele, id) => {
      return i != id;
    });
    settodoList(updatedlistData);
  };

  const removeAll = () => {
    settodoList([]);
  };
  return (
    <>
      <div
        className="container mx-auto w-50 m-5"
        style={{ backgroundColor: "rgb(7,2,71)" }}>
        <div
          className="header text-center text-white fs-2 fw-bold"
          style={{ marginTop: "10px" }}>
          TODO LIST
        </div>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-75 m-4 "
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-warning mt-4"
            style={{ height: "40px" }}
            onClick={addTodo}>
            Add
          </button>
        </div>
        <p className="text-white fs-5 text-center">Here is your list :{")"}</p>
        {todolist != [] &&
          todolist.map((val, i) => {
            return (
              <>
                <div key={i} className="d-flex mb-3">
                  <div className="bg-white w-75 p-2 rounded ms-5 text-center ">
                    {val}
                  </div>
                  <button
                    type="button"
                    className="btn btn-success ms-2"
                    onClick={() => removeTodo(i)}>
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        {todolist.length >= 1 && (
          <button
            type="button"
            className="btn btn-success mb-3"
            onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
};

export default TodoList;
