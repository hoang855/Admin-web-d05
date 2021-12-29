import { NavLink } from "react-router-dom";
import "./LayouList.css";

const LayouList = () => {
  return (
    <div className="LayouList-container">
      <ul>
        <li className="ul-li-admin">
          <NavLink to="/">
            <div className="div-flet">
              <span className="neme-admin">Admin</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shards-dashboard">
            <div className="div-flet">
              <ion-icon name="bookmark-outline"></ion-icon>
              <span>Blog Dashboard</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-new-post">
            <div className="div-flet">
              <ion-icon name="add-circle-outline"></ion-icon>
              <span>Add New Post</span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tables">
            <div className="div-flet">
              <ion-icon name="file-tray-stacked-outline"></ion-icon>
              <span>Tables</span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user-profile">
            <div className="div-flet">
              <ion-icon name="person-outline"></ion-icon>
              <span>User Profile</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LayouList;
