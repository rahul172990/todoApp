import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    addTodo({
      id: Date.now(),
      text: value,
      completed: false,
      important: false,
      createdAt: new Date().toISOString(),
    });

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        <FiPlus />
      </button>
    </form>
  );
};

export default TodoForm;
