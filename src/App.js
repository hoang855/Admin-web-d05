import Layout from "./componnets/Layouts/Layouts";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./componnets/dashBoard/DashBoard";
import AddNewPost from "./componnets/addNewPost/AddNewPost";
import Tables from "./componnets/tables/Tables";
import UserProfile from "./componnets/userprofile/UserProfile";
import LayouList from "./componnets/Layouts/LayouList";
import HeaderInput from "./componnets/heaher/HeaderInput";
import HeaderUser from "./componnets/heaher/HeaderUser";

function App() {
  return (
    <div className="App">
      <Layout />
      <div className="app-container">
        <div className="app-left-left"></div>
        <div className="app-left">
          <LayouList />
        </div>
        <div className="app-right">
          <div className="app-right-header">
            <div className="app-right-header__input">
              <HeaderInput />
            </div>
            <div className="app-right-header__user">
              <HeaderUser />
            </div>
          </div>
          <div className="app-right-header--header"></div>
          <Routes>
            <Route path="/shards-dashboard" element={<DashBoard />} />
            <Route path="/add-new-post" element={<AddNewPost />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
