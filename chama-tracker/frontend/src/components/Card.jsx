import React from "react";

function Card({ title, value, icon, tone = "default" }) {
  return (
    <div className={`card card--${tone}`}>
      <div className="card-icon">{icon}</div>

      <div className="card-content">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default Card;