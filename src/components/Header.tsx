import React, { FC, useState, ChangeEvent, useEffect } from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

interface IProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: FC<IProps> = ({ toggleTheme, theme }) => {
  return (
    <div className="main_div">
      <h4>devfinder </h4>{" "}
      <button className="btn-p" onClick={() => toggleTheme()}>
        <div className="main_div">
          <button className="btn-p">
            {theme === "light-theme" ? "DARK" : "LIGHT"}
          </button>
          <img
            style={{ marginLeft: "10px" }}
            src={theme === "light-theme" ? Moon : Sun}
          />
        </div>
      </button>
    </div>
  );
};

export default Header;
