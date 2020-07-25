import React from "react";
import { Avatar } from "@material-ui/core";
import "../css/card.css";

function Card({ title, data, progressValue, active }) {
  return (
    <div className={`card ${active && "active"}`}>
      <div className="card-data">
        <h4 className="card-title">{title}</h4>
        <h2 className="title-data">{data}</h2>
        {progressValue && (
          <progress
            className="card-progress"
            value={progressValue}
            max="100"
          ></progress>
        )}
      </div>
      <div className="card-avatar">
        <Avatar alt="{}" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Card;
