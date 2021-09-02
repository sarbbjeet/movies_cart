import React from "react";
import { forgottenPassword as fp } from "../../../services/forgottenPasswordService";

export default function ResetPassword(props) {
  //get states date from previous routes using history props
  const { name, email } = props.history.location.state;

  const submitSecretCode = async () => {
    const { data: response } = await fp.resetPassword(email);
    if (!response.success) return console.log(response.message);
    return props.history.push({
      pathname: "/security-code",
      state: { email },
    });
  };
  return (
    <div className="p-2 formContainer">
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
          <button className="btn btn-primary" onClick={submitSecretCode}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
