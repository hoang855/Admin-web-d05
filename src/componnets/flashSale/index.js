import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const activeNavLinkClassName = (navLinkStatus) => {
  console.log(navLinkStatus);
  return navLinkStatus.isActive ? "active" : "";
};

const index = () => {
  return (
    <div className="container">
      <div className="container-main">
        <h1 className="container-title">
          Flash_Sale<span className="title__time">BẮT ĐẦU SAU 02:25:39</span>
        </h1>
        <div className="container-main__time">
          <ul>
            <li>
              <NavLink className={activeNavLinkClassName} to="/1">
                <span>09:00</span>
                <span>Đang Diễn Ra</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeNavLinkClassName} to="/2">
                <span>12:00</span>
                <span>Sắp Diễn Ra</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeNavLinkClassName} to="/3">
                <span>15:00</span>

                <span>Sắp Diễn Ra</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeNavLinkClassName} to="/4">
                <span>17:00</span>

                <span>Sắp Diễn Ra</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeNavLinkClassName} to="/5">
                <span>19:00</span>
                <span>Sắp Diễn Ra</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
