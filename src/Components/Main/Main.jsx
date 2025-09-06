import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets.js";
import Dropdown from "../Dropdown/Dropdown";
import { Button } from "@mui/material";
import gemini_icon from "../../assets/gemini-color.png";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <div className="title_box">
          <p className="title">Gemini</p>
          <Dropdown />
        </div>
        <div className="user_img">
          <Button
            variant="contained"
            startIcon={
              <img
                src={gemini_icon}
                alt="gemini"
                style={{ width: 18, height: 18 , display:"flex", alignItems:"center"}}
              />
            }
            sx={{backgroundColor:"#dce3eb", width:"9rem", color:"black", boxShadow:"none", fontSize:"0.85rem"}}
          >
            Upgrade
          </Button>
          <img src={assets.user_icon} alt="user img" className="profile_pic" />
        </div>
      </div>
    </div>
  );
};

export default Main;
