import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/">
                <h1>Regular</h1>
                </NavLink>
          </li>
          <li>
            <NavLink to="/Hot">
                <h1>Hot</h1>
                </NavLink>
          </li>
        </ul>
      </div>
    );
  };

export default Navigation