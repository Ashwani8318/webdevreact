import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const setActive = ({ isActive }) => {
    return {
      color: isActive ? "#6366f1" : "#64748b",
      fontWeight: isActive ? "bold" : "500",
      borderBottom: isActive ? "3px solid #6366f1" : "none",
      paddingBottom: isActive ? "0.5rem" : "0",
    };
  };

  return (
    <header className="header-modern">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand brand-logo" to="/">
            <span className="brand-icon">⚛️</span>
            React Dev Hub
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={setActive}
                  aria-current="page"
                  to="/"
                >
                  🏠 Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/counter">
                  🔢 Counter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/form">
                  📝 Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/table">
                  📊 Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/query">
                  🌐 Language
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
