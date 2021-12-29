import React from "react";
import "./HeaderUser.css";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const HeaderUser = () => {
  const { Option } = Select;
  let navigate = useNavigate();
  const handleChange = (value) => {
    navigate(value);
  };

  const { param } = useParams();

  return (
    <div className="header-user">
      <div className="header-user__notifications">
        <ion-icon name="notifications-outline"></ion-icon>
      </div>

      <div className="header-user__user">
        <img
          src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/0.jpg"
          alt=""
        />
        <Select
          defaultValue="Sierra Brooks"
          style={{ width: 200, marginLeft: 10 }}
          onChange={handleChange}
          className="bor-dor"
        >
          <Option value="/shards-dashboard">
            <div className="op">
              <ion-icon name="bookmark-outline"></ion-icon>
              <span>Blog Dashboard</span>
            </div>
          </Option>
          <Option value="/add-new-post">
            <div className="op">
              <ion-icon name="add-circle-outline"></ion-icon>
              <span>Add New Post</span>
            </div>
          </Option>
          <Option value="/tables">
            <div className="op">
              <ion-icon name="file-tray-stacked-outline"></ion-icon>
              <span>Tables</span>
            </div>
          </Option>
          <Option value="/user-profile">
            <div className="op">
              <ion-icon name="person-outline"></ion-icon>
              <span>User Profile</span>
            </div>
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default HeaderUser;
