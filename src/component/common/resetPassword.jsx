import React from "react";

export default function ResetPassword(props) {
  //get states date from previous routes using history props
  const { name, email, _id } = props.history.location.state;
  return (
    <div className="p-2 formContainer">
      {console.log("my history=", props.history)}
      <div>
        <h3>Reset Password</h3>
        <hr />
        <p>Hello {name},</p>
        <h5>Send code via email</h5>
        <h6>{email}</h6>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ backgroundColor: "rgba(200,230,230,0.5)" }}
            className="btn mr-3"
          >
            Not you?
          </button>
          <button className="btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
