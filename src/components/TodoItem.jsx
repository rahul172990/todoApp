import { useState } from "react";
import { FiEdit, FiTrash2, FiArchive, FiStar, FiCheck } from "react-icons/fi";
import { format } from "date-fns";

const TodoItem = ({
  todo,
  editTodo,
  deleteTodo,
  toggleComplete,
  toggleImportant,
  archiveTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, {
        ...todo,
        text: editText,
      });
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""} ${
        todo.important ? "important" : ""
      }`}
    >
      <div className="todo-content">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
            className="edit-input"
          />
        ) : (
          <>
            <div className="todo-text">
              {todo.text}
              <small className="todo-date">
                {format(new Date(todo.createdAt), "MMM dd, yyyy - h:mm a")}
              </small>
            </div>
            <div className="todo-actions">
              {!todo.completed && (
                <>
                  <button
                    onClick={() => toggleImportant(todo.id)}
                    className={`action-button important-button ${
                      todo.important ? "active" : ""
                    }`}
                    title="Mark as important"
                  >
                    <FiStar />
                  </button>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="action-button edit-button"
                    title="Edit"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => archiveTodo(todo.id)}
                    className="action-button archive-button"
                    title="Archive"
                  >
                    <FiArchive />
                  </button>

                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="action-button complete-button"
                    title="Complete"
                  >
                    <FiCheck />
                  </button>
                </>
              )}

              {todo.completed && (
                <div className="completed-badge">
                  <FiCheck /> Completed
                </div>
              )}

              <button
                onClick={() => deleteTodo(todo.id)}
                className="action-button delete-button"
                title="Delete"
              >
                <FiTrash2 />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
