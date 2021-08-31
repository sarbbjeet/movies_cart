import React from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";

const verificationMsg = () => {
  return (
    <div>
      <h2>hello {auth.getCurrentUser().name},</h2>
      <p>
        this account is not verified so visit to email and click on the received
        link.
      </p>
      <p>re-send email verification click on below link.</p>
      <button className="btn btn-primary" onClick={auth.reVerification}>
        Verification Link
      </button>
    </div>
  );
};

export default function UserAccount(props) {
  return (
    <div>
      {!auth.accountVerifiedStatus() && verificationMsg()}
      {auth.accountVerifiedStatus() && (
        <>
          <h1>Hi {auth.getCurrentUser().name},</h1>
          <h3>Welcome to movies app</h3>
        </>
      )}
    </div>
  );
}
