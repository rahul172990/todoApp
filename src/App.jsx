import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(null);
  const [todoToAdd, setTodoToAdd] = useState("");

  const fetchTodos = async () => {
    const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoData = await todosData?.json();
    setTodos(todoData);
  };

  const addToDo = () => {
    const newToDoList = [
      ...todos,
      { completed: false, id: todos?.length + 1, title: todoToAdd, userId: 1 },
    ];
    setTodos(newToDoList);
  };

  const deleteTodo = (id) => {
    const todoList = todos?.filter((todo, idx) => todo?.id !== id);
    setTodos(todoList);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log("todos ", todos);

  return (
    <>
      <input
        type="text"
        value={todoToAdd}
        onChange={(e) => setTodoToAdd(e?.target?.value)}
      />
      <button onClick={addToDo}>Submit</button>

      <div>Todo Task</div>
      {todos?.map((todo, idx) => {
        return (
          <div key={todo?.id} style={{ display: "flex", margin: 10 }}>
            <span
              style={{
                marginRight: 10,
              }}
            >
              {idx + 1}
            </span>
            <span>{todo?.title}</span>
            <button
              style={{
                // padding: 5,
                width: 20,
                height: 15,
                margin: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              onClick={() => deleteTodo(todo?.id)}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
