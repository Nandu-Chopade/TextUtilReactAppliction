import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.message &&
      <div class="alert alert-primary" role="alert">
        <strong>{props.message.type}: </strong> {props.message.message}
      </div>}
    </div>
  );
}
