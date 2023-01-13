import { useState, useEffect } from "react";
import TodoItem from "../todoItem";
import "./index.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [inputAddValue, setInputAddValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
    //   .then(() => setTodoList((prev) => [{ title: "TADA", id: 1000 }, ...prev]))
  }, []);

  const onHandleSearchClick = (e) => {
    e.preventDefault();

    setTodoList((prev) =>
      prev.filter((todo) => todo.title.includes(inputSearch))
    );
  };

  const onHandleAddValue = (e) => {
    e.preventDefault();

    setTodoList((prev) => [{ title: inputAddValue, id: 201 }, ...prev]);
    // prev[prev.length - 1].id++
  };

  return (
    <div className="TodoList">
      <h2>Todo list</h2>

      <form onSubmit={onHandleSearchClick}>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search..."
        />
        <input type="submit" value="Search" />
      </form>

      <form onSubmit={onHandleAddValue}>
        <input
          type="text"
          value={inputAddValue}
          onChange={(e) => setInputAddValue(e.target.value)}
          placeholder="Todo:"
        />
        <input type="submit" value="Add" />
      </form>

      {todoList.map((todo) => (
        <TodoItem text={todo.title} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
