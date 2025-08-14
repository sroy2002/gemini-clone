import {useState} from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img src={assets.menu_icon} alt="menu icon" onClick={()=>setExtended(!extended)}/>
        </div>
        <div className="new_chat" title="Start a new chat">
          <img src={assets.plus} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
    {  extended ?  <div className="recents">
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
        </div> : null}
      </div>
      <div className="bottom">
        <div className="icon">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="icon">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="icon">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
