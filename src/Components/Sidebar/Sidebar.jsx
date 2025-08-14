import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img src={assets.menu_icon} alt="menu icon" />
        </div>
        <div className="new_chat" title="Start a new chat">
          <img src={assets.plus} alt="plus icon" />
          <p>New Chat</p>
        </div>
        <div className="recents">
          <p className="recent_title">Recents</p>
          <div className="recent_entries">
            <div className="entry1">
              <img src={assets.message_icon} alt="msg icon" />
              <p>What is react ?</p>
            </div>
            <div className="entry1">
              <img src={assets.message_icon} alt="msg icon" />
              <p>What is react ?</p>
            </div>
            <div className="entry1">
              <img src={assets.message_icon} alt="msg icon" />
              <p>What is react ?</p>
            </div>
            <div className="entry1">
              <img src={assets.message_icon} alt="msg icon" />
              <p>What is react ?</p>
            </div>
            <div className="entry1">
              <img src={assets.message_icon} alt="msg icon" />
              <p>What is react ?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icon">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="icon">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="icon">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
