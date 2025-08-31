import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Dropdown from "../Dropdown/Dropdown";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <div className="title_box">
          <p className="title">Gemini</p>
          <Dropdown/>
        </div>
        <div className="user_img">
          <img src={assets.user_icon} alt="user img" />
        </div>
      </div>
    </div>
  );
};

export default Main;
