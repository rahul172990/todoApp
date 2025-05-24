import { format } from "date-fns";
import { FiTrash2 } from "react-icons/fi";

const ArchiveList = ({ archives, deleteArchive }) => {
  return (
    <div className="archive-list">
      <h2 className="archive-title">Archived Tasks</h2>
      {archives.length > 0 ? (
        <ul className="archive-items">
          {archives.map((todo) => (
            <li key={todo.id} className="archive-item">
              <div className="archive-text">
                {todo.text}
                <small className="archive-date">
                  {format(new Date(todo.createdAt), "MMM dd, yyyy - h:mm a")}
                </small>
              </div>

              <button
                onClick={() => deleteArchive(todo.id)}
                className="archive-delete-button"
                title="Delete permanently"
              >
                <FiTrash2 />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <p>No archived tasks yet.</p>
        </div>
      )}
    </div>
  );
};

export default ArchiveList;
