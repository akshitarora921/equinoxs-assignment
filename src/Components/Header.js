import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header-notification"
        src="https://www.pinclipart.com/picdir/middle/369-3699390_notification-png-notification-icon-png-free-clipart.png"
        alt="notification"
      />

      <img
        className="header-exit"
        src="https://www.pngkit.com/png/detail/309-3092454_exit-comments-quit-icon.png"
        alt="exit"
      />
    </div>
  );
}

export default Header;
