const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <button
        className={`nav-button ${activeTab === "todos" ? "active" : ""}`}
        onClick={() => setActiveTab("todos")}
      >
        Todos
      </button>
      <button
        className={`nav-button ${activeTab === "archives" ? "active" : ""}`}
        onClick={() => setActiveTab("archives")}
      >
        Archives
      </button>
    </nav>
  );
};

export default Navbar;
