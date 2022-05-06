import React, { FC, useState, ChangeEvent } from "react";
import SearchIcon from "../assets/icon-search.svg";

interface InputBoxProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  fetchUsers: () => Promise<void>;
}

const InputBox: FC<InputBoxProps> = ({
  setSearch,
  searchValue,
  fetchUsers,
}: InputBoxProps) => {
  //Handle Input Box change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSearch = (): void => {
    try {
      fetchUsers();
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchUsers();
    }
  };

  return (
    <div className="input_box">
      <img src={SearchIcon} />{" "}
      <input
        placeholder="Search Github Username.."
        style={{ flex: 1, marginLeft: "25px" }}
        onChange={(e) => handleChange(e)}
        value={searchValue}
        onKeyDown={(e) => handleKeydown(e)}
      />{" "}
      <button className="btn_primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default InputBox;
