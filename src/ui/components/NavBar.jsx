import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", { replace: true });
    logout();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={`nav-item nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={`nav-item nav-link  ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={`nav-item nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end  ">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-primary ">{user?.name}</span>

            <button
              className="  border nav-item nav-link  btn btn-outline-secondary "
              onClick={onLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
