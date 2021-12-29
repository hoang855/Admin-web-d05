import { useState } from "react";
import "./HeaderInput.css";

const HeaderInput = () => {
  const [searchInput, setsearchInput] = useState("");
  console.log("Search", searchInput);

  const handleChangeInoutSearch = (event) => {
    setsearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="header-input">
      <form onSubmit={handleSubmit}>
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          placeholder="Search for something..."
          value={searchInput}
          onChange={handleChangeInoutSearch}
        />
      </form>
    </div>
  );
};

export default HeaderInput;
