import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ArchiveList from "./components/ArchiveList";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [archives, setArchives] = useState(() => {
    const savedArchives = localStorage.getItem("archives");
    return savedArchives ? JSON.parse(savedArchives) : [];
  });

  const [activeTab, setActiveTab] = useState("todos");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("archives", JSON.stringify(archives));
  }, [archives]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  const archiveTodo = (id) => {
    const todoToArchive = todos.find((todo) => todo.id === id);
    if (todoToArchive) {
      setArchives([...archives, todoToArchive]);
      deleteTodo(id);
    }
  };

  const deleteArchive = (id) => {
    setArchives(archives.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container">
        <h1 className="app-title">Todo App</h1>

        {activeTab === "todos" && (
          <>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleImportant={toggleImportant}
              archiveTodo={archiveTodo}
            />
          </>
        )}

        {activeTab === "archives" && (
          <ArchiveList archives={archives} deleteArchive={deleteArchive} />
        )}
      </div>
    </div>
  );
};

export default App;
