import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  editTodo,
  deleteTodo,
  toggleComplete,
  toggleImportant,
  archiveTodo,
}) => {
  const importantTodos = todos.filter(
    (todo) => todo.important && !todo.completed
  );
  const normalTodos = todos.filter(
    (todo) => !todo.important && !todo.completed
  );
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="todo-list">
      {normalTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Tasks</h3>
          {normalTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleImportant={toggleImportant}
              archiveTodo={archiveTodo}
            />
          ))}
        </div>
      )}

      {importantTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Important</h3>
          {importantTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleImportant={toggleImportant}
              archiveTodo={archiveTodo}
            />
          ))}
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Completed</h3>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleImportant={toggleImportant}
              archiveTodo={archiveTodo}
            />
          ))}
        </div>
      )}

      {todos.length === 0 && (
        <div className="empty-state">
          <p>No tasks yet. Add one above!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
