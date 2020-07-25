import React from "react";
import "../css/navbar.css";
import { MdDashboard, MdAccountBox } from "react-icons/md";
import { BsBagFill, BsLockFill } from "react-icons/bs";
import { FiUsers, FiType } from "react-icons/fi";
import { AiFillPicture, AiTwotoneSetting } from "react-icons/ai";
import { Avatar, Button } from "@material-ui/core";

function Navbar({ username, designation }) {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="header-avatar">
          <Avatar alt="{username}" src="/static/images/avatar/1.jpg" />
        </div>
        <h2 className="navbar-username">{username}</h2>
        <h6 className="navbar-userdesignation">{designation}</h6>
      </div>
      <hr />
      <div className="navbar-content">
        <div className="navbar-row">
          <MdDashboard />
          <span className="navbar-rowtitle"> Dashboard</span>
        </div>
        <div className="navbar-row">
          <FiUsers />
          <span className="navbar-rowtitle">User</span>
        </div>
        <div className="navbar-row">
          <BsBagFill />
          <span className="navbar-rowtitle">Product</span>
        </div>
        <div className="navbar-row">
          <BsLockFill />
          <span className="navbar-rowtitle">Authentication</span>
        </div>
        <div className="navbar-row">
          <FiType />
          <span className="navbar-rowtitle">Typography</span>
        </div>
        <div className="navbar-row">
          <AiFillPicture />
          <span className="navbar-rowtitle">Icons</span>
        </div>
        <div className="navbar-row">
          <MdAccountBox />
          <span className="navbar-rowtitle">Account</span>
        </div>
        <div className="navbar-row">
          <AiTwotoneSetting />
          <span className="navbar-rowtitle">Setting</span>
        </div>
      </div>
      <hr />
      <div className="navbar-upgrade">
        <img src="" alt="" className="upgrade" />
        <h4 className="upgradeheading">Upgrade to PRO</h4>
        <h5 className="upgradetext">Upgrade to PRO get even more Component</h5>
        <Button className="upgradebutton" variant="contained" color="primary">
          UPGRADE
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
