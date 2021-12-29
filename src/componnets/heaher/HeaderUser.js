import React from "react";
import "./HeaderUser.css";

const HeaderUser = () => {
  return (
    <div className="header-user">
      <div className="header-user__notifications">
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
      <select>
        <div className="header-user__img">
          <img
            src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/0.jpg"
            alt=""
          />

          <option>1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </div>
      </select>
    </div>
  );
};

export default HeaderUser;
