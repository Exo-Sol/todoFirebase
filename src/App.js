import React, { useState } from "react";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Go grocery shopping",
    done: false,
  },
  {
    id: 2,
    title: "Be more humble",
    done: true,
  },
  {
    id: 3,
    title: "Walk the dog",
    done: false,
  },
];

const App = () => {
  const [todosArray, setTodosArray] = useState(initialTodos);
  const [todo, setTodo] = useState("");

  const togleTodo = (todo) => {
    setTodosArray(
      todosArray.map((t) => {
        return t.id === todo.id ? { ...t, done: !t.done } : t;
      })
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
    setTodosArray([
      ...todosArray,
      { id: Date.now(), title: todo, done: false },
    ]);
  };

  const deleteTodo = (tt) => {
    console.log(tt);

    todosArray.forEach((ele, ind) => {
      if (tt === ele.id) {
        let newArray = todosArray.toSpliced(ind, 1);

        return setTodosArray(newArray);
      } else {
        return ele;
      }
    });
  };

  return (
    <div>
      <header className="header">
        <h1>TODO Tracker</h1>
      </header>
      <form
        onSubmit={(e) => submitForm(e)}
        onKeyDown={(e) => {
          e.key === "eneter" && submitForm();
        }}
      >
        <input
          value={todo}
          placeholder="write new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button>add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodo("");
          }}
        >
          clear
        </button>
      </form>
      <main className="main">
        {todosArray.map((todo) => (
          <div>
            <div
              key={todo.id}
              className="todo"
              style={{ textDecoration: todo.done ? "line-through" : undefined }}
              onClick={() => togleTodo(todo)}
            >
              {todo.title}
            </div>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
