import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function UserCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.username}</h5>
        <h6>{props.email}</h6>
      </div>
    </div>
  );
}
